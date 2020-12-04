
function  productMarkup(price, selectMarkup) {
	let percent = price / 100 * Number(selectMarkup) 
	let newPrice = price + percent

	return newPrice
}



function currencyConverter(parentSection){
	let price = document.querySelector(parentSection + ' #price')
	let exchangeRates = document.querySelector(parentSection + ' .currencyConverter input')
	let newPriceContainer =  document.querySelector(parentSection + ' .newConverterPrice')
	
	exchangeRates.addEventListener('input',function(){
		let inputText = this.value

		newPriceContainer.innerHTML = Number(price.textContent) * this.value
		
		if (newPriceContainer.innerHTML == "NaN") {
			newPriceContainer.innerHTML = "Ввеите число"
		}
		
	})



}




 
    function newCreatindGoodsTables(data,amountElements, tableClass, commands){

        let allProducts =  data


        let newCommands = []
        for(let i = 0; i < commands.length;i++){
            let comand = 'oneProduct.'+commands[i]
            newCommands.push(comand)
        }
        
        allProducts.forEach(function(oneProduct){
            creatLibs(oneProduct, amountElements, newCommands, tableClass)   
        })
    }

 
    function creatLibs(oneProduct, amountElements, commands, tblClass){
        let ul = document.createElement('ul')
        ul.classList.add('one-row')
        ul.classList.add('create-row')

        let li = createLi(oneProduct, amountElements,commands)
        li.forEach(function(elem){
            ul.append(elem)
         })

        document.querySelector(tblClass).append(ul)
    }

 
    function createLi(oneProduct, amountElements, commands){
       


        let items = [] 
        for(let i = 0; i < amountElements;i++){
            items.push(document.createElement('li'))

            // console.log(commands)
            if(commands[i] === undefined){
                items[i].innerHTML = ""
            }
            else{
              if( Array.isArray(eval(commands[i]))){
                items[i].innerHTML = eval(commands[i]+'[0]') +' '+eval(commands[i]+'[1]')
              }else{
                items[i].innerHTML = eval(commands[i])
              }                          
            }

        } 

        return items               
    }


 
