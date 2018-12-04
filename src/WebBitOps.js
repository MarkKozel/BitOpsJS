let BitOps;

let Bit_Logic_Input_1;
let Bit_Logic_Input_2;
let Bit_Logic_Calculate;

let Bit_Logic_Result_OR;
let Bit_Logic_Result_AND;
let Bit_Logic_Result_NOT;

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    BitOps = new BitOperations();

    Bit_Logic_Input_1 = document.getElementById("Bit_Logic_Input_1");
    Bit_Logic_Input_2 = document.getElementById("Bit_Logic_Input_2");
    Bit_Logic_Calculate = document.getElementById("Bit_Logic_Calculate");
    Bit_Logic_Calculate.addEventListener('click', calculateBitOps);

    Bit_Logic_Result_OR = document.getElementById("Bit_Logic_Result_OR");
    Bit_Logic_Result_AND = document.getElementById("Bit_Logic_Result_AND");
    Bit_Logic_Result_NOT = document.getElementById("Bit_Logic_Result_NOT");
}

function calculateBitOps() {

    var bitStr1 = Bit_Logic_Input_1.value;
    var bitStr2 = Bit_Logic_Input_2.value;

    Bit_Logic_Result_OR.textContent = BitOps.or(bitStr1, bitStr2);
    Bit_Logic_Result_AND.textContent = BitOps.and(bitStr1, bitStr2);
    Bit_Logic_Result_NOT.textContent = BitOps.not(bitStr1);
}