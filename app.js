$(document).ready(()=>{
    console.log('Jquery');

    var evc01 = $('#ec01');
    var evc02 = $('#ec02');
    var evc03 = $('#ec03');
    var evf = $('#ef');
    var promedio = $('#promedio');
    var curso = $('#curso');
    var btn = $('#btnAgendar');
    var tbody = $('#tbody');
    var alumno = $('#alumno');

    var count = 0;
    btn.click(()=>{        
        if(alumno.val() === ''){
            let nombre = prompt('¿Cual es su nombre distinguida damo?');
            alumno.val(nombre);            
        } else{
            count++;
            let cur = curso.val();
            let prom = promedio.val();
            console.log(cur,prom);
            template = `
                        <tr>
                            <td>${count}</td>
                            <td>${cur}</td>
                            <td>${prom}</td>
                        </tr>
                        `;
            tbody.append(template);
        } 
        
    });

    function formula(){
        let e01 = Number(evc01.val()) * 0.04;
        let e02 = Number(evc02.val()) * 0.12;
        let e03 = Number(evc03.val()) * 0.24;
        let ef = Number(evf.val()) * 0.6;

        let prom = e01+e02+e03+ef;        
        promedio.val((Math.round(prom * 100) / 100).toFixed(0));       
        
        var cestado = $('#c-estado');
        var textestado =  $('#text-estado');

        if(prom < 7){ //ALAMOS
            cestado.css('background','#e74a4a');
            textestado.html('ALAMOS');
            textestado.css('color','#fff');
        } else if(prom <= 12.5 && prom >=7){ // SUSTI BROO
            cestado.css('background','#e9c13c');
            textestado.html('SUSTI BROO');
            textestado.css('color','#fff');
        } else if(prom > 12.5){ //SALE CASA DE GATO
            cestado.css('background','#4cb45a');
            textestado.html('SALE CASA DE GATO');
            textestado.css('color','#fff');
        }
    }

    evc01.keyup((e)=>{
        formula();        
    });

    evc02.keyup((e)=>{
        formula();
    });
    evc03.keyup((e)=>{
        formula();
    });
    evf.keyup((e)=>{
        formula();
    });
    $('#btn-clean').click(()=>{
        evc01.val('');
        evc02.val('');
        evc03.val('');
        evf.val('');
        promedio.val('0');

        var cestado = $('#c-estado');
        var textestado =  $('#text-estado');

        cestado.css('background','#fff');
        textestado.html('ESTADO');
        textestado.css('color','#242424');
        tbody.html('');
        alumno.val('');
        count = 0;
    });
});
