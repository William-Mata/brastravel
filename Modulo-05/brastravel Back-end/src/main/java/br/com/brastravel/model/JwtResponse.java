package br.com.brastravel.model;


import java.util.List;

public class JwtResponse {

    private String jwtToken;
    private Integer id;
    private String email;
    private List<String> roles;

    public JwtResponse(String jwtToken, Integer id, String email, List<String> roles) {
        this.jwtToken = jwtToken;
        this.id = id;
        this.email = email;
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {return id;}

    public void setId(Integer id) {this.id = id;}

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
