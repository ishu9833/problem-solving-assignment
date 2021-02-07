//Problem no -01

function kilometerToMeter(kilometer) {
  if (kilometer > 0) {
    var meter = kilometer * 1000;
    return meter;
  } else {
    var massage = "error! distance must be positive";
    return massage;
  }
}

kilometerToMeter();

//Problem no -02

function budgetCalculator(watch, phone, laptop) {
  if (watch > 0 && phone > 0 && laptop > 0) {
    var total = watch * 50 + phone * 100 + laptop * 500;
    return total;
  } else {
    var massage = "error! parameter must be positive";
    return massage;
  }
}

budgetCalculator();

//Problem no - 03

function hotelCost(spendDays) {
  var cost = 0;
  if (spendDays > 0) {
    if (spendDays <= 10) {
      cost = spendDays * 100;
    } else if (spendDays <= 20) {
      var spendDays10 = 10 * 100;
      var remainingDays = spendDays - 10;
      var spendDays20 = remainingDays * 80;
      cost = spendDays10 + spendDays20;
    } else {
      var spendDays10 = 10 * 100;
      var spendDays20 = 10 * 80;
      var remainingDays = spendDays - 20;
      var spendDaysUpto20 = remainingDays * 50;
      cost = spendDays10 + spendDays20 + spendDaysUpto20;
    }
  } else {
    var massage = "error! input parameter must be greater then zero";
    return massage;
  }
  return cost;
}

var totalCost = hotelCost();

//Problem no -04

function megaFriend(array) {
  var longestString = "";

  array.forEach(function (string) {
    if (string.length > longestString.length) {
      longestString = string;
    } else {
      var massage = "error! Your declaration of array is not correct";
      return massage;
    }
  });
  return longestString;
}

megaFriend([]);
