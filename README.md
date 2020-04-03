# CucumberApiTestJV

Cucumber projet en utilisons le langage Java.
C'etait pour le but de decouvrir le frameWork Cucumber,Dans ce projet en réalise le  test de l'api https://jsonplaceholder.typicode.com .

# Feature File 

```
@testthis
Scenario: Test API
 Given I have API
 When I Hit API with user id as 1
 Then status code comes as 200
 And json body contain user id as 1
```

# StepDefinition
```
public class StepDef_API {
	String baseUri = "https://jsonplaceholder.typicode.com";
	RequestSpecification _REQ_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	Scenario scn;
	@Before
	public void BeforeHook(Scenario s) {
		this.scn = s;
	}
	
	@Given("I have API")
	public void i_have_API() {
		_REQ_SPEC = given().baseUri(baseUri);
		
	}

	@When("I Hit API with user id as {int}")
	public void i_Hit_API_with_user_id_as(Integer int1) {
		_RESP = _REQ_SPEC.when().get("/users/" + int1);
		scn.write("Response returned as: " + _RESP.asString());
	}

	@Then("status code comes as {int}")
	public void status_code_comes_as(Integer int1) {
		_VALIDATABLE_RESP = _RESP.then();
		_VALIDATABLE_RESP.statusCode(int1);
	}

	@Then("json body contain user id as {int}")
	public void json_body_contain_user_id_as(Integer int1) {
		_VALIDATABLE_RESP.body("id", equalTo(int1));
	}

}

```
