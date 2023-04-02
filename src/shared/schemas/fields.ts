export const phoneField = {
  // required: "Phone is required.",
  onChange: function (item: any) {
    const mask = "## ### ## ##";
    const code = "+7 7";

    if (item.currentTarget.value === code.slice(0, -1)) {
      item.currentTarget.value = "";
      return;
    }

    let i = 0,
      val = item.currentTarget.value.replace(code, "").replace(/\D/g, "");

    item.currentTarget.value =
      code +
      mask.replace(/./g, function (substring) {
        return /[#\d]/.test(substring) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : substring;
      });
  },
};
