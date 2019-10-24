/*
 * Copyright (c) 2019 Centric Consulting, LLC. All rights reserved.
 * Nick Tinsley
 */


const fs = require('fs')

class Entity{
	
	constructor(deliminator, domainKey, versionInd, useInAutomationInd){
		this.deliminator = deliminator
		this.domainKey = domainKey
		this.versionInd = versionInd
		this.useInAutomationInd = useInAutomationInd

	}
	/*
		getEntities queries the StarUML project for all of the Classes which are the entities and returns
		the array of entities to the caller
	*/
	getEntities(){
		return app.repository.select("@UMLClass")
	}

	/*
		formatEntitiesForOutput takes an array of entites and formats the data into a CSV format
	*/
	formatEntitiesForOutput(etnityArray){
		var i;
		//console.log(etnityArray.length)

		var returnArray =[]

		for(i=0; i<etnityArray.length; i++){
			//console.log(etnityArray[i].name)
			etnityArray[i].name = etnityArray[i].name.split('.').join('')
			etnityArray[i].name = etnityArray[i].name.split(' ').join(this.deliminator)
			//console.log(etnityArray[i].name)
			var entryString = this.domainKey +','+etnityArray[i].name+','+''+','+this.versionInd+','+this.useInAutomationInd

			returnArray.push(entryString)
		}

		return returnArray
	}

	/*
		writeToCsv takes an array of formated Entites, it opens a save dialog box and uses the input from the user for a file name and destination.  
		It then writes to the file using a filestream
	*/
	writeToCsv(formatedEntities){
		//for csv header
		var header = 'domain_key, entity_name, entity_description, version_ind, use_in_automation_ind'

		//filters for save prompt, it will automaticall choose CSV as the file type
		var filters =[
			{name: "CSV file", extensions:["csv"]}
		]

		//get path and file name
		var selected = app.dialogs.showSaveDialog("Type In Name",null,filters)

		if(selected){

			//create file stream, to write line by line
			var file = fs.createWriteStream(selected)
			//error handling
			file.on('error',function(err){
				if (err) throw err
			})
			//write header
			file.write(header + '\n')
			//write formated entities
			formatedEntities.forEach(function(v){
				file.write(v + '\n')
			})

			//close stream connection
			file.end()
		}else{
			console.log('File selection was canceled')
		}

	}

}

module.exports = Entity