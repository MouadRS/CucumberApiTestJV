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