function selectedColorSystem(type, colorInputs, parentSection) {
	let price

	colorInputs.forEach(function(radio){
		if (radio.checked && radio.value == 'Кор.') {
			if (type == 'Compact' || type == 'фалш шторы' || type == 'MINI' || type == 'STANDART' ) {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 2
				}else{
					price = 1
				}

			}else if (type == 'MAXIMUS') {
				price = 0

			}else if (type == 'UNI Плоскю Направл' ){

				if (parentSection == "#roller_curtains_day_night") {
					price  = 3
				}else{
					price = 2

				}

			}else if ( type == 'UNI П-обрю Направл') {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 4
				}else{
					price =  3
				}

			}else{
				price = 0
			}
		}else{
			price = 0
		}
	})

	return price
}

 
function viewSizeSystem(type,sizes, parentSection){
	let sizeParentBlock = sizes[0].closest(parentSection+' .sizeSystem')
		if (type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл') {
			sizeParentBlock.classList.add('none')
		}else{
			sizeParentBlock.classList.remove('none')
		}
	
}

 
function selectedFixationSystem(type, fixationSystemInputs, parentSection){
	let price = 0
	let fixationSystemParentBlock = fixationSystemInputs[0].closest('.fixationSystem')

	if (type == 'фалш шторы'  || type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл') {
		fixationSystemParentBlock.classList.add('none')

	}else{
		fixationSystemParentBlock.classList.remove('none')
	
	    fixationSystemInputs.forEach(function(radio){
	            if(radio.checked){
	          
	                if (parentSection == "#roller_curtains") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                             price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна') {
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART') {
	                             price = 0.9                        
	                        } if(type == 'MAXIMUS' ){
	                             price = 2.5     
	                        } 

	                    }

	                }
	           
	                if (parentSection == "#roller_curtains_day_night") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                              price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна') {
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART') {
	                             price = 1.2                      
	                        }if(type == 'MAXIMUS' ){
	                           price = 3.0 
	                        }   

	                    }


	                }

	            }

	        })

	}

	
	return price

}

 
function selectedChainLoad(type, chainLoad){
	let price = 0
	let chainLoadParentBlock =  chainLoad[0].closest('.chainLoad')

		if (type == 'фалш шторы' ) {
			chainLoadParentBlock.classList.add('none')
			price = 0
		}else{
			chainLoadParentBlock.classList.remove('none')
			
			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Груз цепи'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}	
		
	return price
}

 
function selectedChainFixing(type, chainLoad){
	let price = 0
	let chainFixingParentBlock =  chainLoad[0].closest('.chainFixing')

		if (type == 'фалш шторы' || type == 'STANDART' || type == 'MAXIMUS'   ) {
			chainFixingParentBlock.classList.add('none')
			price = 0

		}else{
			chainFixingParentBlock.classList.remove('none')

			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Фикс. цепи'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}

	return price
}

 
function selectedChainFixingUniversal(type, chainLoad){
	let price = 0
	let chainFixingUniversaParentBlock =  chainLoad[0].closest('.chainFixingUniversal')

		if ( type == 'Compact' || type == 'фалш шторы' || type == 'MINI' || type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл'   ) {
			chainFixingUniversaParentBlock.classList.add('none')

		}else{
			chainFixingUniversaParentBlock.classList.remove('none')

			chainLoad.forEach(function(radio){
				if(radio.checked && radio.value == 'Фикс. цепи универс.'){
					price = 0.2					
				}else{
					price = 0
				}
			})	
		}

	return price
}


 
function viewControlMethod(type, boxControlMethod, parentSection, thisIsSparta){

	let controlMethod = document.querySelector(parentSection+' .controlMethod')
	let controlMethodChanel = document.querySelector(parentSection+' .controlMethodChanel')

 

	if (type == 'MINI' || type == 'UNI Плоскю Направл'|| type == 'UNI П-обрю Направл') {
		boxControlMethod.classList.remove('none')
	 
		viewChanelControlMethod(controlMethod,controlMethodChanel, parentSection, thisIsSparta)

	}else if(type == 'STANDART'){
		boxControlMethod.classList.remove('none')
		viewChanelControlMethod(controlMethod,controlMethodChanel, parentSection, thisIsSparta)

	}else{
		boxControlMethod.classList.add('none')
		let proxy  = 0
	}
	
}
 
function viewChanelControlMethod(controlMethod, chanels, parent,thisIsSparta){
	if (thisIsSparta == undefined) {
		$(parent +' .controlMethod option:eq(0)').prop('selected',true)
		$(parent +' .controlMethodChanel option:eq(0)').prop('selected',true)
		chanels.classList.add('none')
	}
	

	controlMethod.addEventListener('change', function(){
		if(controlMethod.value == 'Мот.'){
			chanels.classList.remove('none')
		}else{
			chanels.classList.add('none')

		}
	})
	
}

 
function priceControlMethod(type,boxControlMethod){
	let controlMethod = boxControlMethod.querySelector('.controlMethod')
	let controlMethodChanel = boxControlMethod.querySelector('.controlMethodChanel')
	let motorPrice = 85

	let price = 0

	if (type == 'MINI' || type == 'UNI Плоскю Направл'|| type == 'UNI П-обрю Направл') {
 
		price = chanelsPrices(0,0,0)
	}else if(type == 'STANDART'){
 
		price = chanelsPrices(0,0,0)
	}else{
		price = 0
	}


	function chanelsPrices(fistPice, twoPrice, fivePrice){
		if(controlMethod.value == 'Мотор'){

			if (controlMethodChanel.value == '1 канал') {
				return motorPrice + fistPice
			}

			if (controlMethodChanel.value == '2 канала') {
				return motorPrice +  twoPrice
			}

			if (controlMethodChanel.value == '5 каналов') {
				return motorPrice + fivePrice
			}

		}else{

			return 0
		}


	}


	return price
}	



 
function viewEaxtraWidth(type,parentSection){
	let mainWidthText = document.querySelector(parentSection+' .main_width span')
	let glassWidth = document.querySelector(parentSection+' .glass_width')


	if (type == "UNI Плоскю Направл") {
		glassWidth.classList.remove('none')
		mainWidthText.textContent = 'Ширина ребра, мм'
	}else{
		glassWidth.classList.add('none')
		mainWidthText.textContent = 'Ширина, мм'
	}

}

 
function viewAdditionalScotchTape(type, parentSection){
	let additionalScotchTape = document.querySelector(parentSection + ' .additionalScotchTape')

	if (type == "UNI Плоскю Направл") {
		additionalScotchTape.classList.remove('none')
	}else{
		additionalScotchTape.classList.add('none')
	}

}

 
function priceAdditionalScotchTape(type, inputs, height){
	
	let price = 0
	if (type == "UNI Плоскю Направл") {
		inputs.forEach(function(radio){
			if (radio.checked && radio.value == 'Доп. скотч') {
				let converterToMeters = Number(height.value) / 1000
				price = Math.ceil(converterToMeters) * 0.8
				
			}
		})
		
	}else{
		price = 0
	}
	
	return price
}
	


 
function selectedPlasticRetainer(plasticRetainer,parentSection ){
	let price = 0
	if(parentSection == "#horizontal_louver_standard" ){
		plasticRetainer.forEach(function(radio){
			if (radio.checked && radio.value == 'Пласт. Фиксатор') {
				price = 0.3
			}
		})
	}

	return price
}


 
function selectedGuideString(area,guideString, parentSection){
	let price = 0
	if(parentSection == '#horizontal_louver_standard'){
		guideString.forEach(function(radio){
			if (radio.checked && radio.value == 'Напр. струна') {
				price = Math.ceil(area) * 2.5
			}
		})
	}

	return price
}



function selectedFastening(width,fastening,idCalculate){
	let price = 0

 
	
	fastening.forEach(function(radio){
		// console.log(radio)
		if (radio.checked) {
			if (radio.value=='Потолочные') {
				price = 0
			}
			if (radio.value=='Стеновые') {
				price = addMount(width, 0.3)
				
			}

			if (radio.value == 'Стеновые с удленителем') {
				price = addMount(width, 0.6)
				
			}
		}
		

	})

	return price


	function addMount(width,oneFastening){
		let priceFastening = 0

		if (width < 1700 ) {
			priceFastening = oneFastening * 2
		}else if(width >= 1700 && width < 2500){
			priceFastening = oneFastening * 3
		}else if(width >= 2500){
			priceFastening = oneFastening * 4
		}

		return priceFastening
	}
}


function rollerCurtainsCalculate(data, parentSection, productSelectID, commands ){

        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")


        // блок калькулятора
        let priceСalculationBox = document.querySelector(parentSection + ' .priceСalculation')

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")

        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            currencyConverter(parentSection)

        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value, this)

                let productArea = areaCalculation()
                // способ управления
                let controlMethod = priceControlMethod(selectType.value,boxControlMethod)
                //допю скотч
                let additionalScotchTape = priceAdditionalScotchTape(selectType.value, additionalScotchTapeInputs, height)
                // console.log(additionalScotchTape)

                // selectProductOperations(data,productSelectID,commands)
                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration + controlMethod

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(parentSection+" #price").innerHTML = price
                addToBlank.style.visibility = "visible"
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                if(y < 0.7){
                    y = 0.7                    
                    area.value = y
                    return y
                }else{
                    area.value = y
                    return y   
                }


               
            }

        }


          addToBlank.addEventListener("click", function(){
                this.style.visibility = "hidden"

                let parentBlock = this.parentNode.parentNode
                addToBlankFun(parentBlock, productSelectID[0], productSelectID[1], selectType.value)

            })
        


 
      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(selectColor)
            productSelect.append(selectType)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }

                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }



        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type, thisIsSparta){

            let priceExchangeRates, priceSelectMarkup 
            let priceColorSystem,priceControlType, priceFixationSystem, priceChainLoad,priceChainFixing,priceChainFixingUniversal
       
              
            priceColorSystem  =  selectedColorSystem(type ,colorSystem, parentSection)
            priceFixationSystem = selectedFixationSystem(type, fixationSystem, parentSection)
            priceChainLoad = selectedChainLoad(type, chainLoad)
            priceChainFixing = selectedChainFixing(type, chainFixing, parentSection)
            priceChainFixingUniversal = selectedChainFixingUniversal(type, chainFixingUniversal, parentSection)
             

            // console.log(priceFixationSystem + ' система фиксации')
            
                    // console.log(priceColorSystem + ' Цвет ')
            //         console.log(priceFixationSystem + ' система фиксации')
            //         // console.log(priceChainLoad  + ' груз цепи')
                    // console.log(priceChainFixing  + ' фиксации цепи')
                    // console.log(priceChainFixingUniversal  + ' фиксации цепи универсальная')
            //         // console.log(priceControlMethod)
            //         console.log('----------------')
          

            
            viewSizeSystem(type, sizeSystem, parentSection)
            viewControlMethod(type,boxControlMethod, parentSection, thisIsSparta)
            viewEaxtraWidth(type,parentSection)
            viewAdditionalScotchTape(type, parentSection)

            // console.log(priceColorSystem , priceFixationSystem , priceChainLoad , priceChainFixing , priceChainFixingUniversal)
           

            allPricesAdditionalConfiguration = priceColorSystem + priceFixationSystem + priceChainLoad + priceChainFixing + priceChainFixingUniversal

            // console.log(allPricesAdditionalConfiguration)


            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
  function rollerCurtainsCalculateReady(data, parentSection, productSelectID, commands ){
        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")

        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            currencyConverter(parentSection)
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

                let productArea = areaCalculation()

                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration 

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(parentSection+" #price").innerHTML = price
                addToBlank.style.visibility = "visible"

            })

           


            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                // if(y < 0.7){
                    // y = 0.7                    
                    // area.value = y
                    // return y
                // }else{
                    area.value = y
                    return y   
                // }


               
            }

        }
 
      addToBlank.addEventListener("click", function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, productSelectID[0], productSelectID[1], selectType.value)

                this.style.visibility = "hidden"
         })
        


      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(selectColor)
            productSelect.append(selectType)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }

                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }



        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){

            let priceExchangeRates, priceSelectMarkup 
            let   priceChainLoad,priceChainFixing,priceChainFixingUniversal
       
              

            priceChainLoad = selectedChainLoad(type, chainLoad)
            priceChainFixing = selectedChainFixing(type, chainFixing, parentSection)
            priceChainFixingUniversal = selectedChainFixingUniversal(type, chainFixingUniversal, parentSection)
            

   
            // console.log(priceChainLoad  + ' груз цепи')
            // console.log(priceChainFixing  + ' фиксации цепи')
            // console.log(priceChainFixingUniversal  + ' фиксации цепи универсальная')

    
           

            allPricesAdditionalConfiguration =  priceChainLoad + priceChainFixing + priceChainFixingUniversal



            return allPricesAdditionalConfiguration


        }




}
        
            
    

