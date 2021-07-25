package com.thirdparty.cards.eligibility;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class EligibilityControllerIntTest {

  @LocalServerPort
  private int port;

  @Autowired
  private  static TestRestTemplate testRestTemplate = new TestRestTemplate();


  @Test
  void testEligibilityCheck() {
    EligibilityApplicant applicant = new EligibilityApplicant("Boris", "Boris@J.com",  "test");
    ResponseEntity<Eligibility> response = testRestTemplate
        .postForEntity("http://localhost:" + port + "/eligibility/check", applicant,
            Eligibility.class);
    assertNotNull(response);
    String[] cards = new String[1];
    assertArrayEquals(response.getBody().getEligibleCards().toArray(cards), new String[] {"C1"});
  }

}
