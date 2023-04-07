/* eslint-disable prettier/prettier */
import { validate } from 'class-validator';
import { UpdateUserDto } from '../dto/update-user.dto';

describe('Update User DTO', () => {
  it('Should Validate', async () => {
    const updateUserDto = new UpdateUserDto();
    updateUserDto.email = "admin@admin.com";
    updateUserDto.password = "12345";
    const errors = await validate(updateUserDto);
    expect(errors.length).toBe(0);
  });

  it('Should Fail To Validate',async () => {
    const updateUserDto = new UpdateUserDto();
    const errors = await validate(updateUserDto);
    expect(errors.length).toBeGreaterThan(0);
  })
});
