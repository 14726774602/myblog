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

    $("#file").change(function() {
        if (!this.files) {
            return;
        }
        var f = this.files[0];
        var reader = new FileReader();
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
            carData = carData.concat(smData);
            //console.log(carData)
            var html = ''
            for (let key in smData[0]) {
                html += "<label for='" + key + "'><input id='" + key + "' type='radio' name='row' value='" + key + "' />" + key + "</label>"

            }
            html += '<button onclick="leadRow()">确定</button>'
            $('.screen-title').html(html)
            alert('导入成功')
        };
        if (rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
    })

});


function leadRow() {
    condition_title = $("input[name='row']:checked").val();
    if (!condition_title) {
        $('.screen-content').css('display', 'none')
        alert('请选择查询种类')
    } else {
        $('.screen-content').css('display', 'block')
    }
}

//获取筛选条件的数据
function gainData() {
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
            carData.filter((item, i) => {
                if (item[condition_title] == txt[n]) {
                    meetData.push(item)
                    return;
                }
            })
        }
        if (meetData.length != 0) {
            $('.export').css('display', 'block')
            var html = ''
            html += '<tr class="table-title">'
            for (let key in meetData[0]) {
                html += '<td>' + key + '</td>'
                arrTitle.push(key)
            }
            html += '</tr>'
            console.log(arrTitle)
            for (let key in meetData) {
                html += '</tr>'
                let str = meetData[key]
                for (let item in str) {
                    html += '<td>' + str[item] + '</td>'
                }
                html += '</tr>'
            }
            $('.table').html(html)
        } else {
            alert('查询的内容为空');
            $('.export').css('display', 'none')
        }
    }

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