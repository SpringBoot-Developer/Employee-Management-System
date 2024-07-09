package com.ems.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "employees")
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;

}
// [
// {
// "id": 1,
// "firstName": "John",
// "lastName": "Doe",
// "email": "john.doe@example.com"
// },
// {
// "id": 2,
// "firstName": "Jane",
// "lastName": "Smith",
// "email": "jane.smith@example.com"
// },
// {
// "id": 3,
// "firstName": "Michael",
// "lastName": "Johnson",
// "email": "michael.johnson@example.com"
// },
// {
// "id": 4,
// "firstName": "Emily",
// "lastName": "Davis",
// "email": "emily.davis@example.com"
// },
// {
// "id": 5,
// "firstName": "David",
// "lastName": "Williams",
// "email": "david.williams@example.com"
// },
// {
// "id": 6,
// "firstName": "Sarah",
// "lastName": "Brown",
// "email": "sarah.brown@example.com"
// }
// ]
