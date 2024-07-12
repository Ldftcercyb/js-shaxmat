// let arr = [1, 5, 3, 4]
// let sun = 0
// for (let a = 0; a < arr.length; a++) {
//      console.log(a, arr[i]);
// }
// let arr = [1, 5, 3, 4, 12, 45];
// let sun = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === sun) {
//         console.log(sun);

//     }
//     ifelse(
//         arr[i] / 2 == sun
//     ) {
//         console.log('chexav');
//     }
//     else(alert("a"))
// }

// let arr = [1, 5, 3, 4, 12, 45];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i], arr);
//     }
//
// }
// let p = prompt("guyn");
// let w = prompt("width");
// let h = prompt("height");
// let height = h + '';
// let width = w + '';
// let color = p + '';
// document.write(`<div style="width:${width};height:${height}; background-color:${color}"></div>`)
// // document.write(`<h1 style='font-size:30px; color:${color} '>${p}</h1>`)
document.write('<table style="width:800px; height:800px">');
for (let i = 0; i < 8; i++) {
    document.write('<tr style="width:100px; height:100px; border:2px solid red;">');
    for (let a = 0; a < 8; a++) {
        if ((i - a) % 2 == 0) {
            document.write('<td style="border:2px solid black; width:100px; height:100px; background-color:white;"></td>');
        } else {
            document.write('<td style="border:2px solid gray; width:100px; height:100px; background-color:black;"></td>');
        }
    }
    document.write('</tr>');
}
document.write('</table>');
// document.write(
//     '<table style="width:800px;height:800px;border:1px solod black;">'
// );
// for (let i = 0; i < 6; i++) {
//     document.write(
//         '<tr style="width:100px;height:100px;border:1px solid black">'
//     );
//     for (let a = 0; a <= 1; a++) {

//         document.write(
//             '<td style="width:50px;height:50px;border:1px solid black;background:white">'
//         )
//         '<td style="width:50px;height:50px;border:1px solid black;background:black">'


//         document.write("</td>");
//     }

//     document.write("</tr>");
// }
// document.write("</td>");
// document.write("</table>");


// // ------------------------------------------VERSION 2 -------------------------------------------------------
// document.write(
//     '<table style="width:800px;height:800px;border:1px solod black;">'
// );
// for (let i = 0; i < 6; i++) {
//     document.write(
//         '<tr style="width:100px;height:100px;border:1px solid black">'
//     );
//     for (let a = 0; a <= 1; a++) {
//         if (a % 2 === i % 3) {
//             document.write(
//                 '<td style="width:50px;height:50px;border:1px solid black;background:WHITE">'
//             );
//         } else
//             document.write(
//                 '<td style="width:50px;height:50px;border:1px solid black;background:GREEN">'
//             );

//         document.write("</td>");
//     }

//     document.write("</tr>");
// }
// document.write("</td>");
// document.write("</table>");







//
//








document.write('<table style="width:800px; height:800px">');
for (let i = 0; i < 8; i++) {
    document.write('<tr style="width:100px; height:100px; border:2px solid red;">');
    for (let a = 0; a < 8; a++) {
        if ((i == a) % 2 === 0) {
            document.write('<td style="border:2px solid black; width:100px; height:100px; background-color:WHITE;"></td>');
        } else {
            document.write('<td style="border:2px solid gray; width:100px; height:100px; background-color:BLACK;"></td>');
        }
    }
    document.write('</tr>');
}
document.write('</table>');


