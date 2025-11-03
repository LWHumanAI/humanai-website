# Guia Completo: Conectar imhumanai.com (Namecheap) à Vercel

## 📋 Visão Geral

Você já tem o domínio `imhumanai.com` registrado no Namecheap. Agora vamos conectá-lo ao site hospedado na Vercel para que as pessoas possam acessar seu site através desse domínio.

---

## Parte 1: Adicionar o Domínio na Vercel

### Passo 1: Acessar as Configurações do Projeto

1. Acesse o dashboard da Vercel: https://vercel.com/dashboard
2. Clique no projeto **"humanai-website"**
3. No menu superior, clique em **"Settings"**
4. No menu lateral esquerdo, clique em **"Domains"**

### Passo 2: Adicionar o Domínio

1. No campo de texto que aparece, digite: `imhumanai.com`
2. Clique em **"Add"**
3. A Vercel vai perguntar: **"Do you want to add www.imhumanai.com as well?"**
   - Marque **"Yes"** (isso faz com que `www.imhumanai.com` redirecione automaticamente para `imhumanai.com`)
4. Clique em **"Add"** novamente

### Passo 3: Copiar as Configurações de DNS

A Vercel vai mostrar uma tela com as configurações de DNS necessárias. Você verá algo assim:

**Para `imhumanai.com`:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para `www.imhumanai.com`:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Deixe essa aba aberta** (você vai precisar dessas informações no próximo passo).

---

## Parte 2: Configurar o DNS no Namecheap

### Passo 1: Acessar o Painel do Namecheap

1. Acesse: https://www.namecheap.com
2. Faça login na sua conta
3. No menu superior, clique em **"Domain List"**
4. Localize o domínio **"imhumanai.com"**
5. Clique no botão **"Manage"** ao lado do domínio

### Passo 2: Acessar as Configurações de DNS

1. Na página de gerenciamento do domínio, procure a seção **"NAMESERVERS"**
2. Verifique se está selecionado **"Namecheap BasicDNS"** ou **"Custom DNS"**
   - Se estiver em "Custom DNS" com outros nameservers, você tem duas opções:
     - **Opção A (Recomendada):** Mudar para "Namecheap BasicDNS" e seguir este guia
     - **Opção B:** Configurar os registros DNS no provedor atual dos nameservers

3. Assumindo que está em **"Namecheap BasicDNS"**, clique na aba **"Advanced DNS"** (no menu horizontal)

### Passo 3: Adicionar os Registros DNS

Na seção **"Host Records"**, você vai adicionar dois registros:

#### Registro 1: Domínio Raiz (imhumanai.com)

1. Clique em **"Add New Record"**
2. Preencha:
   - **Type:** A Record
   - **Host:** @ (arroba)
   - **Value:** `76.76.21.21`
   - **TTL:** Automatic (ou 1 min para testar mais rápido)
3. Clique no ✓ (check) para salvar

#### Registro 2: Subdomínio WWW (www.imhumanai.com)

1. Clique em **"Add New Record"** novamente
2. Preencha:
   - **Type:** CNAME Record
   - **Host:** www
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** Automatic (ou 1 min)
3. Clique no ✓ (check) para salvar

### Passo 4: Remover Registros Conflitantes (Se Houver)

**IMPORTANTE:** Se você já tiver outros registros A ou CNAME apontando para `@` ou `www`, você precisa removê-los para evitar conflitos.

Procure por:
- Registros A com Host `@` apontando para outros IPs
- Registros CNAME com Host `www` apontando para outros destinos
- Registros de "Parking Page" do Namecheap

**Delete esses registros antigos** clicando no ícone de lixeira ao lado deles.

### Passo 5: Salvar as Alterações

- As alterações no Namecheap são salvas automaticamente quando você clica no ✓
- Você deve ver os dois novos registros na lista de "Host Records"

---

## Parte 3: Aguardar a Propagação e Verificar

### Tempo de Propagação

- **Mínimo:** 5-15 minutos
- **Máximo:** 48 horas (raro)
- **Típico:** 1-2 horas

### Verificar o Status na Vercel

1. Volte para a aba da Vercel (Settings → Domains)
2. Você verá o status dos domínios:
   - 🟡 **"Pending"** ou **"Invalid Configuration"**: DNS ainda não propagou
   - 🟢 **"Valid Configuration"**: DNS configurado corretamente!

3. Quando aparecer **"Valid Configuration"**, a Vercel automaticamente:
   - Gera o certificado SSL (HTTPS)
   - Ativa o domínio
   - Redireciona `www` para o domínio raiz (se você marcou essa opção)

### Testar o Domínio

Após a propagação, teste acessando:
- https://imhumanai.com
- https://www.imhumanai.com (deve redirecionar para o acima)

---

## 🎯 Checklist Final

- [ ] Deploy na Vercel concluído com sucesso
- [ ] Domínio `imhumanai.com` adicionado na Vercel (Settings → Domains)
- [ ] Registro A criado no Namecheap (@ → 76.76.21.21)
- [ ] Registro CNAME criado no Namecheap (www → cname.vercel-dns.com)
- [ ] Registros antigos/conflitantes removidos do Namecheap
- [ ] Aguardado tempo de propagação (15min - 2h)
- [ ] Status "Valid Configuration" apareceu na Vercel
- [ ] Site acessível via https://imhumanai.com
- [ ] Certificado SSL (cadeado verde) funcionando

---

## 🆘 Solução de Problemas

### Problema 1: "Invalid Configuration" na Vercel após 2 horas

**Solução:**
1. Verifique se os registros DNS estão exatamente como especificado
2. Use uma ferramenta online para verificar o DNS: https://dnschecker.org
   - Digite `imhumanai.com` e selecione "A"
   - Deve mostrar o IP `76.76.21.21`

### Problema 2: Site não carrega ou mostra erro 404

**Solução:**
1. Aguarde mais tempo (pode levar até 48h em casos raros)
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente acessar em modo anônimo/privado

### Problema 3: Certificado SSL não funciona (não aparece HTTPS)

**Solução:**
- A Vercel gera o SSL automaticamente após o DNS propagar
- Aguarde até 10 minutos após o status "Valid Configuration"
- Se não funcionar, vá em Settings → Domains e clique em "Refresh" ao lado do domínio

---

## 📞 Precisa de Ajuda?

Se encontrar qualquer problema durante o processo, me envie:
1. Um print da tela "Advanced DNS" do Namecheap
2. Um print da tela "Domains" da Vercel
3. A mensagem de erro que está aparecendo (se houver)

Vou te ajudar a resolver imediatamente!
