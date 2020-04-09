//保存导入的数据
var carData = [];
//保存筛选条件的属性名 
var condition_title = '';
// 保存数据标题
var arrTitle = [];
//保存满足条件的数据
var meetData = [];

$(document).ready(function() {
    var wb;
    var rABS = false;

    function fixdata(data) {
        var o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }
    //时间转化

    function add0(m) { return m < 10 ? '0' + m : m }

    function formatDate(numb, format) {
        if (numb > 43890.5) {
            numb -= 1
        }
        let time = new Date((numb - 1) * 24 * 3600000 + 1)
            //console.log(time)
        time.setYear(time.getFullYear() - 70)
            //console.log(time)
        var y = time.getFullYear() + ''
        var m = time.getMonth() + 1 + ''
        var d = time.getDate() + ''
        var h = time.getHours() - 8 + ''
        var mm = time.getMinutes() + '';
        //var s = time.getSeconds();
        if (numb == 43890.5) {
            m = '2';
            d = '29';
        }
        if (format && format.length === 1) {
            return y + '-' + m + '-' + d + ' ' + add0(h) + ':' + add0(mm);
        }
        return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }

    $("#file").change(function() {
        if (!this.files) {
            return;
        }
        com = this.files;
        //console.log(com.length)
        for (let f = 0; f < com.length; f++) {
            var reader = new FileReader();
            if (rABS) {
                reader.readAsArrayBuffer(com[f]);
            } else {
                reader.readAsBinaryString(com[f]);
            }
            reader.onload = function(e) {
                var data = e.target.result;
                if (rABS) {
                    wb = XLSX.read(btoa(fixdata(data)), {
                        type: 'base64'
                    });
                } else {
                    wb = XLSX.read(data, {
                        type: 'binary'
                    });
                }
                let smData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                // console.log(smData)
                var html = ''
                let smTitle = []
                for (let key in smData[0]) {
                    html += "<label for='" + key + "'><input class='radio' id='" + key + "' type='radio' name='row' value='" + key + "' />" + key + "</label>"
                    smTitle.push(key)
                }
                for (let key in smData) {
                    for (let item in smTitle) {
                        if (!smData[key].hasOwnProperty(smTitle[item])) {
                            smData[key][smTitle[item]] = ''
                        }
                    }
                    if (smData[key].hasOwnProperty('新增日期')) {
                        //console.log(smData[key]['新增日期'])
                        if (typeof(smData[key]['新增日期']) == 'number') {
                            smData[key]['新增日期'] = formatDate(smData[key]['新增日期'], '/');
                        }

                    }
                }
                arrTitle = smTitle
                carData = carData.concat(smData);
                html += '<button onclick="leadRow()">确定</button>'
                $('.screen-title').html(html)
                alert('导入成功')
            };
        }
    })
});


function leadRow() {
    condition_title = $("input[name='row']:checked").val();
    $('.condition-data').val('')
    if (!condition_title) {
        $('.screen-content').css('display', 'none')
        alert('请选择查询种类')
    } else {
        $('.screen-content').css('display', 'block')
    }
}

//获取筛选条件的数据
var html = ''

//获取条件  并查询满足条件的内容保存到 meetData 中
function gainCon() {
    var txt = $('.condition-data').val()
    if (!txt) {
        alert('请输入查询条件')
    } else {
        txt = txt.split('\n')
        if (!txt[txt.length - 1]) {
            txt.pop()
        } else {
            console.log(txt[txt.length - 1])
        }

        for (let n = 0; n < txt.length; n++) {
            let reg = txt[n];
            carData.filter((item, i) => {
                if (item[condition_title].toString().indexOf(reg) != -1) {
                    meetData.push(item)
                }
            })
        }
    }
}

function gainData() {
    meetData = []; //清空上次查询的结果
    gainCon()
    var html = ''
    if (meetData.length != 0) {
        $('.export').css('display', 'block')
        html += '<tr class="table-title">'
        for (let key in arrTitle) {
            html += '<td>' + arrTitle[key] + '</td>'
        }
        html += '</tr>';
        for (let key in meetData) {
            html += '</tr>'
            let str = meetData[key]
            for (let item in arrTitle) {
                html += '<td>' + str[arrTitle[item]] + '</td>'
            }
            html += '</tr>'
        }
    } else {
        alert('查询的内容为空');
        $('.export').css('display', 'none')
    }
    $('.table').html(html)
}




function downloadExl(str) {
    var arry = [];
    arry[0] = arrTitle;
    // that.Data指要导出的数据
    str.map(a => {
        //指定要导出的数据
        var _arry = [];
        for (let key in arrTitle) {
            _arry.push(a[arrTitle[key]].toString());
        }
        return _arry;
    }).forEach(a => {
        arry.push(a);
    });
    //console.log(arry)
    var sheet = XLSX2.utils.aoa_to_sheet(arry);
    //循环单元格设置样式
    var s = sheet['!ref'];
    sheet["A2"].s = {
        font: {
            name: '宋体',
            sz: 18,
            color: { rgb: "#f00" },
            bold: true,
            italic: false,
            underline: false
        },
        alignment: {
            horizontal: "center",
            vertical: "center"
        }
    };
    var rows = s.substr(s.length - 1, 1);
    //设置列
    var cloums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var j = 0; j < arrTitle.length; j++) {
        for (var i = 1; i <= rows; i++) {
            if (i == 1) {
                sheet[cloums[j] + i].s = { //样式  
                    font: {
                        bold: true,
                        italic: false,
                        underline: false
                    },
                    alignment: {
                        horizontal: "left",
                        vertical: "center",
                        wrap_text: false
                    }
                };
            } else {
                sheet[cloums[j] + i].s = { //样式  
                    alignment: {
                        horizontal: "left",
                        vertical: "center",
                        wrap_text: false
                    }
                };
            }
        }
    }
    sheet["!cols"] = [];
    sheet["!rows"] = [];
    let title = '';
    for (let key in arrTitle) {
        sheet["!cols"].push({ wch: 15 })
        title += arrTitle[key] + '、';
    }
    for (let key in arry) {
        sheet["!rows"].push({ hpt: 20 })
    }
    // sheet["!cols"] = [{
    //     wpx: 100
    // }]; //单元格列宽 
    //  = [
    //     ,
    //     { hpt: 20 },
    // ];
    openDownloadDialog(sheet2blob(sheet), '筛选.xlsx');
    condition_title = '';
    meetData = [];
}