function horizontalCalculate(data, parentSection, productSelectID, commands ){

        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs, plasticRetainer,guideString
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")
        plasticRetainer = document.querySelectorAll(parentSection + " input[name='plasticRetainer']")
        guideString = document.querySelectorAll(parentSection + " input[name='guideString']")




        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            currencyConverter(parentSection)
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

                let productArea = areaCalculation()

                let priceGuideString = selectedGuideString(productArea,guideString, parentSection)
                console.log(priceGuideString)

                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration + priceGuideString

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(parentSection+" #price").innerHTML = price
                addToBlank.style.visibility = "visible"

            })

           


            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                // if(y < 0.7){
                    // y = 0.7                    
                    // area.value = y
                    // return y
                // }else{
                    area.value = y
                    return y   
                // }


               
            }

        }



      addToBlank.addEventListener("click", function(){
            let parentBlock = this.parentNode.parentNode
            // console.log(parentBlock);
            addToBlankFun(parentBlock, productSelectID[0], productSelectID[1], selectType.value)

            this.style.visibility = "hidden"
        })

 

      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(selectColor)
            productSelect.append(selectType)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }

                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }



        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){

        
            let pricePlasticRetainer

            pricePlasticRetainer = selectedPlasticRetainer(plasticRetainer,parentSection )

            allPricesAdditionalConfiguration =  pricePlasticRetainer


            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
       

    
function verticalCreateTable(data,classTable) {
	let tablePrice = document.querySelector(classTable)

	data.forEach(function(oneProduct){
		tablePrice.append(createUl(oneProduct))
	})

	function createUl(oneProduct){
		let ul = document.createElement('ul')
		ul.classList.add('one-row')

		ul.append(createLi(oneProduct.name))
		ul.append(createLi(oneProduct.colorCodesName[0]))
		ul.append(createLi(oneProduct.price[0]))

		return ul
	}

	function createLi(text){
		let li = document.createElement('li')
		li.textContent = text

		return li
	}
}          
       
     


function veticalCalculation(data, idCalculate,parentSelect, objectID ) {


	    let width, height, area, productSelect, productPrice, parentSection
        width = document.querySelector( idCalculate +' input#width')
        height = document.querySelector(idCalculate + ' input#height')
        area = document.querySelector( idCalculate + ' input#area')
        productSelect = document.querySelector(parentSelect)
        


        let fastening
        fastening = document.querySelectorAll(idCalculate + " .fastening_selected input")



        let allPricesAdditionalConfiguration


        

        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ

        let cout =  document.querySelector(idCalculate+' input#count')
        let addToBlank = document.querySelector(idCalculate+ ' input#add_to_blank')

        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){
            priceСalculation()

            selectCreate(data, objectID)

            calculatorAdditionalConfiguration()

        }


        function priceСalculation(){ 
 

          cout.addEventListener('click', function (){
                calculatorAdditionalConfiguration()

                let productArea = areaCalculation()
                let price = productArea * productPrice + allPricesAdditionalConfiguration
                document.querySelector(idCalculate+' #price').innerHTML = price

                addToBlank.style.visibility = 'visible'
            })

            addToBlank.addEventListener('click', function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, objectID[0], objectID[1], selectType.value)


                this.style.visibility = 'hidden'
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x 

                if (width.value < 1000) {
                    width.value = 1000
                    x = (width.value / 1000) * (height.value / 1000)

                    if(height.value < 1500){
                        height.value = 1500
                        x = (width.value / 1000) * (height.value / 1000)

                    }

                }else if(height.value < 1500){
                    width.value = 1000
                    height.value = 1500
                    x = (width.value / 1000) * (height.value / 1000)

                }else if (width.value < 1000 && height.value < 1500) {
                    height.value = 1500
                    x = (width.value / 1000) * (height.value / 1000)
                }else{
                    x = (width.value / 1000) * (height.value / 1000)
                }


                let y = Math.round((x) * 100) / 100

                area.value = y
                return y
            }

          

        }
        

        function selectCreate(data, idSelects){

        	let selectName = createSelect(objectID[0])
        	let selectColor = createSelect(objectID[1])

        

        	// вывод значений в select типов ткани
        	let firstProductName = data[0].name
        	

        	data.forEach(function(oneProduct){
        		let productName = createOption(oneProduct.name)
        		selectName.append(productName)




        		
        		if (oneProduct.name == firstProductName ) {
        			let colorCodes = oneProduct.colorСode
        			finedProductPrice(data, firstProductName, colorCodes[0])

        			console.log();
	        			colorCodes.forEach(function(oneColor,index){
		        			let productColor =	createOption(oneColor)
		        			selectColor.append(productColor)
		        		})
        		}
       			 
        	
        	})

        	// подмеа цветов в select цветов при выборе ткани
        	selectName.addEventListener('change', function(){
        		let prosuctName = this.value
        		
     

        		data.forEach(function(oneProduct){
        			if(prosuctName == oneProduct.name){
        				// Очищение select от старых цветов
        				selectColor.innerHTML = ""

        				// добавлние цветов во второй select
        				let colorCodes = oneProduct.colorСode

        				colorCodes.forEach(function(oneColor){
        					let colors = createOption(oneColor)
        					selectColor.append(colors)

        					productSelect.append(selectColor)

        				})



        				finedProductPrice(data,prosuctName, selectColor.value)


        			}
        		})
        	})


        	selectColor.addEventListener('change',function(){
        		finedProductPrice(data,selectName.value, this.value)
        	})




        	productSelect.append(selectName)
        	productSelect.append(selectColor)

        	 function createSelect(id){
	        	let select = document.createElement('select')
	        	select.id = id 

	        	return select
	        }

	        function createOption(text){
	        	let option = document.createElement('option')
	        	option.textContent = text 
	        	return option
	        }


        }

       

        // функция которая ищет в обекте нужную цену и возращает 
       	function finedProductPrice(data,checkedTypeFabric, checkedColor){
       		data.forEach(function(oneProduct){
       			if (oneProduct.name == checkedTypeFabric ) {
       				productPrice = oneProduct.price[0]
       			}
       		})
       	}

        
        //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(){

            let priceFastening  = selectedFastening(width.value ,fastening,idCalculate)

            allPricesAdditionalConfiguration = priceFastening
        }
}

