    function verificar(){
        var date = new Date()
        var ano = date.getFullYear()
        var fano = document.getElementById('textano')
        var res = document.querySelector('div#res')

        if( fano.value.length == 0 || fano.value > ano ){
            window.alert('ERRO! verifique os dados digitados')
        } else{

            var fsex = document.getElementsByName('radiosexo')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            if(fsex[0].checked){
                genero = 'Homem'

                if(idade >=0 && idade < 10){

                    img.setAttribute('src','criança.jpg')

                } else if(idade < 21){

                    img.setAttribute('src','adolescente.jpg')
                } else if (idade < 50){

                    img.setAttribute('src', 'idoso.jpg')
                } else{

                    img.setAttribute('src','idoso.jpg')
                }
            } else if(fsex[1].checked){
            
                genero ='Mulher'

                
                if(idade >=0 && idade < 10){

                    img.setAttribute('src', 'criança.jpg')

                } else if(idade < 21){
                
                    img.setAttribute('src', 'adolescentefeminina.jpg')
                    
                } else if (idade < 50){

                    img.setAttribute('src','mulher.jpg')
                } else {

                    img.setAttribute('src', 'idosa.jpg')
                }

            }
            res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
    } 
