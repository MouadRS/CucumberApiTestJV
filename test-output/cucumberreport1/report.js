$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/myFirstFeature.feature");
formatter.feature({
  "name": "Feature Name",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Test API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@testthis"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have API",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef_API.i_have_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Hit API with user id as 1",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef_API.i_Hit_API_with_user_id_as(Integer)"
});
formatter.write("Response returned as: {\n  \"id\": 1,\n  \"name\": \"Leanne Graham\",\n  \"username\": \"Bret\",\n  \"email\": \"Sincere@april.biz\",\n  \"address\": {\n    \"street\": \"Kulas Light\",\n    \"suite\": \"Apt. 556\",\n    \"city\": \"Gwenborough\",\n    \"zipcode\": \"92998-3874\",\n    \"geo\": {\n      \"lat\": \"-37.3159\",\n      \"lng\": \"81.1496\"\n    }\n  },\n  \"phone\": \"1-770-736-8031 x56442\",\n  \"website\": \"hildegard.org\",\n  \"company\": {\n    \"name\": \"Romaguera-Crona\",\n    \"catchPhrase\": \"Multi-layered client-server neural-net\",\n    \"bs\": \"harness real-time e-markets\"\n  }\n}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef_API.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "json body contain user id as 1",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef_API.json_body_contain_user_id_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "json body contain name id as \"Leanne Graham\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef_API.json_body_contain_name_id_as(String)"
});
formatter.result({
  "status": "passed"
});
});