function mosquitoNetCalculate(data, parentSection, productSelectID, commands ){
        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs, plasticRetainer,guideString
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")
        plasticRetainer = document.querySelectorAll(parentSection + " input[name='plasticRetainer']")
        guideString = document.querySelectorAll(parentSection + " input[name='guideString']")




        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration = 0
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            currencyConverter(parentSection)
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

                let productArea = areaCalculation()

                let priceGuideString = selectedGuideString(productArea,guideString, parentSection)


                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration + priceGuideString

                // наценка
                price = productMarkup(price, selectMarkup.value)

                document.querySelector(parentSection+" #price").innerHTML = price
                addToBlank.style.visibility = "visible"

            })

             addToBlank.addEventListener("click", function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, productSelectID[0], productSelectID[1], selectType.value)

                this.style.visibility = "hidden"
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                if(y < 1){
                    y = 1                   
                    area.value = y
                    return y
                }else{
                    area.value = y
                    return y   
                }


               
            }

        }
 

      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(selectColor)
            productSelect.append(selectType)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }

                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }



        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){       
    


            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
  
function allOperationsRepeatingElements(arrayProducts){

	addClassIdenticalElements(arrayProducts)
	addCountRepeatingElement(arrayProducts)	

	let newArray
	newArray = deleteRepeatingElement(arrayProducts)

	return newArray
}


//Функция которая дает одинаковые классы повторяющимся элементам
// function addClassIdenticalElements(data){

// 	for(let i = 0; i < data.length;i++){
// 		console.log(data[i])
// 		for(let x = 0; x < data.length;x++ ){
// 			if (i == x) {

// 			}else{
// 				if(data[i].idParent == data[x].idParent &&
// 					data[i].systemAndColor == data[x].systemAndColor && 
// 					 data[i].width == data[x].width && 
// 					  data[i].height == data[x].height &&
// 					   data[i].controlType == data[x].controlType &&
// 					    data[i].fixationSystem == data[x].fixationSystem ){

// 						let repeatingElementClass =  `${data[i].systemAndColor} ${data[i].idParent} ${data[i].width} ${data[i].height} ${data[i].controlType} ${data[i].fixationSystem}`
// 						data[i].arrayElementClass = repeatingElementClass

						
						
// 						// data.splice(x, x)
							
// 				}
// 			}
// 		}
// 	}
// }	


//Функция которая дает одинаковые классы повторяющимся элементам
function addClassIdenticalElements(data){
	data.forEach(function(product){
	   		let repeatingElementClass = `${excludeUndefined(product.idParent)} ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.width)} ${excludeUndefined(product.height)} ${excludeUndefined(product.controlType)} ${excludeUndefined(product.fixationSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.controlMethod)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.fasteningSelected)}`
	   		// console.log(repeatingElementClass)
			product.arrayElementClass = repeatingElementClass
	})		
}	


// добавление количества к повторяющимся элементам
function addCountRepeatingElement(allProduct){
	var arr = allProduct

	var result = {};
	for (var i = 0; i < allProduct.length; ++i)
	{
	    var a = arr[i].arrayElementClass;
	    // console.log(a)
	    if (result[a] != undefined)
	        ++result[a];
	    else
	        result[a] = 1;
	}

	// вторая часть уравнения
	arr.forEach(function(product){
		for(repetProduct in result){
			if (product.arrayElementClass == repetProduct ) {
				product.numberRepetitons = result[repetProduct]
			}
		}
	})

	deleteRepeatingElement(arr)
}


// удаление повторяющихся элементов
function deleteRepeatingElement(allProducts){
	

	allProducts = allProducts.filter((thing, index, self) =>
	  index === self.findIndex((t) => (
	    t.arrayElementClass === thing.arrayElementClass 
	  ))
	)



	return allProducts 
		

}	


// дополнительная функция
function excludeUndefined(text){
	if (text != undefined) {
	// console.log(text)

		return text
	}else{
		return ' '
	}
}
    

let orderBlank = []




function creatingOrgerBlank(oneRow, arrayParam) {



	orderBlank.push(oneRow)





	let curtainsBlank = []
	let newVerticalBlank = []

	// console.log(curtainsBlank	)

	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []


	creationOneBlank(orderBlank)


	// операции с повторяющимися элементами. добавление количиства, удаление . весь код находиться в файле allOperationsRepeatingElements.js
	curtainsBlank = allOperationsRepeatingElements(curtainsBlank)
	newVerticalBlank = allOperationsRepeatingElements(newVerticalBlank)
	horizontalVenusBlank = allOperationsRepeatingElements(horizontalVenusBlank)
	horizontalStandardBlank = allOperationsRepeatingElements(horizontalStandardBlank)
	mosquitoNetBlank = allOperationsRepeatingElements(mosquitoNetBlank)






 


	//функци добавления информации в doc бланки и бланки которые на экране
	// addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains", "#screen_blanks_roller_curtains", arrayParam ,"#curtainsBlank_download")
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_day_night", "#screen_blanks_day_night" ,arrayParam ,"#curtainsBlank_download" )
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_ready", "#screen_blanks_rolle_ready", arrayParam  ,"#curtainsBlank_download")



	// новые вертекальные бланки
	// addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_89mm", "#secreen_new_vertical_89mm", arrayParam ,"#newVerticalBlank_download")
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_127mm", "#secreen_new_vertical_127mm",arrayParam , "#newVerticalBlank_download")




	// addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	addToWindowBlankInForm(horizontalVenusBlank,"#horizontal_louver_venus", "#screen_horizontal_louver_venus",arrayParam , "#horizontalVenusBlank_download")

	// addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	addToWindowBlankInForm(horizontalStandardBlank, "#horizontal_louver_standard", "#screen_horizontal_louver_standard",arrayParam , "#horizontalStandardBlank_download")


	// addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download")
	addToWindowBlankInForm(mosquitoNetBlank, "#mosquito_net", "#secreen_mosquito_net", arrayParam , "#mosquitoNetBlank_download")





	// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

		}) 
	}


}		






