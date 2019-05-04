
$.ajax({
    url         : "statistik.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        //menghitung jumlah data
        jmlData = data.length;
        //variabel untuk menampung tabel yang akan di cetak
        buatTabel = "";
        
        //perulangan untuk menayangkan data dalam tabel
        for(a = 0; a < jmlData; a++){
            
            //mencetak baris
            buatTabel += "<tr>" + "<td>" + (a+1) + "</td>";
            var field = document.getElementsByClassName("th");
            for(i=0;i<field.length;i++){
                //Mencetak kolom
                buatTabel += "<td>" + data[a][field[i].innerText] + "</td>"
                   
            }
            //tutup baris
            buatTabel += "<tr/>";
        }
        //menayangkan jumlah data
        //document.getElementsByTagName('textarea')[0].value = jmlData;
        //mencetak tabel
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
    }
});
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#initable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});