package cucumberApiTest.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"classpath:features"},
		glue="stepdefs",
		plugin=  { 
				"pretty",
				"html:test-output/cucumberreport1"
		},
		tags = "@testthis"


		)
public class RunnerTest {

}