// экспорт html в doc
function exportHTML(id, nameDocument){
	// addToBlankFun(arrayParam[0],arrayParam[1],arrayParam[2])

	console.log(orderBlank)
	newDownloadDocBlank(orderBlank)

   const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
   const footer = "</body></html>";
   const sourceHTML = header+document.getElementById(id).innerHTML+footer;
   
   const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
   const fileDownload = document.createElement("a");
   document.body.appendChild(fileDownload);
   fileDownload.href = source;
   fileDownload.download = nameDocument+'.doc';
   fileDownload.click();
   document.body.removeChild(fileDownload);
}


function newDownloadDocBlank(data){
	let curtainsBlank = []
	let newVerticalBlank = []
	

	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []



	creationOneBlank(orderBlank)


	// операции с повторяющимися элементами. добавление количиства, удаление . весь код находиться в файле allOperationsRepeatingElements.js
	curtainsBlank = allOperationsRepeatingElements(curtainsBlank)
	newVerticalBlank = allOperationsRepeatingElements(newVerticalBlank)
	horizontalVenusBlank = allOperationsRepeatingElements(horizontalVenusBlank)
	horizontalStandardBlank = allOperationsRepeatingElements(horizontalStandardBlank)
	mosquitoNetBlank = allOperationsRepeatingElements(mosquitoNetBlank)



	addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download")



	// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

		}) 
	}

}



