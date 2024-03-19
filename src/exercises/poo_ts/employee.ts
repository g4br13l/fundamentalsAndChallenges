import {Address} from "./address.js"
import {Skill} from "./skill.js"

export class Employee {

    name: string
    email: string
    active: boolean
    address: Address
    private skills: Skill[] = []

    constructor(UserName: string, email: string, address: Address, active: boolean = true)
    {
        this.name = UserName
        this.email = email
        this.active = active
        this.address = address
    }

    setSkills(skill: Skill): void {
        this.skills.push(skill)
    }

    getSkills(): Skill[] {
        return this.skills;
    }

}


