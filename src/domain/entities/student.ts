import { randomUUID } from "crypto"
import { Entity } from "@/core/entities/entity"
import { Optional } from "@/core/entities/types/optional"
import { UniqueEntityID } from "@/core/entities/unique-id-entity"

interface StudentProps {
    name: string
}

export class Student extends Entity<StudentProps>{    

    get name(){
        return this.props.name
    }

    set name(name: string){
        this.name = name 
    }

    static create(props: StudentProps, id?:  UniqueEntityID){
        const student = new Student(props, id)

        return student
    }
}