function addToHTMLBlankInform(data,id,idButton){

	// addButtonAmoutProduct(data, idButton)

	let blank = document.querySelector(id+" #all-product tbody")
	let allCells = {
		'count_blank':  ['count_blank',20 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
		'system_and_color':  ['system_and_color',188 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'width' : ['width',60 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'height' : ['height',60, 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'control_type' : ['control_type',50 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'amount' : ['amount',50 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'fixation_system': ['fixation_system',60, 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'notes' : ['notes',100 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
	}

	
 
	blank.querySelectorAll('tr').forEach(function(tr,index){
		if (index == 0 	) {
		
		}else{
			tr.remove()
		}
	})


    


	data.forEach(function(product,index){
		let tr = document.createElement('tr')
		
		for(let key in allCells){
			let td = document.createElement('td')
			td.id = allCells[key][0]
			td.width = allCells[key][1]
			td.style.cssText =  allCells[key][2]
			tr.append(td)					
		}
		

		// let maiConfiguration 			

		if (product.idParent == 'new_vertical_89mm') {
			tr.querySelector('#system_and_color').textContent =  `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`
		}
		else if(product.idParent == "new_vertical_127mm"){ 
			tr.querySelector('#system_and_color').textContent =  `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`
		}
		else {
			tr.querySelector('#system_and_color').textContent =  `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)} ${excludeUndefined(product.controlMethod)}`
		}

			
		tr.querySelector('#count_blank').textContent = index+1
		tr.querySelector('#width').textContent = product.width
		tr.querySelector('#height').textContent = product.height
		tr.querySelector('#control_type').textContent = product.controlType
		tr.querySelector('#amount').textContent = product.numberRepetitons
		tr.querySelector('#fixation_system').textContent = product.fixationSystem
		tr.querySelector('#notes').innerHTML = '&#160;'

		
		// tr.dataset.productNumber = allAddedProduct
		// console.log(tr)

		blank.append(tr)
	})
}



//дополнительная функция
function excludeUndefined(text){
	if (text != undefined) {
		return text
	}else{
		return ' '
	}
}




let countArrayElementOrderBlank = 0
// let numberInArrayOrderBlank = 0
function addToBlankFun(parentBlock, selectOne, selectTwo ,selectType) {

	let arrayParameters = [parentBlock, selectOne, selectTwo ]


	// allAddedProduct++


	// let price = parentBlock.querySelector("#price").textContent
	// console.log(parentBlock[0])
	let idParent = parentBlock.parentNode.id
	let widht = parentBlock.querySelector("#width").value
 	let height = parentBlock.querySelector("#height").value
    let productSystem = parentBlock.querySelector('#'+selectTwo).value
    let productColor = parentBlock.querySelector('#'+selectOne).value
 	
 	//рулонные шторы
 	let colorSystem =  parentBlock.querySelectorAll("input[name='colorSystem']")
 	let controlType = parentBlock.querySelectorAll("input[name='controlType']")
 	let fixationSystem = parentBlock.querySelectorAll("input[name='fixationSystem']")
 	let sizeSystem = parentBlock.querySelectorAll("input[name='sizeSystem']")
 	let chainLoad = parentBlock.querySelectorAll("input[name='chainLoad']")
 	let chainFixing = parentBlock.querySelectorAll("input[name='chainFixing']")
 	let chainFixingUniversal = parentBlock.querySelectorAll("input[name='chainFixingUniversal']")
 	let additionalScotchTape = parentBlock.querySelectorAll("input[name='additionalScotchTape']")
 	let glassWidth = parentBlock.querySelector(".glass_width input")
 	let controlMethod = parentBlock.querySelector('.controlMethod')
 	let controlMethodChanel = parentBlock.querySelector('.controlMethodChanel')

 

 	// горизонтальные жалюзи стандарт
 	let plasticRetainer = parentBlock.querySelectorAll("input[name='plasticRetainer']")
 	let guideString = parentBlock.querySelectorAll("input[name='guideString']")

 	// // ветрикальные жалюзи
 	let fasteningSelected = parentBlock.querySelectorAll("input[name='fastening_selected']")


 	let allRadioElements = [colorSystem,controlType,fixationSystem,sizeSystem,chainLoad,chainFixing,chainFixingUniversal,plasticRetainer,guideString,fasteningSelected]



 	// console.log(productSystem);
 	let oneItem
 	 if(productSystem == 'Compact'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,
	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 		
	 	}

 	}else if(productSystem == 'фалш шторы'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}
 	}else if(productSystem == 'MINI'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,


	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,

	 	}

 	}else if(productSystem == 'STANDART'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,


	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,

	 		
	 	}

 	}else if (productSystem == "MAXIMUS") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} 'Бел.'`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : 'Бел.',		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI Плоскю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : `${widht} / ${glassWidth.value}`,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'additionalScotchTape' : addToBlankForEach(additionalScotchTape,'Без скотча'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI П-обрю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else{
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),	 		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),

	 		'plasticRetainer' : addToBlankForEach(plasticRetainer,'Без фиксатора'),
	 		'guideString' : addToBlankForEach(guideString, 'Без струны'),
	 		'fasteningSelected' : addToBlankForEach(fasteningSelected),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
 		}

 	}


 	creatingOrgerBlank(oneItem, arrayParameters)

 	resetRadioElements(allRadioElements,selectType)

 

 	function resetRadioElements(data,selectType){


 		data.forEach(function(arrayRadio){
 			if (arrayRadio.length != 0) {

 			
 			}
 		})
 	}


 	function addToBlankForEach(data,exception){
 	
		let text
		data.forEach(function(oneRadio){
			if (oneRadio.checked == true ) {
				text = oneRadio.value
			}  	
		})


 		if(text == undefined){
 			return " "

 		}else if(text == exception){
 			return " "	

 		}else{
			return text

 		}
	}


	function choiceControlMethod(method, channel){
		if (method != 'Цепь') {
			return `${method} ${channel}`
		}
	}



}




	
function addToWindowBlankInForm(products, idTables, idAddBlank ,arrayParam,idButton) {

	addButtonAmoutProduct(products, idButton)

	let buttonAddToBlank = document.querySelector(idTables+" #add_to_blank")
	let screnBlank = document.querySelector(idAddBlank)


	
	let numberRepeatingProduct

	let resultRepeatElement = {};
	deleteRepeatingElement(products)
	



	let allProduct = screnBlank.querySelectorAll('ul')



	allProduct.forEach(function(prod,index){
		if (index != 0) {
			prod.remove()
		}
	})


	products.forEach(function(prod,index){


		if(prod.idParent == buttonAddToBlank.dataset.addtowindowblank){


			screnBlank.classList.remove('none')
			
			let newProduct = createWindowBlank(prod, index, resultRepeatElement)
			
			screnBlank.append(newProduct)
			
		}
	})



	function createWindowBlank(product, countProduct, repeatObject){
			


		let ul = document.createElement('ul')

	
		let maiConfiguration 			
			if (idTables == '#new_vertical_89mm') {

				maiConfiguration = createWindowElement('li', 'maiConfiguration', `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

			}else if(idTables == "#new_vertical_127mm"){ 

				maiConfiguration = createWindowElement('li', 'maiConfiguration', `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

			}else {
				maiConfiguration  = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)} ${excludeUndefined(product.controlMethod)}`)	
		
			}

		let num = createWindowElement('li','number_of_blanks', countProduct+1)
		let width =	createWindowElement('li', 'width',  product.width)	
		let height = createWindowElement('li', 'height',product.height )
		let quantity = createWindowElement('li', 'quantity', product.numberRepetitons)
		let control = createWindowElement('li', 'control' ,product.controlType )
		let fixationSystem = createWindowElement('li', 'fastening', product.fixationSystem)
		let buttonDelete =  createWindowElement('div', 'delenteElement')

		ul.append(num)

		ul.append(maiConfiguration)
		ul.append(width)
		ul.append(height)
		ul.append(control)
		ul.append(quantity)
		ul.append(fixationSystem)
		ul.append(buttonDelete)	




		deleteWindowElement(ul,product, countProduct)
		

		return ul	

	}



	function createWindowElement(tagN, classN, text){
		let li = document.createElement(tagN)
		li.classList.add(classN)
		li.textContent = text


		return li
	}


	function deleteWindowElement(removedItem,removedProduct, numberProduct){



		let buttonDelete = removedItem.querySelector('.delenteElement')
		buttonDelete.addEventListener('click', function(){

			removedItem.remove()



			orderBlank.splice(removedProduct.numberInArrayOrderBlank,1,1) 

			orderBlank.forEach(function(product){
				if (product.arrayElementClass === removedProduct.arrayElementClass) {
					orderBlank.splice(product.numberInArrayOrderBlank,1,1) 
				}
			})


		
			deleteButtonAmoutProduct( idButton)

 

		})
	}



	function excludeUndefined(text){
		if (text != undefined) {


			return text
		}else{
			return ' '
		}
	}





	function addButtonAmoutProduct(data,idButton){
		let downloadCount = document.querySelector(idButton+' .amount_goods')

		data.forEach(function(one,index){
			downloadCount.textContent = index+1
		})
	}


	function deleteButtonAmoutProduct(idButton){
		let downloadButton = document.querySelector(idButton)
		let countDownloadButton = downloadButton.querySelector('.amount_goods')
		let screenBlanks =  document.querySelectorAll('.screen_blank ')
	

		let allProductCount = []
		screenBlanks.forEach(function(blank){
			
			if (blank.dataset.viewinblank ==  downloadButton.dataset.view ) {

			

				let products = blank.querySelectorAll('ul')

				products.forEach(function(product,index){
					if (index !=0 ) {
						allProductCount.push(product)

					}
				})

			
			}

		


		})

		if(allProductCount.length != 0){
			countDownloadButton.textContent = allProductCount.length
		}else{
			countDownloadButton.textContent = ' '
		}




	

	}




	


}



switchWindowsAndDeleteButtons()
function switchWindowsAndDeleteButtons(){
	let allWindow = document.querySelectorAll('.one_window')
	let allTabs = document.querySelectorAll('#switch_tabs ul li')
	let allDownloadButton = document.querySelectorAll('.download_blank')

	let allBlank = document.querySelectorAll('.screen_blank')


	
	allTabs.forEach(function(tab, index) {

		allWindow.forEach(function(oneWindow,ind){
			tab.addEventListener('click',function(){
		

				if (index === ind) {
					allWindow.forEach(function(one){
						one.style.display = 'none'
					})


					allTabs.forEach(function(tb){
						tb.classList.remove('click_tab')
					})

					this.classList.add('click_tab')


					oneWindow.style.display = 'flex'
				 	
				 	viewButtonInBlank(this,oneWindow)

				}

			})
		})
	})	

	allDownloadButton.forEach(function(butt, index){
		butt.classList.add('none')
	})
 
	viewButtonInBlank(allTabs[0], allWindow[0])


	
	function viewButtonInBlank(clickTab,windowView){
 		let viewBlank =  windowView.querySelector('.screen_blank')
		if (clickTab.dataset.click == viewBlank.dataset.viewinblank) {

			allDownloadButton.forEach(function(oneDownloadButt){
				if (oneDownloadButt.dataset.view == viewBlank.dataset.viewinblank) {

					oneDownloadButt.classList.remove('none')

					viewBlank.parentElement.append(oneDownloadButt)
				}
			})
		}
	}
}




newRollerBlinds()
function newRollerBlinds(){
    let data =  allGoods.newRollerBlinds
    
    let parentSection = '#roller_curtains'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'copact','fakeCurtains','mini','standard','maximus','uniFlat','uniFullTurn']
   


    newCreatindGoodsTables(data, 8 ,  '.roller_curtains', commands)
    rollerCurtainsCalculate(data, parentSection, productSelectID , commands)

}



