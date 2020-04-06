# CucumberApiTestJV

Cucumber projet en utilisons le langage Java.
C'etait pour le but de decouvrir le frameWork Cucumber et Rest Assured ,Dans ce projet en réalise le  test de l'api https://jsonplaceholder.typicode.com .


Cucumber  n'est pas un outil d'automatisation d'API.
C'est pour cela il faut choisit un outil d'automatisation D'API , qui fonctionne bien avec Cucumber.
On trouve : -Rest assured -Karate
https://cucumber.io/docs/guides/api-automation/

Pour ce essaie j'ai choisit Rest Assured; ( https://github.com/rest-assured/rest-assured )


* Cucumber Java
* Junit
* Rest Assured

# Feature File 

```
@testthis
Scenario: Test API
  Given I have API
  When I Hit API with user id as 1
  Then status code comes as 200
  And json body contain user id as 1
  And json body contain name as "Leanne Graham"
```

# StepDefinition
```
package stepdefs;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class StepDef_API {
	String baseUri = "https://jsonplaceholder.typicode.com";
	RequestSpecification _REQ_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	
	@Given("I have API")
	public void i_have_API() {
		_REQ_SPEC = given().baseUri(baseUri);
		
		
	}

	@When("I Hit API with user id as {int}")
	public void i_Hit_API_with_user_id_as(Integer int1) {
		_RESP = _REQ_SPEC.when().get("/users/" + int1);
		
		
	}

	@Then("status code comes as {int}")
	public void status_code_comes_as(Integer int1) {
		_VALIDATABLE_RESP = _RESP.then();
		_VALIDATABLE_RESP.statusCode(int1);
	}
/*test*/
	
	@Then("json body contain user id as {int}")
	public void json_body_contain_user_id_as(Integer int1) {
		_VALIDATABLE_RESP.body("id", equalTo(int1));
	}
	
	@Then("json body contain name id as {string}")
	public void json_body_contain_name_id_as(String string) {
		
		_VALIDATABLE_RESP.body("name",equalTo(string));
		
	    
	}
	

}


```
