import React, { useState } from "react";
import "./collectRegisterForm.css"
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

function Form() {
  const [nomeCompleto, setNomecompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState();
  const [veiculo, setVeiculo] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [value, setValue] = useState();



  const [valorError, setValorError] = useState(false);
  const [pesoError, setPesoError] = useState(false);
  const [volumeError, setVolumeError] = useState(false);
 

  var regex = /(([a-z]+[A-Z]+|[A-Z]+[a-z]+|[a-z]|[A-Z])|([0-9]+[A-Za-z]+)|([a-zA-Z]+[0-9])+|([\W]))/;
  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Cadastro de Coletas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
          className="motorista_textFields"
          id="motorista"
          label="Motorista"
          variant="outlined" 
          margin="dense"
          value={nomeCompleto}
          onChange={(event) => {setNomecompleto(event.target.value)}}
        />
        <TextField
          className="veiculo_textFields"
          id="veiculo"
          label="Veículo"
          variant="outlined"          
          margin="dense"
          value={telefone}
          onChange={(event) => {setTelefone(event.target.value)}}
        />

        <hr className="hr"></hr>
        <h2>Coleta</h2>
        <div fullWidth>
        <TextField
          className="data_coleta_textFields"
          id="data"
          label="Data de Coleta"
          placeholder="dd/mm/aaaa"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          className="hora_coleta_textFields"
          id="hora"
          label="Hora de Coleta"
          placeholder="hh:mm"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        </div>
        <div fullWidth>
        <TextField
          className="estado_coleta_textFields"
          id="estado"
          label="Estado"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          className="cidade_coleta_textFields"
          id="cidade"
          label="Cidade"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => {setSenha(event.target.value)}}
        />
        </div>
        <TextField
          className="bairro_coleta_textFields"
          id="bairro"
          label="Bairro"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="rua_coleta_textFields"
          id="rua"
          label="Rua"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="numero_coleta_textFields"
          id="numero"
          label="Número"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />

        <hr className="hr"></hr>
        <h2>Entrega</h2>
        <div fullWidth>
        <TextField
          className="data_entrega_textFields"
          id="data"
          label="Data de Entrega"
          placeholder="dd/mm/aaaa"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          className="hora_entrega_textFields"
          id="hora"
          label="Hora de Entrega"
          placeholder="hh:mm"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        </div>
        <div fullWidth>
        <TextField
          className="estado_entrega_textFields"
          id="estado"
          label="Estado"
          variant="outlined"        
          margin="dense"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          className="cidade_entrega_textFields"
          id="cidade"
          label="Cidade"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => {setSenha(event.target.value)}}
        />
        </div>
        <TextField
          className="bairro_entrega_textFields"
          id="bairro"
          label="Bairro"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="rua_entrega_textFields"
          id="rua"
          label="Rua"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        <TextField
          className="numero_entrega_textFields"
          id="numero"
          label="Número"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />

        <hr className="hr"></hr>
        <h2>Cliente</h2>
        <div fullWidth>
        <TextField
          className="nomeDoCLiente_textFields"
          id="nomeDoCLiente"
          label="Nome"
          variant="outlined"          
          margin="dense"
          fullWidth
          value={veiculo}
          onChange={(event) => {setVeiculo(event.target.value)}}
        />
        </div>
        <div fullWidth>
        <TextField
          className="peso_textFields"
          id="peso"
          label="Peso da Carga (Kg)"
          variant="outlined"          
          margin="dense"
          value={veiculo}
          error={pesoError}
          helperText={pesoError && "Digite apenas números. Unidade de Medida (Kg)."}
          onBlur={(event) => {
            const tmpPeso = event.target.value;

            if (regex.test(tmpPeso) == true) {
              setPesoError(true);
            } else {
              setPesoError(false);
            }
          }}
          onChange={(event) => {
            const tmpPeso = event.target.value;

            if (regex.test(tmpPeso) ==false) {
              setPesoError(false);
            }

            setCpf(event.target.value)}
          }
        />
          <TextField
            className="volume_textFields"
            id="volume"
            label="Volume da Carga (m³)"
            variant="outlined"          
            margin="dense"
            value={veiculo}
            error={volumeError}
            helperText={volumeError && "Digite apenas números. Unidade de Medida (m³)."}
            onBlur={(event) => {
              const tmpVolume = event.target.value;
  
              if (regex.test(tmpVolume) == true) {
                setVolumeError(true);
              } else {
                setVolumeError(false);
              }
            }}
            onChange={(event) => {
              const tmpVolume = event.target.value;
  
              if (regex.test(tmpVolume) ==false) {
                setVolumeError(false);
              }
  
              setCpf(event.target.value)}
            }
          />
        <TextField
          className="valor_textFields"
          id="valor"
          label="Valor da Carga (R$)"
          variant="outlined"          
          margin="dense"
          value={veiculo}
          error={valorError}
          helperText={valorError && "Digite apenas números. Unidade de Medida (R$)."}
          onBlur={(event) => {
            const tmpValor = event.target.value;

            if (regex.test(tmpValor) == true) {
              setValorError(true);
            } else {
              setValorError(false);
            }
          }}
          onChange={(event) => {
            const tmpValor = event.target.value;

            if (regex.test(tmpValor) ==false) {
              setValorError(false);
            }

            setCpf(event.target.value)}
          }
        />
        </div>

        

        <Button className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>

      <p>{nomeCompleto}</p>
    </Container>
  );
}

export default Form;