function loadSampleTable() {
    let obj = document.getElementById('historyTable');
    let $obj = $(obj);
    $obj.bootstrapTable({
        url: 'historyTableData.json',
        queryParams: "queryParams",
        toolbar: "#toolbar",
        sidePagination: "true",
        striped: true, // 是否显示行间隔色
        //search : "true",
        uniqueId: "ID",
        pageSize: "10",
        pagination: true, // 是否分页
        sortable: true, // 是否启用排序
        columns: [
            {
                field: "id",
                title: "识别码"
            },
            {
                field: 'barcode',
                title: '条形码'
            },
            {
                field: 'name',
                title: '书名'
            },

            {
                field: 'category',
                title: '类型'
            },
            {
                field: 'price',
                title: '价格'
            },
            {
                field: 'location',
                title: '地点'
            },
            {
                field: 'bdate',
                title: '借出日期'
            },
            {
                field: 'rdate',
                title: '归还日期'
            },
            {
                field: 'status',
                title: '状态'
            },

        ]
    });
}



