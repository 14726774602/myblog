//保存导入的数据
const carData;
$(document).ready(function() {
    var wb; //读取完成的数据
    var rABS = false; //是否将文件读取为二进制字符串

    function fixdata(data) { //文件流转BinaryString
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

            // carData就是我们需要的JSON数据
            carData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            //console.log(carData);
            //将标题添加进入input复选框
            //console.log(carData[0])
            var html = ''
            for (let key in carData[0]) {
                html += "<label for='" + key + "'><input id='" + key + "' type='checkbox' name='row' value='" + key + "' />" + key + "</label>"
            }
            html += '<button onclick="leadRow()">确定</button>'
            $('.base').html(html)
        };
        if (rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
    })

});
var check_arr;

function leadRow() {
    var obj = document.getElementsByName("row");
    var arr = []
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked)
            arr.push(obj[i].value);
    }
    //return check_arr
    check_arr = arr
    if (check_arr != '') {
        $('.export').css('display', 'block')
    } else {
        $('.export').css('display', 'none')
    }
}


function downloadExl(str) {
    //console.log(carData);
    //要导出去的标题
    //console.log(check_arr)
    var arry = [];
    arry[0] = check_arr;
    //console.log(arry)
    // that.Data指要导出的数据
    str.map(a => {
        //指定要导出的数据
        var _arry = [];
        for (let key in check_arr) {
            _arry.push(a[check_arr[key]].toString());
        }
        // _arry.push(a.JHPID);
        // _arry.push(a.NAME.toString());
        // _arry.push(a.JHJD.toString());
        // _arry.push(a.KSSJ == null ? "" : a.KSSJ.format('yyyy-MM-dd')); //格式化日期没有就返回空
        // _arry.push(a.JSSJ == null ? "" : a.KSSJ.format('yyyy-MM-dd')); //格式化日期没有就返回空
        // _arry.push(a.BNWC.toString());
        // _arry.push(a.JDMS.toString());
        // _arry.push(a.CYYY.toString());
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
    for (var j = 0; j < check_arr.length; j++) {
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
    for (let key in check_arr) {
        sheet["!cols"].push({ wch: 15 })
        title += check_arr[key] + '、';
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
    openDownloadDialog(sheet2blob(sheet), title + '.xlsx');
}