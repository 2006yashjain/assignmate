js_code = """document.addEventListener("DOMContentLoaded", function() {
    console.log("Student Service Platform Loaded.");
});"""

with open("script.js", "w") as file:
    file.write(js_code)