newRollerBlindsDayNight()
function newRollerBlindsDayNight(){
    let data =  allGoods.newRollerBlindsDayNight
    
    let parentSection = '#roller_curtains_day_night'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'copact','fakeCurtains','mini','standard','maximus','uniFlat','uniFullTurn']
   


    newCreatindGoodsTables(data, 8 ,  '.roller_curtains_day_night', commands)
    rollerCurtainsCalculate(data, parentSection, productSelectID , commands)

}



newRollerBlindsReady()
function newRollerBlindsReady(){
    let data =  allGoods.newRollerBlindsReady
    
    let parentSection = '#roller_curtains_ready'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'w35','w40','w45','w50','w55','w60','w65','w70','w75','w80','w85','w90','w95','w100','w105','w110','w115','w120','w125','w130']
   
    newCreatindGoodsTables(data, 21 ,  '.roller_curtains_ready', commands)
    rollerCurtainsCalculateReady(data, parentSection, productSelectID , commands)
}




newHorizontalHouverVenus()
function newHorizontalHouverVenus(){
    let data =  allGoods.newHorizontalHouverVenus
    
    let parentSection = '#horizontal_louver_venus'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name','standard25mm','fullDimmer25mm','standard16mm' ]
   
    newCreatindGoodsTables(data, 4 ,  '.horizontal_louver_venus', commands)
    horizontalCalculate(data, parentSection, productSelectID , commands)
}




