let table = base.getTable("Teas");
let queryResult = await table.selectRecordsAsync();
let record = queryResult.records[0];
let fields = table.fields;

let data = {
    record: Object.fromEntries(fields.map(field => [field.name.replace(" ", "_"), record.getCellValueAsString(field)])),
};

console.log(data);

fetch("https://2779653cb1c6.ngrok.io/api/v1/users", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
}).then(res => {
    console.log(res);
});
