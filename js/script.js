var arrBookDetails = [];
var bookId = 0;

$(document).ready(function () {
  $("#btnsave").click(function () {
    insertBook();
  });
});

function insertBook() {
  bookId = bookId + 1;
  var authorName = $("#authorName").val();
  var bookName = $("#bookName").val();
  var bookPrice = $("#bookPrice").val();
  var bookQuantity = $("#bookQuantity").val();
  var bookisbnNumber = $("#bookisbnNumber").val();
  var bookPublisher = $("#bookPublisher").val();
  var bookDescription = $("#bookDescription").val();

  arrBookDetails.push({
    id: bookId,
    bookName: bookName,
    authorName: authorName,
    bookPrice: bookPrice,
    bookQuantity: bookQuantity,
    bookisbnNumber: bookisbnNumber,
    bookPublisher: bookPublisher,
    bookDescription: bookDescription,
  });
  AppendArrayDataToTable(arrBookDetails);
}

function AppendArrayDataToTable(arrBook) {
  var bookDetailsIsAppend = "";
  for (var i = 0; i < arrBook.length; i++) {
    bookDetailsIsAppend += "<tr>";

    bookDetailsIsAppend += "<th scope='row'>" + arrBook[i].id + "</th>";
    bookDetailsIsAppend += "<td>" + arrBook[i].bookName + "</td>";
    bookDetailsIsAppend += "<td>" + arrBook[i].authorName + "</td>";
    bookDetailsIsAppend += "<td>" + arrBook[i].bookPrice + "</td>";
    bookDetailsIsAppend += "<td>" + arrBook[i].bookQuantity + "</td>";
    bookDetailsIsAppend += "<td>" + arrBook[i].bookisbnNumber + "</td>";
    bookDetailsIsAppend += "<td>" + arrBook[i].bookPublisher + "</td>";

    bookDetailsIsAppend += "<td>";
    bookDetailsIsAppend +=
      "<button type='button' class='btn btn-primary mx-1'>Show</button>";
    bookDetailsIsAppend +=
      "<button type='button' class='btn btn-warning mx-1'>Edit</button>";
    bookDetailsIsAppend +=
      "<button type='button' class='btn btn-danger mx-1'>Delete</button>";
    bookDetailsIsAppend += "</td>";

    bookDetailsIsAppend += "</tr>";
  }

  $("#tblBodyBookData").html(bookDetailsIsAppend);
  $("#tblBookData").show();
}
