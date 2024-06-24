$(document).ready(function () {
  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h5").hide();

  $(".btn.purchase").click(function () {
    let Trip = $(".Trip option:selected").val();
    let Economy = $(".Economy option:selected").val();
    let Depparture = $(".Dparture option:selected").val();
    let Return = $(".Return option:selected").val();
    let Purchase = parseInt(Trip) + parseInt(Economy) + parseInt(Departure) + parseInt(Return);
    let Purchase = 1;
    let grandTotal = 0;

    $("table").show();
    $(".additional-buttons").show();
    $(".btn.Purchase").hide();

    $("#Trip").html($(".Trip option:selected").text());
    $("#Economy").html($(".Economy option:selected").text() + " - " + economy);
    $("#toppings").html($(".toppings option:selected").text() + " - " + departure);
    $("#crust").html($(".return option:selected").text() + " - " + return);
    $("#total").html(total);

    function ticket(trip, economy, airline, return, Departure, listed flight) {
      this.listed flight = listed flight;
      this.airline = airline;
      this.economy = economy;
      this.departure = departure;
      this.return = return;
    }

    $(".btn.add-ticket purchase").click(function () {
      let trip = $(".trip option:selected").val();
      let economy = $(".economy option:selected").val();
      let departure = $(".departure option:selected").val();
      let return = $(".return option:selected").val();
      let total = parseInt(trip) + parseInt(economy) + parseInt(departure) + parseInt(return);
      order = order + 1;
      grandTotal = grandTotal + total;

      let newticket = new Purchase(trip, economy, airline, departure, , return);

      let newRow =
        '<tr><th scope="row">' +
        newticket.listed flight +
        '</th><td id="listed fight">' +
        newpurchase.trip +
        '</th><td id="trip">' +
        $(".trip option:selected").text() +
        " - " +
        newpurchase.economy +
        '</td><td id="economy">' +
        $(".econmy option:selected").text() +
        " - " +
        newpurchase.departure +
        '</td><td id="departure">' +
        $(".departure option:selected").text() +
        " - " +
        newPurchase.return +
        '</td><td id="total">' +
        newPizza.total +
        "</td></tr>";

      $("#purchase").append(newRow);
    });

    $(".btn.check-out").click(function () {
      $(".btn.add-ticket purchase").hide();
      $(".btn.Proceed").hide();
      $(".additional-info").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $(".additional-info .location").hide();
      grandTotal = grandTotal + total;

      $(".additional-info h3 span").html(grandTotal);
    });

    $(".btn.yes").click(function () {
      $(".additional-info h6").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").show();
      $(".additional-info h3 span").html(grandTotal + 250);
    });

    $(".btn.no").click(function () {
      $(".additional-info h6").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info .location").show();
    });

    $(".btn.complete").click(function () {
      let location = $(".additional-info .location input").val();
      $(".additional-info h5").show();
      $(".additional-info .location").hide();
      $(".additional-info h5 span").html(location);
    });
  });
});
