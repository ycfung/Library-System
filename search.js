function loadSampleTable() {
    let obj = document.getElementById('searchTable');
    let $obj = $(obj);
    $obj.bootstrapTable({
        url: 'searchTableData.json',
        queryParams: "queryParams",
        toolbar: "#toolbar",
        sidePagination: "true",
        striped: true, // 是否显示行间隔色
        singleSelect: true,
        clickToSelect: true,
        uniqueId: "barcode",
        pageSize: "10",
        pagination: true, // 是否分页
        sortable: true, // 是否启用排序
        columns: [
            {
                field: 'barcode',
                title: '条形码'
            },
            {
                field: 'name',
                title: '书名'
            },
            {
                field: 'author',
                title: '作者'
            },
            {
                field: 'press',
                title: '出版社'
            }, {
                field: 'category',
                title: '类型'
            }, {
                field: 'price',
                title: '价格'
            }, {
                field: 'location',
                title: '地点'
            },
            {
                field: 'action',
                title: '操作',
                width: 110,
                align: 'center',
                valign: 'middle',
                formatter: actionFormatter,
                events: operateEvents,
            },

        ]
    });

}


//操作栏的格式化
function actionFormatter(value, row, index) {
    let id = value;
    let result = "";
    result += '<button type="button" class="reserve btn shadow" style="background-color: #34495e;color: white">预约</button>';
    return result;

}


window.operateEvents = {
    "click .reserve": function (e, value, row, index) {
        console.log(row.barcode);
        console.log(row.name);
        console.log(row.author);
    },
};




