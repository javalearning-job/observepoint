package com.observepoint.test.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "departments")
public class Department {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty
	private long deptId;
	
	@Column(name = "dept_name", nullable = false)
	private String deptName;
	
	public Department() {
		
	}

	public Department(long deptId, String deptName) {

		this.deptId = deptId;
		this.deptName = deptName;
		
	}
	
	
	public long getDeptId() {
		return deptId;
	}

	public void setDeptId(long deptId) {
		this.deptId = deptId;
	}

	public String getDeptName() {
		return deptName;
	}
	
	
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

		
	@Override
	public String toString() {
		return "Department [deptId=" + deptId + ", deptName=" + deptName + "]";
	}



}
