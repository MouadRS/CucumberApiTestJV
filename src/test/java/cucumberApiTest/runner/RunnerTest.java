package cucumberApiTest.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		features= {"classpath:features"},
		
        glue="stepdefs",
        plugin= {
		"pretty", 
		"html:test-output/cucumberreport"
		}
)

public class RunnerTest {

}
