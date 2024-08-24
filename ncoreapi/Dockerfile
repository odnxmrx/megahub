FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5167

ENV ASPNETCORE_URLS=http://+:5167

USER app
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["ncoreapi/ncoreapi.csproj", "ncoreapi/"]
RUN dotnet restore "ncoreapi/ncoreapi.csproj"
COPY . .
WORKDIR "/src/ncoreapi"
RUN dotnet build "ncoreapi.csproj" -c $configuration -o /app/build

FROM build AS publish
# ARG configuration=Release
RUN dotnet publish "ncoreapi.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
#de publish copiamos todo .
ENTRYPOINT ["dotnet", "ncoreapi.dll"]
#genera DLL ya a usar
