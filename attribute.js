/*
 * Copyright (c) 2019 Centric Consulting, LLC. All rights reserved.
 * Nick Tinsley
 */


const fs = require('fs')

class Attribute{
	constructor(deliminator){
		this.deliminator = deliminator
	}

	getAttributes(){
		return app.repository.select("@UMLClass")
	}

	
	formatAttributesForOutput(arrayAtt){
		var i
		var j
		var returnArray = []

		//console.log(arrayAtt)
		
		for(i=0; i < arrayAtt.length; i++){

			arrayAtt[i].name = arrayAtt[i].name.split('.').join('')
			arrayAtt[i].name = arrayAtt[i].name.split(' ').join(this.deliminator)

			for(j=0; j<arrayAtt[i].attributes.length; j++){
				arrayAtt[i].attributes[j].name= arrayAtt[i].attributes[j].name.split(' ').join(this.deliminator)	
				var colIndxNum = j+1
				if(arrayAtt[i].attributes[j].isUnique){
					arrayAtt[i].attributes[j].isUnique = 1
				}else{
					arrayAtt[i].attributes[j].isUnique = 0
				}

				var entryString = arrayAtt[i].name +','+ arrayAtt[i].attributes[j].type +','+ arrayAtt[i].attributes[j].isUnique +','+ arrayAtt[i].attributes[j].name +','+ arrayAtt[i].attributes[j].documentation +','+ '' +','+ '' +','+ colIndxNum +', , , '
				returnArray.push(entryString)
			}
		}

		return returnArray
	}

	writeToCsv(formatedArray){
		var header = 'entity_key, attribute_class_key, unique_index_ind, attribute_name, attibute_desc, not_nullable_ind, ap_functional_ind, column_index, data_type_override_desc, precision_override_desc, scale_override_desc'
		var filters =[
			{name: "CSV file", extensions:["csv"]}
		]
		var selected = app.dialogs.showSaveDialog("Type In Name",null,filters)

		if(selected){
			var file = fs.createWriteStream(selected)

			file.on('error', function(err){
				if (err) throw err
			})

			file.write(header +'\n')

			formatedArray.forEach(function(v){
				file.write(v + '\n')
			})

			file.end()

		}else{
			console.log('File selection was canceled')
		}
	}

}

module.exports = Attribute