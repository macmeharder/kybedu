export const phoneField = {
  // required: "Phone is required.",
  code: "+7 7",
  onChange: function (item: any) {
    const mask = "## ### ## ##";

    if (item.currentTarget.value === this.code.slice(0, -1)) {
      item.currentTarget.value = "";
      return;
    }

    let i = 0,
      val = item.currentTarget.value.replace(this.code, "").replace(/\D/g, "");

    item.currentTarget.value =
      this.code +
      mask.replace(/./g, function (substring) {
        return /[#\d]/.test(substring) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : substring;
      });
  },
};
