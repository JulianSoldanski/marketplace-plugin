/**
 * All Data needed for the categoryFilter Component
 */
export const categories = [
    {
      name: 'Bewirtschaftung',
      imageUrl: marketplace.plugin_path+'src/images/Bewirtschaftung.png',
      tooltip: 'Unter der Bewirtschaftung versteht man ...'
    },
    {
      name: 'Energie',
      imageUrl: marketplace.plugin_path+'src/images/Energie.png',
      tooltip: 'Unter der Energie versteht man ...'
    },
    {
      name: 'Küche',
      imageUrl: marketplace.plugin_path+'src/images/Küche.png',
      tooltip: 'Unter der Küche versteht man ...'
    },
    {
      name: 'Sicherheit',
      imageUrl: marketplace.plugin_path+'src/images/Sicherheit.png',
      tooltip: 'Unter der Sicherheit versteht man ...'
    },
    {
      name: 'Assistenz',
      imageUrl: marketplace.plugin_path+'src/images/Assistenz.png',
      tooltip: 'Unter der Assistenz versteht man ...'
    }
];
   

/**
 * All Data needed for the slider component
 */
export const filterGroups = [
   {
      title: "Sortieren nach", 
      id: "sortby",
      type: "radio",
      dropdown: 0,
      fields: [
      { label: "Namen", name:"name", id: "title", value: "title"}, 
      { label: "Markennamen", name:"brand" ,id: "brand", value:"brand"},
      { label: "Preis", name:"price",  id: "price", value:"price"},
      { label: "Datum",  name:"date" ,id: "date", value:"date"},
      { label: "Anzahl Bewertungen", name:"ratingCount",  id: "ratingCount", value:"ratingCount"},

      ],
   },        
   {
      title: "", 
      type: "switch",
      dropdown: 0,
      id: "sortorder",
      fields: [
      { unchecked: "Aufsteigend", checked: "Absteigend", id: "sortieren", value: "sortieren"}, 
      ],
   },
   {
      title: "Preisspanne", 
      type: "range",
      id: "price",
      dropdown: 1,

      fields: [
      { min: 0, max: 300, step: 10, unit:"€", id: "price", value: "price", tooltip:"Preis einstellen" }, 

      ],
   },
   {
      title: "Sicherheitslevel", 
      type: "range",
      id: "security_classification",
      dropdown: 1,

      fields: [
      { min: 0, max: 6, step: 1, unit:"level",  id: "sicherheitslevel", value: "sicherheitslevel", tooltip:"Sicherheitslevel einstellen" }, 

      ],
   },
   {
      title: "Tags", 
      type: "checkbox",
      id: "tags",
      dropdown: 1,
      fields: [
         { 
            label: "KI basiert", 
            id: "ki", 
            value: "ki",
            tooltip:"Der Service verwendet künstliche Intelligenz"
         },  
         { 
            label: "Favoriten", 
            id: "favorites", 
            value: "favorites", 
            tooltip:"Favoriten"
         },  
      ],
   },
   {
   title: "Typ", 
   type: "checkbox",
      id: "typ",
      dropdown: 1,
      fields: [
      { label: "Monitor", id: "Monitor", value: "Monitor", tooltip:"Monitor data"},  
      { label: "Diagnostics", id: "diagnostic", value: "diagnostic", tooltip:"Führt eigene Handlungen aus"},  
      { label: "Command Execution", id: "commandexecution", value: "commandexecution", tooltip:"Führt commands aus"},  
      { label: "Personal Tracker", id: "personaltracker", value: "personaltracker", tooltip:"Trackt den Benutzer"},  
      { label: "Trainable Assistant", id: "trainableassistant", value: "trainableassistant", tooltip:"Trainierbarer Assistent"},  
      ],
   },
   {
   title: "Zahlungsmodell", 
   type: "checkbox",
   id: "payment",
   dropdown: 1,

   fields: [
         { label: "Flatrate", id: "flatrate", value: "flatrate", tooltip:"Bei jedem Nutzen bezahlen"},  
         { label: "Freemium", id: "freemium", value: "freemium", tooltip:"Monatlich bezahlen"},  
         { label: "Subscription", id: "subscription", value: "subscription", tooltip:"Monatlich mit Struktur"},  
         { label: "Usage-based Pricing", id: "usagebased", value: "usagebased", tooltip:"Für Anzahl an Daten zahlen"},  
   ],
   },
   {
   title: "System", 
   type: "checkbox",
   id: "system",
   dropdown: 1,
   fields: [
   { label: "Bluetooth Low Energy", id: "ble", value: "ble", tooltip:"BLE"},  
   { label: "devolo", id: "devolo", value: "devolo", tooltip:"devolo"},  
   { label: "digitalStrom", id: "digitalStrom", value: "digitalStrom", tooltip:"digitalStrom"},  
   { label: "EnOcean Alliance", id: "enOcean_Alliance ", value: "enOcean_Alliance", tooltip:"EnOcean Alliance"},  
   { label: "Homee", id: "homee", value: "homee", tooltip:"homee"},  
   { label: "Homematic", id: "homematic", value: "homematic", tooltip:"homematic"},  
   { label: "innogy Smarthome", id: "innogySmarthome", value: "innogySmarthome", tooltip:"innogy Smarthome"},  
   { label: "Local Operating Network (LON)", id: "lon", value: "lon", tooltip:"lon"},  
   { label: "Loxone Electronics GmbH", id: "lox", value: "lox", tooltip:"Loxone Electronics GmbH"},  
   { label: "SAMSUNG SmartThings", id: "SAMSUNG_SmartThings", value: "SAMSUNG_SmartThings", tooltip:"SAMSUNG SmartThings"},  
   { label: "TaHoma Connect", id: "TaHoma_Connect", value: "TaHoma_Connect", tooltip:"TaHoma Connect"},  
   { label: "Thread Group", id: "Thread_group", value: "Thread_group", tooltip:"Thread Group"},  
   { label: "TRON Smart Home", id: "tron_smart_home", value: "tron_smart_home", tooltip:"Tron Smart Home"},
   { label: "ULE Alliance", id: "ULE_Alliance", value: "ULE_Alliance", tooltip:"ULE Alliance"},  
   { label: "Works with Nest", id: "Works_with_Nest", value: "Works_with_Nest", tooltip:"Works with Nest"},  
   { label: "ZigBee", id: "ZigBee", value: "ZigBee", tooltip:"ZigBee"},  
   { label: "Z-Wave", id: "Z-Wave", value: "Z-Wave", tooltip:"Z-Wave"},  

   ],
   },
   {
   title: "Zertifizierung", 
   type: "checkbox",
   id: "certificate",
   dropdown: 1,

   fields: [
         { label: "ISO 27001", id: "iso27001", value: "iso27001", tooltip:"iso27001"},  
         { label: "SOC 2", id: "soc2", value: "soc2", tooltip:"soc2"},  
   ],
   },
   {
   title: "Benutzeroberfläche", 
   type: "checkbox",
   id: "interface",
   dropdown: 1,

   fields: [
         { label: "Desktop", id: "desktop", value: "desktop", tooltip:"Mithilfe einer Desktop Appliklation"},  
         { label: "Mobile", id: "mobile", value: "mobile", tooltip:"Mithilfe einer mobilen Applikation"},  
         { label: "Web", id: "web", value: "web", tooltip:"Mithilfe einer Webanwendung"},  
   ],
   },
   {
      title: "Nutzenfaktoren", 
      type: "checkbox",
      id: "benefit",
      dropdown: 1,
   
      fields: [
            { label: "Kostenreduzierung", id: "kostenreduzierung", value: "kostenreduzierung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Zeitreduzierung", id: "zeitreduzierung", value: "zeitreduzierung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},   
            { label: "Echtzeitüberwachung", id: "echtzeitüberwachung", value: "echtzeitüberwachung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Vorrausschauende Wartung", id: "predictivemaintance", value: "predictivemaintance", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Kundenwert", id: "kundenwert", value: "kundenwert", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Kundenbeziehung", id: "kundenbeziehung", value: "kostenreduzierung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Benutzererfahrung", id: "benutzererfahrung", value: "kostenreduzierung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Leistungssteigerung", id: "leistungssteigerung", value: "leistungssteigerung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Qualitätssteigerung", id: "qualitätssteigerung", value: "qualitätssteigerung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Flexibilitätssteigerung", id: "flexibilitätssteigerung", value: "flexibilitätssteigerung", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Informationsgewinn", id: "informationsgewinn", value: "informationsgewinn", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Sicherheit", id: "sicherheit", value: "sicherheit", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
            { label: "Umweltnutzen", id: "umwelt", value: "sicherheit", tooltip:"Mithilfe des Services können die Kosten reduziert werden"},  
      ],
   },
   
   {
      title: "Anbieter", 
      type: "checkbox",
      id: "brand",
      dropdown: 1,
   
      fields: [
         { label: "ForeSight", id: "foresight", value: "foresight", tooltip:"ForeSight"},  
         { label: "Rewe", id: "rewe", value: "rewe", tooltip:"Rewe"},  

      ],
   }
];






/**
 * Configured Test Data
 */
export const marketplaceData = [
  {
     "id":"113X1",
     "title":"QR-Code Reader Instance ",
     "security_classification":null,
     "sri":null,
     "neoid":2609,
     "label":"service",
     "price":33,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Freemium",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":21,
     "rating":5,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "image" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2S_BcHgEj3xo8DoKf7ilW-e0B-f-g0WvqqHbEMZMiNOFo83WBhCAw9q92teiyS9w3is&usqp=CAU",
     "category":"Assistenz",
     "interface":"web"

  },
  {
     "id":"202X2",
     "title":"Object Recognizer – Tools Instance 1",
     "security_classification":null,
     "sri":null,
     "neoid":2610,
     "label":"service",
     "price":226,
     "tags":[
        "KI basiert"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "application":"Feuermelder",
     "certificate":"ISO 27001",
     "ratingCount":117,
     "rating":2,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "image" :"",
     "category":"Sicherheit",
     "image" : "https://www.tosall.com/wp-content/uploads/2018/01/AI_Object_Recognition_Feature_Img.jpg",
     "interface":"web"

  },
  {
     "id":"104X1",
     "title":"Liveness Detection Instance 1",
     "security_classification":"Level 6",
     "sri":3,
     "neoid":2611,
     "label":"service",
     "price":3,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":21,
     "rating":3,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Sicherheit",
     "image":"https://d1tzzns6d79su2.cloudfront.net/uploads/embedded_image/c71c2d888583b39413a3626722d03eda2ba6ea938672f974efaf9a86b98b4bdc/87d93aad-d1c9-4c74-8121-1878983c2a81.webp",
     "interface":"web"

  },
  {
     "id":"103X1",
     "title":"Face Recognition Extension Instance 1",
     "security_classification":"Level 6",
     "sri":3,
     "neoid":2612,
     "label":"service",
     "price":269,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":190,
     "rating":2,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Sicherheit",
     "image": "https://images.idgesg.net/images/article/2017/11/facial_recognition_system_identification_digital_id_security_scanning_thinkstock_858236252_3x3-100740902-large.jpg?auto=webp&quality=85,70",
     "interface":"web"

  },
  {
     "id":"154X2",
     "title":"HealthyEating Macro Manager Instance 2",
     "security_classification":"Level 5",
     "sri":3,
     "neoid":2613,
     "label":"service",
     "price":292,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"ISO 27001",
     "ratingCount":114,
     "rating":3,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Küche",
     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRE0XoaQQ9ExLkvl7cMIQuIXtSXuQwAWx6lIQdicqMDVLC4qWccRdNJDeI2Mlr-CPovA&usqp=CAU",
     "interface":"web"

  },
  {
     "id":"155X1",
     "title":"MHD Tracker Instance 1",
     "security_classification":"Level 5",
     "sri":3,
     "neoid":2614,
     "label":"service",
     "price":59,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":26,
     "rating":5,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Küche",
     "image":"https://www.experto.de/wp-content/uploads/2012/04/40415119.jpg",
     "interface":"web"

  },
  {
     "id":"158X1",
     "title":"Dein REWE Einkaufsplaner Instance 1",
     "security_classification":"Level 5",
     "sri":3,
     "neoid":2615,
     "label":"service",
     "price":300,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":160,
     "rating":2,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Küche",
     "image":"https://media.graphassets.com/resize=w:1200/quality=value:75/compress/oWmJPvkXQD61hkGiD2h8",
     "interface":"web"
  },
  {
     "id":"106X1",
     "title":"Intelligent Gatekeeper Instance 1",
     "security_classification":"High",
     "sri":9,
     "neoid":2616,
     "label":"service",
     "price":37,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":51,
     "rating":3,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Sicherheit",
     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHX3yoUjWsA__tTJWapDIdoISC7gXO0Eo2GA&usqp=CAU",
     "benefit":"Sicherheit",
     "interface":"web",

  },
  {
     "id":"108X1",
     "title":"Water Leakage Detection Instance 1",
     "security_classification":"Level 4",
     "sri":3,
     "neoid":2617,
     "label":"service",
     "price":93,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":79,
     "rating":4,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category": "Bewirtschaftung",
     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG5EjK6DGs8q0_eCC4jkmXNIg3U4gbaDe_w&usqp=CAU",
     "interface":"web",
     "benefit":"Sicherheit",
  },
  {
     "id":"109X1",
     "title":"Synchro Incident Instance 1",
     "security_classification":"Level 3",
     "sri":5,
     "neoid":2618,
     "label":"service",
     "price":3,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":245,
     "rating":5,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "image":"https://www.wespeakiot.de/wp-content/uploads/2017/12/when-products-turn-into-smart-services.jpg",
     "interface":"web"

  },
  {
     "id":"111X1",
     "title":"Anomaly Detection Kafka Instance 1",
     "security_classification":"Level 3",
     "sri":1,
     "neoid":2619,
     "label":"service",
     "price":295,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"SOC 2",
     "ratingCount":143,
     "rating":4,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYsAjzriLL_WAzRBJ1aS3uXtfUqA7B3bNsQ&usqp=CAU",
     "interface":"web"

  },
  {
     "id":"112X1",
     "title":"Authentication Base Service Instance 1",
     "security_classification":null,
     "sri":null,
     "neoid":2620,
     "label":"service",
     "price":282,
     "tags":[
        "KI"
     ],
     "typ":"Monitor",
     "payment":"Subscription",
     "system":"BLE",
     "brand":"ForeSight",
     "benefit":"Sicherheit",
     "certificate":"",
     "ratingCount":243,
     "rating":2,
     "description":"Dies ist ein Beispielstext für die Beschreibung....",
     "category":"Sicherheit",
     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZ6JtLbKSzcf-UZH0MtPYa7f2VHNKjLhhpQ&usqp=CAU",
     "interface":"web"
  }
];


//To enable Data from the Service Registry uncomment the following line and comment or remove the above marketplaceData:

//export const marketplaceData = marketplace.entries

