import TextInput from "../../../components/TextInput";
import Select from "../../../components/Select";
import SubmitButton from "../../../components/SubmitButton";
const Form = () => {
  return (
    <form className="mt-3">
      <div class="mb-4">
        <TextInput
          name="email"
          placeholder="ادرس ایمیلت رو اینجا بنویس"
        ></TextInput>
      </div>

      <div class="mb-4">
        <Select name="state" placeholder="اسم استانت رو انتخاب کن">
          <option>کرمان</option>
          <option>تهران</option>
        </Select>
      </div>
      <div class="mb-4">
        <Select name="city" placeholder="اسم شهرت رو انتخاب کن">
          <option>شهداد</option>
          <option>رفسنجان</option>
        </Select>
      </div>

      <div class="mb-4">
        <TextInput
          name="postalCode"
          placeholder="کد پستی خونه رو بنویس"
        ></TextInput>
      </div>

      <SubmitButton state="threeQuarters" />
    </form>
  );
};

export default Form;
