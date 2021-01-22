function formatNumber(num, prefix) {
   const value = num || "";
   return prefix && num
      ? value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function removeDot(num, prefix) {
   const removeSeparator = prefix ? num.split(prefix).join("") : num;
   return removeSeparator.split(".").join("");
}

export { formatNumber, removeDot };
