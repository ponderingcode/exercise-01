const OPERATION_TYPE_LEAST = 'operationTypeLeast';
const OPERATION_TYPE_GREATEST = 'operationTypeGreatest';
const OPERATION_TYPE_MEAN = 'operationTypeMean';
const OPERATION_TYPE_SUM = 'operationTypeSum';
const OPERATION_TYPE_PRODUCT = 'operationTypeProduct';

var operationType;

var val0;
var val1;
var val2;
var val3;
var val4;
var arrValues;

var least;
var greatest;
var mean;
var sum;
var product;


function onSubmitButtonPressed() {
    operationType = $('#selectOperation').val();
    
    val0 = parseInt($('#inp0').val());
    val1 = parseInt($('#inp1').val());
    val2 = parseInt($('#inp2').val());
    val3 = parseInt($('#inp3').val());
    val4 = parseInt($('#inp4').val());
    
    arrValues = [val0, val1, val2, val3, val4];

    switch(operationType) {
        case OPERATION_TYPE_LEAST:
            determineLeast();
            break;
        case OPERATION_TYPE_GREATEST:
            determineGreatest();
            break;
        case OPERATION_TYPE_MEAN:
            determineMean();
            break;
        case OPERATION_TYPE_SUM:
            determineSum();
            break;
        case OPERATION_TYPE_PRODUCT:
            determineProduct();
            break;
        default:
            break;
    }
}

function compareNumbers(a, b) {
    return a - b;
}

function determineLeast() {
    arrValues.sort(compareNumbers);
    least = arrValues[0];
    alert('Least: ' + least);
}

function determineGreatest() {
    arrValues.sort(compareNumbers);
    arrValues.reverse();
    greatest = arrValues[0];
    alert('Greatest: ' + greatest);
}

function determineMean() {
    mean = 0;
    for (var i=0; i < arrValues.length; i++) {
        mean += arrValues[i];
    }
    mean /= arrValues.length;
    alert('Mean: ' + mean);
}

function determineSum() {
    sum = 0;
    for (var i=0; i < arrValues.length; i++) {
        sum += arrValues[i];
    }
    alert('Sum: ' + sum);
}

function determineProduct() {
    product = 1;
    for (var i=0; i < arrValues.length; i++) {
        product *= arrValues[i];
    }
    alert('Product: ' + product);
}