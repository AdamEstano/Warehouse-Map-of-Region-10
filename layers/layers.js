var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Region10MunicipalandCityBoundaries_1 = new ol.format.GeoJSON();
var features_Region10MunicipalandCityBoundaries_1 = format_Region10MunicipalandCityBoundaries_1.readFeatures(json_Region10MunicipalandCityBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region10MunicipalandCityBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region10MunicipalandCityBoundaries_1.addFeatures(features_Region10MunicipalandCityBoundaries_1);
var lyr_Region10MunicipalandCityBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region10MunicipalandCityBoundaries_1, 
                style: style_Region10MunicipalandCityBoundaries_1,
                popuplayertitle: 'Region 10 Municipal and City Boundaries',
                interactive: true,
                title: '<img src="styles/legend/Region10MunicipalandCityBoundaries_1.png" /> Region 10 Municipal and City Boundaries'
            });
var format_WarehousegovernmentNotActiveCSVregion10_2 = new ol.format.GeoJSON();
var features_WarehousegovernmentNotActiveCSVregion10_2 = format_WarehousegovernmentNotActiveCSVregion10_2.readFeatures(json_WarehousegovernmentNotActiveCSVregion10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehousegovernmentNotActiveCSVregion10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehousegovernmentNotActiveCSVregion10_2.addFeatures(features_WarehousegovernmentNotActiveCSVregion10_2);
var lyr_WarehousegovernmentNotActiveCSVregion10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehousegovernmentNotActiveCSVregion10_2, 
                style: style_WarehousegovernmentNotActiveCSVregion10_2,
                popuplayertitle: 'Warehouse government (Not Active CSV) region 10',
                interactive: true,
                title: '<img src="styles/legend/WarehousegovernmentNotActiveCSVregion10_2.png" /> Warehouse government (Not Active CSV) region 10'
            });
var format_WarehousegovernmentActiveCSVregion10_3 = new ol.format.GeoJSON();
var features_WarehousegovernmentActiveCSVregion10_3 = format_WarehousegovernmentActiveCSVregion10_3.readFeatures(json_WarehousegovernmentActiveCSVregion10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehousegovernmentActiveCSVregion10_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehousegovernmentActiveCSVregion10_3.addFeatures(features_WarehousegovernmentActiveCSVregion10_3);
var lyr_WarehousegovernmentActiveCSVregion10_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehousegovernmentActiveCSVregion10_3, 
                style: style_WarehousegovernmentActiveCSVregion10_3,
                popuplayertitle: 'Warehouse government (Active CSV) region 10',
                interactive: true,
                title: '<img src="styles/legend/WarehousegovernmentActiveCSVregion10_3.png" /> Warehouse government (Active CSV) region 10'
            });
var format_WarehousePrivateActiveCSV10_4 = new ol.format.GeoJSON();
var features_WarehousePrivateActiveCSV10_4 = format_WarehousePrivateActiveCSV10_4.readFeatures(json_WarehousePrivateActiveCSV10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehousePrivateActiveCSV10_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehousePrivateActiveCSV10_4.addFeatures(features_WarehousePrivateActiveCSV10_4);
var lyr_WarehousePrivateActiveCSV10_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehousePrivateActiveCSV10_4, 
                style: style_WarehousePrivateActiveCSV10_4,
                popuplayertitle: 'Warehouse Private (Active CSV) 10',
                interactive: true,
                title: '<img src="styles/legend/WarehousePrivateActiveCSV10_4.png" /> Warehouse Private (Active CSV) 10'
            });
