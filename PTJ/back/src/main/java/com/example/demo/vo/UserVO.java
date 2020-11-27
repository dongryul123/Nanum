package com.example.demo.vo;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.*;


@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Data
public class UserVO {
	String id;
	String password;
	String firstName;
	String lastName;
	int age;
	String tel;
}
