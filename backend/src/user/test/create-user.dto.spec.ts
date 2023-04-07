/* eslint-disable prettier/prettier */
import { validate } from "class-validator"
import { CreateUserDto } from "../dto/create-user.dto"

describe('Create User DTO',() => {
    it('Should Validate',async () => {
        const createUserDTO = new CreateUserDto();
        createUserDTO.email = 'admin@admin.com'
        createUserDTO.password = '123';
        const errors = await validate(createUserDTO)
        expect(errors.length).toBe(0)
    })

    it('Should Fail To Validate',async () => {
        const createUserDTO = new CreateUserDto();
        const errors = await validate(createUserDTO)
        expect(errors.length).toBeGreaterThan(0);
    })
})