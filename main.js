/*
 * Copyright (c) 2019 Centric Consulting, LLC. All rights reserved.
 * Nick Tinsley
 */

const Entity = require('./entity.js')
const Attribute = require('./attribute.js')

function exportEntitiesCsvHandler(){
	let entity = new Entity('_',1,1,0) //will add preferences in future so this can be dynamic from the user
	//get entities
	var arrayEntity = entity.getEntities()	
	//format entities
	var formatedEntity = entity.formatEntitiesForOutput(arrayEntity)
	//write entities to file
	entity.writeToCsv(formatedEntity)
}

function exportAttributeCsvHandler() {
	let attribute = new Attribute('_')

	var arrayAtt = attribute.getAttributes()

	var formatedAtt = attribute.formatAttributesForOutput(arrayAtt)

	attribute.writeToCsv(formatedAtt)

}

function init(){
	app.commands.register('metadatatoolentity:export-csv',exportEntitiesCsvHandler)	
	app.commands.register('metadatatoolattrib:export-csv',exportAttributeCsvHandler)
}

exports.init = init