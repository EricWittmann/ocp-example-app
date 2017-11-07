package io.apicurio.ocp.app.ui;

public class ConfigBean {
	
	private String accessToken;
	private String apiUrl;
	
	public ConfigBean() {
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getApiUrl() {
		return apiUrl;
	}

	public void setApiUrl(String apiUrl) {
		this.apiUrl = apiUrl;
	}

}
