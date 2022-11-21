// At the moment this calculation uses a crude inaccurate tax band calc
$(document).ready(function(){

    // Add comma to input field
      $('#income').keyup(function(event) {
  
      // skip for arrow keys
      if(event.which >= 37 && event.which <= 40) return;
  
      // format number
      $(this).val(function(index, value) {
        return "£" + value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ;
      });
    });
  
  
  $('#monthly-saving').attr({
         "max" : 150,        // substitute your own
         "min" : 10          // values (or variables) here
      });
  
  // on input of period
  $("#dmGo").click(function(){
  
    //$("input[name='period']").click(function(){
      let savingPeriod = $("input[name='period']:checked").val();
      let monthlySaving =  Number($('#monthly-saving').val());
      let dmValue = monthlySaving * 2;
  
      let getIncome =  $("#income").val().split(",").join("");
      let totalIncome = getIncome.replace(/\D/g, '');
  
      let incomeMin = 12570;
  
    if($('#monthly-saving').val()<10 || $('#monthly-saving').val()>150 ){
        $('#savingError').show();
        $('#result').hide();
  
      }
      else{
        $('#savingError').hide();
        $('#result').show();
      }
  
      
      if(totalIncome < incomeMin){
        $('#incomeMin').show();
  
    }
   
        else{
          $('#incomeMin').hide();
          $('#result').show();
        }
  
  
  
    //Tax Bands
    let eng0 = 0;
    let eng1 = 33.25;
    let eng2 = 43.25;
    let eng3 = 48.25;
  
    let scot0 = 0;
    let scot1 = 32.25;
    let scot2 = 33.25;
    let scot3 = 34.25;
    let scot4 = 54.25;
    let scot5 = 44.25;
    let scot6 = 49.25;
  
  
    if (savingPeriod == "eng") {
  
      if (totalIncome > 150000){
        taxCalc = monthlySaving*(1 - (eng3 / 100));
      }
  
      else if (totalIncome > 50270 && totalIncome <= 150000) {
        taxCalc = monthlySaving*(1 - (eng2 / 100));
      }
  
      else if (totalIncome > 12570 && totalIncome <= 50270) {
        taxCalc = monthlySaving*(1 - (eng1 / 100));
      }
  
      else if (totalIncome <= 12570) {
        taxCalc = monthlySaving;
      }
  
      else {
        taxCalc = "Error";
      }
  
    }
  
    else if (savingPeriod == "scot") {
  
      if (totalIncome > 150000){
        taxCalc = monthlySaving*(1 - (scot6 / 100));
      }
  
      else if (totalIncome > 50270 && totalIncome <= 150000) {
        taxCalc = monthlySaving*(1 - (scot5 / 100));
      }
  
      else if (totalIncome > 43662 && totalIncome <= 50270) {
        taxCalc = monthlySaving*(1 - (scot4 / 100));
      }
  
      else if (totalIncome > 25688 && totalIncome <= 43662) {
        taxCalc = monthlySaving*(1 - (scot3 / 100));
      }
  
      else if (totalIncome > 14732 && totalIncome <= 25688) {
        taxCalc = monthlySaving*(1 - (scot2 / 100));
      }
  
      else if (totalIncome > 12570 && totalIncome <= 14732) {
        taxCalc = monthlySaving*(1 - (scot1 / 100));
      }
  
      else if (totalIncome <= 12570) {
        taxCalc = monthlySaving;
      }
  
      else {
        taxCalc = "Error";
      }
  
    }
  
      let taxCalcRnd = Math.round(taxCalc * 100) / 100;
  
    // update shares1
    $('#dmShareCost').text(formatNumber(taxCalcRnd));
    // update share value
    $('#dmShareValue').text(formatNumber(dmValue));
  });
  
  function formatNumber(num){
    return new Intl.NumberFormat().format(num);
  }
  });