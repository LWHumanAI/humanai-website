# Guia de Deploy: HumanAI na Vercel

## Passo 1: Criar o Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login com sua conta **LWHumanAI**

2. Clique no botão **"+"** no canto superior direito e selecione **"New repository"**

3. Preencha os dados:
   - **Repository name:** `humanai-website`
   - **Description:** Site institucional da HumanAI - Consultoria em IA
   - **Visibility:** Public (ou Private, como preferir)
   - **NÃO marque** "Initialize this repository with a README"

4. Clique em **"Create repository"**

5. Na página que aparecer, você verá comandos para fazer o push. **Copie a URL do repositório** que aparece (algo como: `https://github.com/LWHumanAI/humanai-website.git`)

## Passo 2: Conectar o Projeto ao GitHub

**Me envie a URL do repositório que você acabou de criar** e eu farei o push do código para lá.

Ou, se preferir fazer manualmente, execute estes comandos no seu terminal local:

```bash
cd /home/ubuntu/humanai-website
git remote add origin https://github.com/LWHumanAI/humanai-website.git
git branch -M main
git push -u origin main
```

## Passo 3: Fazer Deploy na Vercel

1. Acesse [Vercel](https://vercel.com) e faça login com o e-mail **wilsonlucas.cs@gmail.com**
   - Recomendo fazer login usando a opção "Continue with GitHub" para facilitar a integração

2. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**

3. Na tela "Import Git Repository":
   - Clique em **"Import"** ao lado do repositório `LWHumanAI/humanai-website`
   - Se o repositório não aparecer, clique em "Adjust GitHub App Permissions" e autorize o acesso

4. Na tela de configuração do projeto:
   - **Project Name:** `humanai-website` (ou deixe o padrão)
   - **Framework Preset:** Vite (deve detectar automaticamente)
   - **Root Directory:** `./` (deixe como está)
   - **Build Command:** `npm run build` (já está configurado)
   - **Output Directory:** `dist` (já está configurado)
   - **Install Command:** `npm install` (já está configurado)

5. Clique em **"Deploy"**

6. Aguarde 2-3 minutos enquanto a Vercel faz o build e deploy

7. Quando terminar, você verá uma tela de sucesso com:
   - **URL do site:** algo como `humanai-website.vercel.app`
   - Botão para visitar o site

## Passo 4: Conectar o Domínio Personalizado (imhumanai.com)

1. No dashboard do projeto na Vercel, vá em **"Settings"** → **"Domains"**

2. Digite `imhumanai.com` e clique em **"Add"**

3. A Vercel vai mostrar as configurações de DNS que você precisa adicionar no seu provedor de domínio:
   - **Tipo A:** apontando para o IP da Vercel
   - **Tipo CNAME:** para `www.imhumanai.com` apontando para `cname.vercel-dns.com`

4. Acesse o painel do seu provedor de domínio (onde você registrou `imhumanai.com`) e adicione esses registros DNS

5. Aguarde a propagação (pode levar de alguns minutos até 48 horas)

6. Quando o domínio estiver conectado, a Vercel automaticamente configura o certificado SSL (HTTPS)

## Resultado Final

Após completar esses passos, seu site estará:
- ✅ Hospedado na Vercel com deploy automático
- ✅ Acessível em `https://humanai-website.vercel.app`
- ✅ Acessível em `https://imhumanai.com` (após configurar o DNS)
- ✅ Com HTTPS (SSL) automático
- ✅ Com deploy contínuo: toda vez que você fizer um commit no GitHub, o site atualiza automaticamente

---

**Precisa de ajuda em algum passo? Me avise e eu te guio!**
