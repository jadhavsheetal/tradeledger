package com.thirdparty.cards.eligibility;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public final class EligibilityApplicant {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @NotBlank
    private String address;

    @Email(message = "Requires a valid email")
    private String email;

    public EligibilityApplicant() {}

    public EligibilityApplicant(String name, String email, String address) {

        this.name = name;
        this.email = email;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }

}