var format_WarehousePrivateNotActiveCSV10_5 = new ol.format.GeoJSON();
var features_WarehousePrivateNotActiveCSV10_5 = format_WarehousePrivateNotActiveCSV10_5.readFeatures(json_WarehousePrivateNotActiveCSV10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehousePrivateNotActiveCSV10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehousePrivateNotActiveCSV10_5.addFeatures(features_WarehousePrivateNotActiveCSV10_5);
var lyr_WarehousePrivateNotActiveCSV10_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehousePrivateNotActiveCSV10_5, 
                style: style_WarehousePrivateNotActiveCSV10_5,
                popuplayertitle: 'Warehouse Private (Not Active CSV) 10',
                interactive: true,
                title: '<img src="styles/legend/WarehousePrivateNotActiveCSV10_5.png" /> Warehouse Private (Not Active CSV) 10'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Region10MunicipalandCityBoundaries_1.setVisible(true);lyr_WarehousegovernmentNotActiveCSVregion10_2.setVisible(true);lyr_WarehousegovernmentActiveCSVregion10_3.setVisible(true);lyr_WarehousePrivateActiveCSV10_4.setVisible(true);lyr_WarehousePrivateNotActiveCSV10_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Region10MunicipalandCityBoundaries_1,lyr_WarehousegovernmentNotActiveCSVregion10_2,lyr_WarehousegovernmentActiveCSVregion10_3,lyr_WarehousePrivateActiveCSV10_4,lyr_WarehousePrivateNotActiveCSV10_5];