newHorizontalHouverStandard()
function newHorizontalHouverStandard(){
    let data =  allGoods.newHorizontalHouverStandard
    
    let parentSection = '#horizontal_louver_standard'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'standard25mm', 'standard16mm']
   

    newCreatindGoodsTables(data, 3 ,  '.horizontal_louver_standard', commands)
    horizontalCalculate(data, parentSection, productSelectID , commands)

}





newVertical89()
function newVertical89(){
    let data = allGoods.newVertical89 

    verticalCreateTable(data,".new_vertical_89mm")

    let parentSelect = "#productSelectNewVertical89mm"
    let selectedID = ['productNameNewVertical89mm', 'productTypeNewVertical89mm']
    let parentSection = '#new_vertical_89mm'


    veticalCalculation(data, parentSection, parentSelect , selectedID )

}


newVertical127()
function newVertical127(){
    let data = allGoods.newVertical127

    verticalCreateTable(data, ".new_vertical_127mm")

    let parentSelect = "#productSelectNewVertical127mm"
    let selectedID = ['productNameNewVertical127mm', 'productTypeNewVertical127mm']
    let parentSection = '#new_vertical_127mm'


    veticalCalculation(data, parentSection , parentSelect , selectedID, parentSection )

}



newMosquitoNet()
function newMosquitoNet(){
    let data =  allGoods.mosquitoNet
    
    let parentSection = '#mosquito_net'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'BK37', 'BK41', 'DA37', 'DA41']
   


    newCreatindGoodsTables(data, 5 ,  '.mosquito_net', commands)
    mosquitoNetCalculate(data, parentSection, productSelectID , commands)

}





