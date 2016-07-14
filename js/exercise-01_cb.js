$(document).ready(function() {
    
});

// Fake constants
var OPERATION_TYPE_LEAST = 'operationTypeLeast';
var OPERATION_TYPE_GREATEST = 'operationTypeGreatest';
var OPERATION_TYPE_MEAN = 'operationTypeMean';
var OPERATION_TYPE_SUM = 'operationTypeSum';
var OPERATION_TYPE_PRODUCT = 'operationTypeProduct';

var operationType;

var val0;
var val1;
var val2;
var val3;
var val4;

function onSubmitButtonPressed() {
    operationType = $('#selectOperation').val();
    
    val0 = $('#inp0').val();
    val1 = $('#inp1').val();
    val2 = $('#inp2').val();
    val3 = $('#inp3').val();
    val4 = $('#inp4').val();

    switch(operationType) {
        default:
        case OPERATION_TYPE_LEAST:
            // call least func
            break:
        case OPERATION_TYPE_GREATEST:
            // call greatest func
            break;
        case OPERATION_TYPE_MEAN:
            // call mean func
            break;
        case OPERATION_TYPE_SUM:
            // call sum func
            break;
        case OPERATION_TYPE_PRODUCT:
            // call product func
            break;
    }
}

function determineLeast() {
    
}

function determineGreatest() {
    
}

function determineMean() {
    
}

function determineSum() {
    
}

function determineProduct() {
    
}