lyr_Region10MunicipalandCityBoundaries_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'admityes': 'admityes', 'admitno': 'admitno', 'admitfv': 'admitfv', 'recover': 'recover', 'died': 'died', 'remvlfv': 'remvlfv', 'female': 'female', 'male': 'male', 'sexfv': 'sexfv', 'ag0004': 'ag0004', 'ag0509': 'ag0509', 'ag1014': 'ag1014', 'ag1519': 'ag1519', 'ag2024': 'ag2024', 'ag2529': 'ag2529', 'ag3034': 'ag3034', 'ag3539': 'ag3539', 'ag4044': 'ag4044', 'ag4549': 'ag4549', 'ag5054': 'ag5054', 'ag5559': 'ag5559', 'ag6064': 'ag6064', 'ag6569': 'ag6569', 'ag7074': 'ag7074', 'ag7579': 'ag7579', 'ag8000': 'ag8000', 'agfv': 'agfv', 'totcases': 'totcases', 'region': 'region', 'prov': 'prov', 'psgc': 'psgc', 'mun': 'mun', });
lyr_WarehousegovernmentNotActiveCSVregion10_2.set('fieldAliases', {'Name of Project': 'Name of Project', 'Type of Project': 'Type of Project', 'Latitude (deg)': 'Latitude (deg)', 'Longitude (deg)': 'Longitude (deg)', 'Region:': 'Region:', 'Province': 'Province', 'City/Municipalities': 'City/Municipalities', 'Barangay': 'Barangay', 'District': 'District', 'Owner\'s name': 'Owner\'s name', 'OWNER\'S CONTACT NUMBER': 'OWNER\'S CONTACT NUMBER', 'WAREHOUSE MAN NAME (if any)': 'WAREHOUSE MAN NAME (if any)', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'WAREHOUSE MAN CONTACT NUMBER (if available)', 'WAREHOUSE CAPACITY (in MT or sacks)': 'WAREHOUSE CAPACITY (in MT or sacks)', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)', 'STATUS': 'STATUS', 'YEAR BUILT (if known)': 'YEAR BUILT (if known)', 'WAREHOUSE DIMENSIONS (meters)': 'WAREHOUSE DIMENSIONS (meters)', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'HEIGHT OF STRUCTURE (FFL to Beam) meters', 'Remarks': 'Remarks', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', });
lyr_WarehousegovernmentActiveCSVregion10_3.set('fieldAliases', {'Name of Project': 'Name of Project', 'Type of Project': 'Type of Project', 'Latitude (deg)': 'Latitude (deg)', 'Longitude (deg)': 'Longitude (deg)', 'Region:': 'Region:', 'Province': 'Province', 'City/Municipalities': 'City/Municipalities', 'Barangay': 'Barangay', 'District': 'District', 'Owner\'s name': 'Owner\'s name', 'OWNER\'S CONTACT NUMBER': 'OWNER\'S CONTACT NUMBER', 'WAREHOUSE MAN NAME (if any)': 'WAREHOUSE MAN NAME (if any)', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'WAREHOUSE MAN CONTACT NUMBER (if available)', 'WAREHOUSE CAPACITY (in MT or sacks)': 'WAREHOUSE CAPACITY (in MT or sacks)', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)', 'STATUS': 'STATUS', 'YEAR BUILT (if known)': 'YEAR BUILT (if known)', 'WAREHOUSE DIMENSIONS (meters)': 'WAREHOUSE DIMENSIONS (meters)', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'HEIGHT OF STRUCTURE (FFL to Beam) meters', 'Remarks': 'Remarks', });
lyr_WarehousePrivateActiveCSV10_4.set('fieldAliases', {'Name of Project': 'Name of Project', 'Type of Project': 'Type of Project', 'Latitude (deg)': 'Latitude (deg)', 'Longitude (deg)': 'Longitude (deg)', 'Region:': 'Region:', 'Province': 'Province', 'City/Municipalities': 'City/Municipalities', 'Barangay': 'Barangay', 'District': 'District', 'Owner\'s name': 'Owner\'s name', 'OWNER\'S CONTACT NUMBER': 'OWNER\'S CONTACT NUMBER', 'WAREHOUSE MAN NAME (if any)': 'WAREHOUSE MAN NAME (if any)', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'WAREHOUSE MAN CONTACT NUMBER (if available)', 'WAREHOUSE CAPACITY (in MT or sacks)': 'WAREHOUSE CAPACITY (in MT or sacks)', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)', 'STATUS': 'STATUS', 'YEAR BUILT (if known)': 'YEAR BUILT (if known)', 'WAREHOUSE DIMENSIONS (meters)': 'WAREHOUSE DIMENSIONS (meters)', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'HEIGHT OF STRUCTURE (FFL to Beam) meters', 'Remarks': 'Remarks', });
lyr_WarehousePrivateNotActiveCSV10_5.set('fieldAliases', {'Name of Project': 'Name of Project', 'Type of Project': 'Type of Project', 'Latitude (deg)': 'Latitude (deg)', 'Longitude (deg)': 'Longitude (deg)', 'Region:': 'Region:', 'Province': 'Province', 'City/Municipalities': 'City/Municipalities', 'Barangay': 'Barangay', 'District': 'District', 'Owner\'s name': 'Owner\'s name', 'OWNER\'S CONTACT NUMBER': 'OWNER\'S CONTACT NUMBER', 'WAREHOUSE MAN NAME (if any)': 'WAREHOUSE MAN NAME (if any)', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'WAREHOUSE MAN CONTACT NUMBER (if available)', 'WAREHOUSE CAPACITY (in MT or sacks)': 'WAREHOUSE CAPACITY (in MT or sacks)', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)', 'STATUS': 'STATUS', 'YEAR BUILT (if known)': 'YEAR BUILT (if known)', 'WAREHOUSE DIMENSIONS (meters)': 'WAREHOUSE DIMENSIONS (meters)', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'HEIGHT OF STRUCTURE (FFL to Beam) meters', 'Remarks': 'Remarks', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', });
lyr_Region10MunicipalandCityBoundaries_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'admityes': 'TextEdit', 'admitno': 'TextEdit', 'admitfv': 'TextEdit', 'recover': 'TextEdit', 'died': 'TextEdit', 'remvlfv': 'TextEdit', 'female': 'TextEdit', 'male': 'TextEdit', 'sexfv': 'TextEdit', 'ag0004': 'TextEdit', 'ag0509': 'TextEdit', 'ag1014': 'TextEdit', 'ag1519': 'TextEdit', 'ag2024': 'TextEdit', 'ag2529': 'TextEdit', 'ag3034': 'TextEdit', 'ag3539': 'TextEdit', 'ag4044': 'TextEdit', 'ag4549': 'TextEdit', 'ag5054': 'TextEdit', 'ag5559': 'TextEdit', 'ag6064': 'TextEdit', 'ag6569': 'TextEdit', 'ag7074': 'TextEdit', 'ag7579': 'TextEdit', 'ag8000': 'TextEdit', 'agfv': 'TextEdit', 'totcases': 'TextEdit', 'region': 'TextEdit', 'prov': 'TextEdit', 'psgc': 'TextEdit', 'mun': 'TextEdit', });
lyr_WarehousegovernmentNotActiveCSVregion10_2.set('fieldImages', {'Name of Project': 'TextEdit', 'Type of Project': 'TextEdit', 'Latitude (deg)': 'TextEdit', 'Longitude (deg)': 'TextEdit', 'Region:': 'Range', 'Province': 'TextEdit', 'City/Municipalities': 'TextEdit', 'Barangay': 'TextEdit', 'District': 'TextEdit', 'Owner\'s name': 'TextEdit', 'OWNER\'S CONTACT NUMBER': 'TextEdit', 'WAREHOUSE MAN NAME (if any)': 'TextEdit', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'TextEdit', 'WAREHOUSE CAPACITY (in MT or sacks)': 'TextEdit', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'TextEdit', 'STATUS': 'TextEdit', 'YEAR BUILT (if known)': 'TextEdit', 'WAREHOUSE DIMENSIONS (meters)': 'TextEdit', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'TextEdit', 'Remarks': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', });
lyr_WarehousegovernmentActiveCSVregion10_3.set('fieldImages', {'Name of Project': 'TextEdit', 'Type of Project': 'TextEdit', 'Latitude (deg)': 'TextEdit', 'Longitude (deg)': 'TextEdit', 'Region:': 'Range', 'Province': 'TextEdit', 'City/Municipalities': 'TextEdit', 'Barangay': 'TextEdit', 'District': 'TextEdit', 'Owner\'s name': 'TextEdit', 'OWNER\'S CONTACT NUMBER': 'TextEdit', 'WAREHOUSE MAN NAME (if any)': 'TextEdit', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'TextEdit', 'WAREHOUSE CAPACITY (in MT or sacks)': 'TextEdit', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'TextEdit', 'STATUS': 'TextEdit', 'YEAR BUILT (if known)': 'TextEdit', 'WAREHOUSE DIMENSIONS (meters)': 'TextEdit', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_WarehousePrivateActiveCSV10_4.set('fieldImages', {'Name of Project': 'TextEdit', 'Type of Project': 'TextEdit', 'Latitude (deg)': 'TextEdit', 'Longitude (deg)': 'TextEdit', 'Region:': 'Range', 'Province': 'TextEdit', 'City/Municipalities': 'TextEdit', 'Barangay': 'TextEdit', 'District': 'TextEdit', 'Owner\'s name': 'TextEdit', 'OWNER\'S CONTACT NUMBER': 'TextEdit', 'WAREHOUSE MAN NAME (if any)': 'TextEdit', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'TextEdit', 'WAREHOUSE CAPACITY (in MT or sacks)': 'TextEdit', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'TextEdit', 'STATUS': 'TextEdit', 'YEAR BUILT (if known)': 'TextEdit', 'WAREHOUSE DIMENSIONS (meters)': 'TextEdit', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_WarehousePrivateNotActiveCSV10_5.set('fieldImages', {'Name of Project': 'TextEdit', 'Type of Project': 'TextEdit', 'Latitude (deg)': 'TextEdit', 'Longitude (deg)': 'TextEdit', 'Region:': 'Range', 'Province': 'TextEdit', 'City/Municipalities': 'TextEdit', 'Barangay': 'TextEdit', 'District': 'TextEdit', 'Owner\'s name': 'TextEdit', 'OWNER\'S CONTACT NUMBER': 'TextEdit', 'WAREHOUSE MAN NAME (if any)': 'TextEdit', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'TextEdit', 'WAREHOUSE CAPACITY (in MT or sacks)': 'TextEdit', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'TextEdit', 'STATUS': 'TextEdit', 'YEAR BUILT (if known)': 'TextEdit', 'WAREHOUSE DIMENSIONS (meters)': 'TextEdit', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'TextEdit', 'Remarks': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', });
lyr_Region10MunicipalandCityBoundaries_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'admityes': 'no label', 'admitno': 'no label', 'admitfv': 'no label', 'recover': 'no label', 'died': 'no label', 'remvlfv': 'no label', 'female': 'no label', 'male': 'no label', 'sexfv': 'no label', 'ag0004': 'no label', 'ag0509': 'no label', 'ag1014': 'no label', 'ag1519': 'no label', 'ag2024': 'no label', 'ag2529': 'no label', 'ag3034': 'no label', 'ag3539': 'no label', 'ag4044': 'no label', 'ag4549': 'no label', 'ag5054': 'no label', 'ag5559': 'no label', 'ag6064': 'no label', 'ag6569': 'no label', 'ag7074': 'no label', 'ag7579': 'no label', 'ag8000': 'no label', 'agfv': 'no label', 'totcases': 'no label', 'region': 'no label', 'prov': 'no label', 'psgc': 'no label', 'mun': 'no label', });
lyr_WarehousegovernmentNotActiveCSVregion10_2.set('fieldLabels', {'Name of Project': 'no label', 'Type of Project': 'no label', 'Latitude (deg)': 'no label', 'Longitude (deg)': 'no label', 'Region:': 'no label', 'Province': 'no label', 'City/Municipalities': 'no label', 'Barangay': 'no label', 'District': 'no label', 'Owner\'s name': 'no label', 'OWNER\'S CONTACT NUMBER': 'no label', 'WAREHOUSE MAN NAME (if any)': 'no label', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'no label', 'WAREHOUSE CAPACITY (in MT or sacks)': 'no label', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'no label', 'STATUS': 'no label', 'YEAR BUILT (if known)': 'no label', 'WAREHOUSE DIMENSIONS (meters)': 'no label', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'no label', 'Remarks': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', });
lyr_WarehousegovernmentActiveCSVregion10_3.set('fieldLabels', {'Name of Project': 'no label', 'Type of Project': 'no label', 'Latitude (deg)': 'no label', 'Longitude (deg)': 'no label', 'Region:': 'no label', 'Province': 'no label', 'City/Municipalities': 'no label', 'Barangay': 'no label', 'District': 'no label', 'Owner\'s name': 'no label', 'OWNER\'S CONTACT NUMBER': 'no label', 'WAREHOUSE MAN NAME (if any)': 'no label', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'no label', 'WAREHOUSE CAPACITY (in MT or sacks)': 'no label', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'no label', 'STATUS': 'no label', 'YEAR BUILT (if known)': 'no label', 'WAREHOUSE DIMENSIONS (meters)': 'no label', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'no label', 'Remarks': 'no label', });
lyr_WarehousePrivateActiveCSV10_4.set('fieldLabels', {'Name of Project': 'no label', 'Type of Project': 'no label', 'Latitude (deg)': 'no label', 'Longitude (deg)': 'no label', 'Region:': 'no label', 'Province': 'no label', 'City/Municipalities': 'no label', 'Barangay': 'no label', 'District': 'no label', 'Owner\'s name': 'no label', 'OWNER\'S CONTACT NUMBER': 'no label', 'WAREHOUSE MAN NAME (if any)': 'no label', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'no label', 'WAREHOUSE CAPACITY (in MT or sacks)': 'no label', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'no label', 'STATUS': 'no label', 'YEAR BUILT (if known)': 'no label', 'WAREHOUSE DIMENSIONS (meters)': 'no label', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'no label', 'Remarks': 'no label', });
lyr_WarehousePrivateNotActiveCSV10_5.set('fieldLabels', {'Name of Project': 'no label', 'Type of Project': 'no label', 'Latitude (deg)': 'no label', 'Longitude (deg)': 'no label', 'Region:': 'no label', 'Province': 'no label', 'City/Municipalities': 'no label', 'Barangay': 'no label', 'District': 'no label', 'Owner\'s name': 'no label', 'OWNER\'S CONTACT NUMBER': 'no label', 'WAREHOUSE MAN NAME (if any)': 'no label', 'WAREHOUSE MAN CONTACT NUMBER (if available)': 'no label', 'WAREHOUSE CAPACITY (in MT or sacks)': 'no label', 'MAIN COMMODITY STORED (Rice, Corn, Cacao, Fertilizer, General Goods, etc.)': 'no label', 'STATUS': 'no label', 'YEAR BUILT (if known)': 'no label', 'WAREHOUSE DIMENSIONS (meters)': 'no label', 'HEIGHT OF STRUCTURE (FFL to Beam) meters': 'no label', 'Remarks': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', });
lyr_WarehousePrivateNotActiveCSV10_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});