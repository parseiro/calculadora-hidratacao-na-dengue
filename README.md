# Access hosted project

https://parseiro.github.io/calculadora-hidratacao-na-dengue/#/patientEdit

# Figma design

https://www.figma.com/file/cC73ESfZ0JD8xyb1ftt8X2/Calculadora-Hidrata%C3%A7%C3%A3o-Dengue?node-id=0%3A1

# How to build Docker image

`docker compose -f compose.yml build`

# How to execute docker image

`docker compose -f compose.yml up -d`

Then access through http://localhost:8080

# If you need to run json-server manually (only if needed)

`json-server.cmd --watch .\mock-api\data.json`
