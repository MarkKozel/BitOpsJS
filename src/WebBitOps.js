const BitOps = new BitOperations();

document.addEventListener('DOMContentLoaded', (evt) => {
    document.getElementById("Bit_Logic_Calculate").addEventListener('click', calculateBitOps);
    document.getElementById("Bit_Math_Calculate").addEventListener('click', calculateBitMath);
});

// window.onload = function(evt) {
// document.getElementById("Bit_Logic_Calculate").addEventListener('click', calculateBitOps);
// };

function calculateBitOps(evt) {

    console.log(evt);
    var bitStr1 = document.getElementById("Bit_Logic_Input_1").value;
    var bitStr2 = document.getElementById("Bit_Logic_Input_2").value;

    document.getElementById("Bit_Logic_Result_OR").textContent =
        `${bitStr1} OR ${bitStr2} = ${BitOps.or(bitStr1, bitStr2)}`;
    document.getElementById("Bit_Logic_Result_AND").textContent =
        `${bitStr1} AND ${bitStr2} = ${BitOps.and(bitStr1, bitStr2)}`;
    document.getElementById("Bit_Logic_Result_NOT").textContent =
        `NOT ${bitStr1} = ${BitOps.not(bitStr1)}`;

    //evt.stopPropagation();
}

function calculateBitMath(evt) {

    console.log(evt);
    var bitStr1 = document.getElementById("Bit_Math_Input_1").value;
    var bitStr2 = document.getElementById("Bit_Math_Input_2").value;

    var Result = BitOps.addBitStrings(bitStr1, bitStr2);
    var bitStr1Conv = BitOps.convert(bitStr1);
    var bitStr2Conv = BitOps.convert(bitStr2);
    var sumConv = BitOps.convert(Result.carryOut + Result.sum);

    document.getElementById("Bit_Math_Result_Add").innerHTML =
        `${bitStr1}<sub>2</sub> + ${bitStr2}<sub>2</sub> = ${Result.carryOut+Result.sum}<sub>2</sub>`;

    document.getElementById("Bit_Math_Result_Decimal").innerHTML =
        `${bitStr1Conv.decimal}<sub>10</sub> + ${bitStr2Conv.decimal}<sub>10</sub> = 
        ${sumConv.decimal}<sub>10</sub>`;

    document.getElementById("Bit_Math_Result_Hex").innerHTML =
        `${bitStr1Conv.hexadecimal}<sub>16</sub> + ${bitStr2Conv.hexadecimal}<sub>16</sub> = 
        ${sumConv.hexadecimal}<sub>16</sub>`;


    // document.getElementById("Bit_Math_Result_Decimal").innerHTML =
    //     `${Result.sum}<sub>2</sub> = ${sumConv.decimal}<sub>10</sum>`;

    // document.getElementById("Bit_Math_Result_Hex").innerHTML =
    //     `${Result.sum}<sub>2</sub> = 0x${sumConv.hexadecimal}<sub>16</sub>`;

    //evt.stopPropagation();
}