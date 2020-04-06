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
	Response _RESPs;
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

	
	@Then("json body contain user id as {int}")
	public void json_body_contain_user_id_as(Integer int1) {
		_VALIDATABLE_RESP.body("id", equalTo(int1));
	}
	
	@Then("json body contain name id as {string}")
	public void json_body_contain_name_id_as(String string) {
		
		_VALIDATABLE_RESP.body("name",equalTo(string));
		
	    
	}
	

}
