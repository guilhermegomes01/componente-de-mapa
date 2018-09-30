<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <?php include "assets/inc/metas.php" ?>

    <title>Teste Estágio Front-end</title>

    <?php include "assets/inc/head.php" ?>
  </head>
  <body>
    <div class="mapa-container">
      <div class="mapa-content">
        <div class="select-local">
          <h2>Escolha a filial mais próxima de você</h2>
          <p>A Empresa está onde você mais precisa. Conte com nossos serviços nas cinco filiais do país.</p>
          <form>
            <div class="form-group">
              <select class="form-control" id="selEstado">
                <option value="estado">Estado</option>
                <option value="pernambuco">Pernambuco</option>
                <option value="paraiba">Paraíba</option>
                <option value="spEstado">São Paulo</option>
              </select>

              <select class="form-control" id="selCidade">
                <option value="cidade">Cidade</option>
                <option value="petrolina">Petrolina</option>
                <option value="recife">Recife</option>
                <option value="joaoPessoa">João Pessoa</option>
                <option value="spCapital">São Paulo (Capital)</option>
                <option value="spInterior">São Paulo (Interior)</option>
              </select>
            </div>
          </form>
        </div>

        <div class="mapa"></div>
      </div>
    </div>

    <?php include "assets/inc/js.php" ?>
  </body>
</html>