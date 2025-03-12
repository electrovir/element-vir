(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Se=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Se||{});function J(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function U0(e){return J(e).filter(t=>isNaN(Number(t)))}function xt(e){return U0(e).map(r=>e[r])}var W0=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,j0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,q0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Rs={Space_Separator:W0,ID_Start:j0,ID_Continue:q0},he={isSpaceSeparator(e){return typeof e=="string"&&Rs.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Rs.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Rs.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let $o,Te,Mt,Ui,tr,pt,De,la,Fn;var z0=function(t,r){$o=String(t),Te="start",Mt=[],Ui=0,tr=1,pt=0,De=void 0,la=void 0,Fn=void 0;do De=G0(),Z0[Te]();while(De.type!=="eof");return typeof r=="function"?So({"":Fn},"",r):Fn};function So(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),o=So(n,s,r);o===void 0?delete n[s]:Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=So(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let U,O,vn,kt,j;function G0(){for(U="default",O="",vn=!1,kt=1;;){j=It();const e=Qc[U]();if(e)return e}}function It(){if($o[Ui])return String.fromCodePoint($o.codePointAt(Ui))}function v(){const e=It();return e===`
`?(tr++,pt=0):e?pt+=e.length:pt++,e&&(Ui+=e.length),e}const Qc={default(){switch(j){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":v();return;case"/":v(),U="comment";return;case void 0:return v(),ee("eof")}if(he.isSpaceSeparator(j)){v();return}return Qc[Te]()},comment(){switch(j){case"*":v(),U="multiLineComment";return;case"/":v(),U="singleLineComment";return}throw te(v())},multiLineComment(){switch(j){case"*":v(),U="multiLineCommentAsterisk";return;case void 0:throw te(v())}v()},multiLineCommentAsterisk(){switch(j){case"*":v();return;case"/":v(),U="default";return;case void 0:throw te(v())}v(),U="multiLineComment"},singleLineComment(){switch(j){case`
`:case"\r":case"\u2028":case"\u2029":v(),U="default";return;case void 0:return v(),ee("eof")}v()},value(){switch(j){case"{":case"[":return ee("punctuator",v());case"n":return v(),cr("ull"),ee("null",null);case"t":return v(),cr("rue"),ee("boolean",!0);case"f":return v(),cr("alse"),ee("boolean",!1);case"-":case"+":v()==="-"&&(kt=-1),U="sign";return;case".":O=v(),U="decimalPointLeading";return;case"0":O=v(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=v(),U="decimalInteger";return;case"I":return v(),cr("nfinity"),ee("numeric",1/0);case"N":return v(),cr("aN"),ee("numeric",NaN);case'"':case"'":vn=v()==='"',O="",U="string";return}throw te(v())},identifierNameStartEscape(){if(j!=="u")throw te(v());v();const e=ko();switch(e){case"$":case"_":break;default:if(!he.isIdStartChar(e))throw su();break}O+=e,U="identifierName"},identifierName(){switch(j){case"$":case"_":case"‌":case"‍":O+=v();return;case"\\":v(),U="identifierNameEscape";return}if(he.isIdContinueChar(j)){O+=v();return}return ee("identifier",O)},identifierNameEscape(){if(j!=="u")throw te(v());v();const e=ko();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!he.isIdContinueChar(e))throw su();break}O+=e,U="identifierName"},sign(){switch(j){case".":O=v(),U="decimalPointLeading";return;case"0":O=v(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=v(),U="decimalInteger";return;case"I":return v(),cr("nfinity"),ee("numeric",kt*(1/0));case"N":return v(),cr("aN"),ee("numeric",NaN)}throw te(v())},zero(){switch(j){case".":O+=v(),U="decimalPoint";return;case"e":case"E":O+=v(),U="decimalExponent";return;case"x":case"X":O+=v(),U="hexadecimal";return}return ee("numeric",kt*0)},decimalInteger(){switch(j){case".":O+=v(),U="decimalPoint";return;case"e":case"E":O+=v(),U="decimalExponent";return}if(he.isDigit(j)){O+=v();return}return ee("numeric",kt*Number(O))},decimalPointLeading(){if(he.isDigit(j)){O+=v(),U="decimalFraction";return}throw te(v())},decimalPoint(){switch(j){case"e":case"E":O+=v(),U="decimalExponent";return}if(he.isDigit(j)){O+=v(),U="decimalFraction";return}return ee("numeric",kt*Number(O))},decimalFraction(){switch(j){case"e":case"E":O+=v(),U="decimalExponent";return}if(he.isDigit(j)){O+=v();return}return ee("numeric",kt*Number(O))},decimalExponent(){switch(j){case"+":case"-":O+=v(),U="decimalExponentSign";return}if(he.isDigit(j)){O+=v(),U="decimalExponentInteger";return}throw te(v())},decimalExponentSign(){if(he.isDigit(j)){O+=v(),U="decimalExponentInteger";return}throw te(v())},decimalExponentInteger(){if(he.isDigit(j)){O+=v();return}return ee("numeric",kt*Number(O))},hexadecimal(){if(he.isHexDigit(j)){O+=v(),U="hexadecimalInteger";return}throw te(v())},hexadecimalInteger(){if(he.isHexDigit(j)){O+=v();return}return ee("numeric",kt*Number(O))},string(){switch(j){case"\\":v(),O+=H0();return;case'"':if(vn)return v(),ee("string",O);O+=v();return;case"'":if(!vn)return v(),ee("string",O);O+=v();return;case`
`:case"\r":throw te(v());case"\u2028":case"\u2029":Y0(j);break;case void 0:throw te(v())}O+=v()},start(){switch(j){case"{":case"[":return ee("punctuator",v())}U="value"},beforePropertyName(){switch(j){case"$":case"_":O=v(),U="identifierName";return;case"\\":v(),U="identifierNameStartEscape";return;case"}":return ee("punctuator",v());case'"':case"'":vn=v()==='"',U="string";return}if(he.isIdStartChar(j)){O+=v(),U="identifierName";return}throw te(v())},afterPropertyName(){if(j===":")return ee("punctuator",v());throw te(v())},beforePropertyValue(){U="value"},afterPropertyValue(){switch(j){case",":case"}":return ee("punctuator",v())}throw te(v())},beforeArrayValue(){if(j==="]")return ee("punctuator",v());U="value"},afterArrayValue(){switch(j){case",":case"]":return ee("punctuator",v())}throw te(v())},end(){throw te(v())}};function ee(e,t){return{type:e,value:t,line:tr,column:pt}}function cr(e){for(const t of e){if(It()!==t)throw te(v());v()}}function H0(){switch(It()){case"b":return v(),"\b";case"f":return v(),"\f";case"n":return v(),`
`;case"r":return v(),"\r";case"t":return v(),"	";case"v":return v(),"\v";case"0":if(v(),he.isDigit(It()))throw te(v());return"\0";case"x":return v(),K0();case"u":return v(),ko();case`
`:case"\u2028":case"\u2029":return v(),"";case"\r":return v(),It()===`
`&&v(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw te(v());case void 0:throw te(v())}return v()}function K0(){let e="",t=It();if(!he.isHexDigit(t)||(e+=v(),t=It(),!he.isHexDigit(t)))throw te(v());return e+=v(),String.fromCodePoint(parseInt(e,16))}function ko(){let e="",t=4;for(;t-- >0;){const r=It();if(!he.isHexDigit(r))throw te(v());e+=v()}return String.fromCodePoint(parseInt(e,16))}const Z0={start(){if(De.type==="eof")throw dr();Os()},beforePropertyName(){switch(De.type){case"identifier":case"string":la=De.value,Te="afterPropertyName";return;case"punctuator":ui();return;case"eof":throw dr()}},afterPropertyName(){if(De.type==="eof")throw dr();Te="beforePropertyValue"},beforePropertyValue(){if(De.type==="eof")throw dr();Os()},beforeArrayValue(){if(De.type==="eof")throw dr();if(De.type==="punctuator"&&De.value==="]"){ui();return}Os()},afterPropertyValue(){if(De.type==="eof")throw dr();switch(De.value){case",":Te="beforePropertyName";return;case"}":ui()}},afterArrayValue(){if(De.type==="eof")throw dr();switch(De.value){case",":Te="beforeArrayValue";return;case"]":ui()}},end(){}};function Os(){let e;switch(De.type){case"punctuator":switch(De.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=De.value;break}if(Fn===void 0)Fn=e;else{const t=Mt[Mt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,la,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Mt.push(e),Array.isArray(e)?Te="beforeArrayValue":Te="beforePropertyName";else{const t=Mt[Mt.length-1];t==null?Te="end":Array.isArray(t)?Te="afterArrayValue":Te="afterPropertyValue"}}function ui(){Mt.pop();const e=Mt[Mt.length-1];e==null?Te="end":Array.isArray(e)?Te="afterArrayValue":Te="afterPropertyValue"}function te(e){return Wi(e===void 0?`JSON5: invalid end of input at ${tr}:${pt}`:`JSON5: invalid character '${Xc(e)}' at ${tr}:${pt}`)}function dr(){return Wi(`JSON5: invalid end of input at ${tr}:${pt}`)}function su(){return pt-=5,Wi(`JSON5: invalid identifier character at ${tr}:${pt}`)}function Y0(e){console.warn(`JSON5: '${Xc(e)}' in strings is not valid ECMAScript; consider escaping`)}function Xc(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Wi(e){const t=new SyntaxError(e);return t.lineNumber=tr,t.columnNumber=pt,t}var J0=function(t,r,n){const i=[];let s="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const y of r){let A;typeof y=="string"?A=y:(typeof y=="number"||y instanceof String||y instanceof Number)&&(A=String(y)),A!==void 0&&o.indexOf(A)<0&&o.push(A)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(y,A){let D=A[y];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(y):typeof D.toJSON=="function"&&(D=D.toJSON(y))),a&&(D=a.call(A,y,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return d(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?w(D):m(D)}function d(y){const A={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let k="";for(let R=0;R<y.length;R++){const z=y[R];switch(z){case"'":case'"':A[z]++,k+=z;continue;case"\0":if(he.isDigit(y[R+1])){k+="\\x00";continue}}if(D[z]){k+=D[z];continue}if(z<" "){let ke=z.charCodeAt(0).toString(16);k+="\\x"+("00"+ke).substring(ke.length);continue}k+=z}const N=l||Object.keys(A).reduce((R,z)=>A[R]<A[z]?R:z);return k=k.replace(new RegExp(N,"g"),D[N]),N+k+N}function m(y){if(i.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");i.push(y);let A=s;s=s+u;let D=o||Object.keys(y),k=[];for(const R of D){const z=c(R,y);if(z!==void 0){let ke=p(R)+":";u!==""&&(ke+=" "),ke+=z,k.push(ke)}}let N;if(k.length===0)N="{}";else{let R;if(u==="")R=k.join(","),N="{"+R+"}";else{let z=`,
`+s;R=k.join(z),N=`{
`+s+R+`,
`+A+"}"}}return i.pop(),s=A,N}function p(y){if(y.length===0)return d(y);const A=String.fromCodePoint(y.codePointAt(0));if(!he.isIdStartChar(A))return d(y);for(let D=A.length;D<y.length;D++)if(!he.isIdContinueChar(String.fromCodePoint(y.codePointAt(D))))return d(y);return y}function w(y){if(i.indexOf(y)>=0)throw TypeError("Converting circular structure to JSON5");i.push(y);let A=s;s=s+u;let D=[];for(let N=0;N<y.length;N++){const R=c(String(N),y);D.push(R!==void 0?R:"null")}let k;if(D.length===0)k="[]";else if(u==="")k="["+D.join(",")+"]";else{let N=`,
`+s,R=D.join(N);k=`[
`+s+R+`,
`+A+"]"}return i.pop(),s=A,k}};const Q0={parse:z0,stringify:J0};var X0=Q0;function h(e){try{return X0.stringify(e)}catch{return String(e)}}const em=[".",":",";",",","?","!"],tm=new RegExp(`[${em.join("")}]+$`);function ou(e){return e.replace(tm,"")}function Ne(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function os(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&ou(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:ou(n)).join(": "):""}function Ue(e){return e instanceof Error?e:new Error(Ne(e))}function as(e,t){const r=Ue(e);return r.message=os(t,r.message),r}var au;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})(au||(au={}));var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var T;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(T||(T={}));T.ClientError,T.ServerError;g.Continue+"",T.Information,g.SwitchingProtocols+"",T.Information,g.Processing+"",T.Information,g.EarlyHints+"",T.Information,g.Ok+"",T.Success,g.Created+"",T.Success,g.Accepted+"",T.Success,g.NonAuthoritativeInformation+"",T.Success,g.NoContent+"",T.Success,g.ResetContent+"",T.Success,g.PartialContent+"",T.Success,g.MultiStatus+"",T.Success,g.AlreadyReported+"",T.Success,g.ImUsed+"",T.Success,g.MultipleChoices+"",T.Redirect,g.MovedPermanently+"",T.Redirect,g.Found+"",T.Redirect,g.SeeOther+"",T.Redirect,g.NotModified+"",T.Redirect,g.UseProxy+"",T.Redirect,g.Unused+"",T.Redirect,g.TemporaryRedirect+"",T.Redirect,g.PermanentRedirect+"",T.Redirect,g.BadRequest+"",T.ClientError,g.Unauthorized+"",T.ClientError,g.PaymentRequired+"",T.ClientError,g.Forbidden+"",T.ClientError,g.NotFound+"",T.ClientError,g.MethodNotAllowed+"",T.ClientError,g.NotAcceptable+"",T.ClientError,g.ProxyAuthenticationRequired+"",T.ClientError,g.RequestTimeout+"",T.ClientError,g.Conflict+"",T.ClientError,g.Gone+"",T.ClientError,g.LengthRequired+"",T.ClientError,g.PreconditionFailed+"",T.ClientError,g.PayloadTooLarge+"",T.ClientError,g.UriTooLong+"",T.ClientError,g.UnsupportedMediaType+"",T.ClientError,g.RangeNotSatisfiable+"",T.ClientError,g.ExpectationFailed+"",T.ClientError,g.ImATeapot+"",T.ClientError,g.MisdirectedRequest+"",T.ClientError,g.UnprocessableContent+"",T.ClientError,g.Locked+"",T.ClientError,g.FailedDependency+"",T.ClientError,g.TooEarly+"",T.ClientError,g.UpgradeRequired+"",T.ClientError,g.PreconditionRequired+"",T.ClientError,g.TooManyRequests+"",T.ClientError,g.RequestHeaderFieldsTooLarge+"",T.ClientError,g.UnavailableForLegalReasons+"",T.ClientError,g.InternalServerError+"",T.ServerError,g.NotImplemented+"",T.ServerError,g.BadGateway+"",T.ServerError,g.ServiceUnavailable+"",T.ServerError,g.GatewayTimeout+"",T.ServerError,g.HttpVersionNotSupported+"",T.ServerError,g.VariantAlsoNegotiates+"",T.ServerError,g.InsufficientStorage+"",T.ServerError,g.LoopDetected+"",T.ServerError,g.NotExtended+"",T.ServerError,g.NetworkAuthenticationRequired+"",T.ServerError;const xi={[T.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[T.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[T.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[T.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[T.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function ed({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class td{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(Ue(n))}})}}class $r extends Error{}class rm extends $r{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class nm extends $r{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class im extends $r{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class _r extends $r{}class rd extends $r{constructor(t){super(`Invalid unit ${t}`)}}class Ae extends $r{}class jt extends $r{constructor(){super("Zone is an abstract class")}}const F="numeric",wt="short",Ze="long",ji={year:F,month:F,day:F},nd={year:F,month:wt,day:F},sm={year:F,month:wt,day:F,weekday:wt},id={year:F,month:Ze,day:F},sd={year:F,month:Ze,day:F,weekday:Ze},od={hour:F,minute:F},ad={hour:F,minute:F,second:F},ud={hour:F,minute:F,second:F,timeZoneName:wt},ld={hour:F,minute:F,second:F,timeZoneName:Ze},cd={hour:F,minute:F,hourCycle:"h23"},dd={hour:F,minute:F,second:F,hourCycle:"h23"},fd={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:wt},hd={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:Ze},md={year:F,month:F,day:F,hour:F,minute:F},pd={year:F,month:F,day:F,hour:F,minute:F,second:F},gd={year:F,month:wt,day:F,hour:F,minute:F},wd={year:F,month:wt,day:F,hour:F,minute:F,second:F},om={year:F,month:wt,day:F,weekday:wt,hour:F,minute:F},yd={year:F,month:Ze,day:F,hour:F,minute:F,timeZoneName:wt},bd={year:F,month:Ze,day:F,hour:F,minute:F,second:F,timeZoneName:wt},vd={year:F,month:Ze,day:F,weekday:Ze,hour:F,minute:F,timeZoneName:Ze},Dd={year:F,month:Ze,day:F,weekday:Ze,hour:F,minute:F,second:F,timeZoneName:Ze};class Yn{get type(){throw new jt}get name(){throw new jt}get ianaName(){return this.name}get isUniversal(){throw new jt}offsetName(t,r){throw new jt}formatOffset(t,r){throw new jt}offset(t){throw new jt}equals(t){throw new jt}get isValid(){throw new jt}}let _s=null;class us extends Yn{static get instance(){return _s===null&&(_s=new us),_s}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return xd(t,r,n)}formatOffset(t,r){return Tn(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Mi={};function am(e){return Mi[e]||(Mi[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Mi[e]}const um={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function lm(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,u,l,c]=n;return[o,i,s,a,u,l,c]}function cm(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=um[s];s==="era"?n[a]=o:I(a)||(n[a]=parseInt(o,10))}return n}let li={};class Rt extends Yn{static create(t){return li[t]||(li[t]=new Rt(t)),li[t]}static resetCache(){li={},Mi={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Rt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return xd(t,r,n,this.name)}formatOffset(t,r){return Tn(this.offset(t),r)}offset(t){const r=new Date(t);if(isNaN(r))return NaN;const n=am(this.name);let[i,s,o,a,u,l,c]=n.formatToParts?cm(n,r):lm(n,r);a==="BC"&&(i=-Math.abs(i)+1);const m=cs({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const w=p%1e3;return p-=w>=0?w:1e3+w,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let uu={};function dm(e,t={}){const r=JSON.stringify([e,t]);let n=uu[r];return n||(n=new Intl.ListFormat(e,t),uu[r]=n),n}let Fo={};function To(e,t={}){const r=JSON.stringify([e,t]);let n=Fo[r];return n||(n=new Intl.DateTimeFormat(e,t),Fo[r]=n),n}let xo={};function fm(e,t={}){const r=JSON.stringify([e,t]);let n=xo[r];return n||(n=new Intl.NumberFormat(e,t),xo[r]=n),n}let Mo={};function hm(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=Mo[i];return s||(s=new Intl.RelativeTimeFormat(e,t),Mo[i]=s),s}let Dn=null;function mm(){return Dn||(Dn=new Intl.DateTimeFormat().resolvedOptions().locale,Dn)}let lu={};function pm(e){let t=lu[e];if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,lu[e]=t}return t}function gm(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=To(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=To(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function wm(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function ym(e){const t=[];for(let r=1;r<=12;r++){const n=L.utc(2009,r,1);t.push(e(n))}return t}function bm(e){const t=[];for(let r=1;r<=7;r++){const n=L.utc(2016,11,13+r);t.push(e(n))}return t}function ci(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function vm(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Dm{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=fm(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ma(t,3);return pe(r,this.padTo)}}}class Em{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Rt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=To(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Am{constructor(t,r,n){this.opts={style:"long",...n},!r&&Fd()&&(this.rtf=hm(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Gm(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const Cm={firstDay:1,minimalDays:4,weekend:[6,7]};class Z{static fromOpts(t){return Z.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||ne.defaultLocale,a=o||(s?"en-US":mm()),u=r||ne.defaultNumberingSystem,l=n||ne.defaultOutputCalendar,c=No(i)||ne.defaultWeekSettings;return new Z(a,u,l,c,o)}static resetCache(){Dn=null,Fo={},xo={},Mo={}}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Z.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,u]=gm(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=wm(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=vm(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Z.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,No(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return ci(this,t,Bd,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=ym(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return ci(this,t,Id,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=bm(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return ci(this,void 0,()=>Rd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[L.utc(2016,11,13,9),L.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ci(this,t,Od,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[L.utc(-40,1,1),L.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new Dm(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Em(t,this.intl,r)}relFormatter(t={}){return new Am(this.intl,this.isEnglish(),t)}listFormatter(t={}){return dm(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Td()?pm(this.locale):Cm}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Vs=null;class xe extends Yn{static get utcInstance(){return Vs===null&&(Vs=new xe(0)),Vs}static instance(t){return t===0?xe.utcInstance:new xe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xe(ds(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Tn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Tn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Tn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class $m extends Yn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Zt(e,t){if(I(e)||e===null)return t;if(e instanceof Yn)return e;if(Mm(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?us.instance:r==="utc"||r==="gmt"?xe.utcInstance:xe.parseSpecifier(r)||Rt.create(e)}else return Xt(e)?xe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new $m(e)}const ca={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},cu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Sm=ca.hanidec.replace(/[\[|\]]/g,"").split("");function km(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(ca.hanidec)!==-1)t+=Sm.indexOf(e[r]);else for(const i in cu){const[s,o]=cu[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}let Ir={};function Fm(){Ir={}}function lt({numberingSystem:e},t=""){const r=e||"latn";return Ir[r]||(Ir[r]={}),Ir[r][t]||(Ir[r][t]=new RegExp(`${ca[r]}${t}`)),Ir[r][t]}let du=()=>Date.now(),fu="system",hu=null,mu=null,pu=null,gu=60,wu,yu=null;class ne{static get now(){return du}static set now(t){du=t}static set defaultZone(t){fu=t}static get defaultZone(){return Zt(fu,us.instance)}static get defaultLocale(){return hu}static set defaultLocale(t){hu=t}static get defaultNumberingSystem(){return mu}static set defaultNumberingSystem(t){mu=t}static get defaultOutputCalendar(){return pu}static set defaultOutputCalendar(t){pu=t}static get defaultWeekSettings(){return yu}static set defaultWeekSettings(t){yu=No(t)}static get twoDigitCutoffYear(){return gu}static set twoDigitCutoffYear(t){gu=t%100}static get throwOnInvalid(){return wu}static set throwOnInvalid(t){wu=t}static resetCaches(){Z.resetCache(),Rt.resetCache(),L.resetCache(),Fm()}}class ht{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ed=[0,31,59,90,120,151,181,212,243,273,304,334],Ad=[0,31,60,91,121,152,182,213,244,274,305,335];function nt(e,t){return new ht("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function da(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Cd(e,t,r){return r+(Jn(e)?Ad:Ed)[t-1]}function $d(e,t){const r=Jn(e)?Ad:Ed,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function fa(e,t){return(e-t+7)%7+1}function qi(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=Cd(n,i,s),a=fa(da(n,i,s),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Pn(l,t,r)):u>Pn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...fs(e)}}function bu(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=fa(da(n,1,t),r),a=Ur(n);let u=i*7+s-o-7+t,l;u<1?(l=n-1,u+=Ur(l)):u>a?(l=n+1,u-=Ur(n)):l=n;const{month:c,day:d}=$d(l,u);return{year:l,month:c,day:d,...fs(e)}}function Us(e){const{year:t,month:r,day:n}=e,i=Cd(t,r,n);return{year:t,ordinal:i,...fs(e)}}function vu(e){const{year:t,ordinal:r}=e,{month:n,day:i}=$d(t,r);return{year:t,month:n,day:i,...fs(e)}}function Du(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new _r("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Tm(e,t=4,r=1){const n=ls(e.weekYear),i=it(e.weekNumber,1,Pn(e.weekYear,t,r)),s=it(e.weekday,1,7);return n?i?s?!1:nt("weekday",e.weekday):nt("week",e.weekNumber):nt("weekYear",e.weekYear)}function xm(e){const t=ls(e.year),r=it(e.ordinal,1,Ur(e.year));return t?r?!1:nt("ordinal",e.ordinal):nt("year",e.year)}function Sd(e){const t=ls(e.year),r=it(e.month,1,12),n=it(e.day,1,zi(e.year,e.month));return t?r?n?!1:nt("day",e.day):nt("month",e.month):nt("year",e.year)}function kd(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=it(t,0,23)||t===24&&r===0&&n===0&&i===0,o=it(r,0,59),a=it(n,0,59),u=it(i,0,999);return s?o?a?u?!1:nt("millisecond",i):nt("second",n):nt("minute",r):nt("hour",t)}function I(e){return typeof e>"u"}function Xt(e){return typeof e=="number"}function ls(e){return typeof e=="number"&&e%1===0}function Mm(e){return typeof e=="string"}function Nm(e){return Object.prototype.toString.call(e)==="[object Date]"}function Fd(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Td(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Bm(e){return Array.isArray(e)?e:[e]}function Eu(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Pm(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function Hr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function No(e){if(e==null)return null;if(typeof e!="object")throw new Ae("Week settings must be an object");if(!it(e.firstDay,1,7)||!it(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!it(t,1,7)))throw new Ae("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function it(e,t,r){return ls(e)&&e>=t&&e<=r}function Lm(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Ht(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function fr(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function ha(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ma(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function Jn(e){return e%4===0&&(e%100!==0||e%400===0)}function Ur(e){return Jn(e)?366:365}function zi(e,t){const r=Lm(t-1,12)+1,n=e+(t-r)/12;return r===2?Jn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function cs(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Au(e,t,r){return-fa(da(e,1,t),r)+t-1}function Pn(e,t=4,r=1){const n=Au(e,t,r),i=Au(e+1,t,r);return(Ur(e)-n+i)/7}function Bo(e){return e>99?e:e>ne.twoDigitCutoffYear?1900+e:2e3+e}function xd(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function ds(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Md(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ae(`Invalid unit value ${e}`);return t}function Gi(e,t){const r={};for(const n in e)if(Hr(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Md(i)}return r}function Tn(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${pe(r,2)}:${pe(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${pe(r,2)}${pe(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function fs(e){return Pm(e,["hour","minute","second","millisecond"])}const Im=["January","February","March","April","May","June","July","August","September","October","November","December"],Nd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Rm=["J","F","M","A","M","J","J","A","S","O","N","D"];function Bd(e){switch(e){case"narrow":return[...Rm];case"short":return[...Nd];case"long":return[...Im];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Pd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ld=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Om=["M","T","W","T","F","S","S"];function Id(e){switch(e){case"narrow":return[...Om];case"short":return[...Ld];case"long":return[...Pd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Rd=["AM","PM"],_m=["Before Christ","Anno Domini"],Vm=["BC","AD"],Um=["B","A"];function Od(e){switch(e){case"narrow":return[...Um];case"short":return[...Vm];case"long":return[..._m];default:return null}}function Wm(e){return Rd[e.hour<12?0:1]}function jm(e,t){return Id(t)[e.weekday-1]}function qm(e,t){return Bd(t)[e.month-1]}function zm(e,t){return Od(t)[e.year<0?0:1]}function Gm(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${i[e][0]}`;case-1:return d?"yesterday":`last ${i[e][0]}`;case 0:return d?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function Cu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Hm={D:ji,DD:nd,DDD:id,DDDD:sd,t:od,tt:ad,ttt:ud,tttt:ld,T:cd,TT:dd,TTT:fd,TTTT:hd,f:md,ff:gd,fff:yd,ffff:vd,F:pd,FF:wd,FFF:bd,FFFF:Dd};class $e{static create(t,r={}){return new $e(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return Hm[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return pe(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,w)=>this.loc.extract(t,p,w),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Wm(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,w)=>n?qm(t,p):s(w?{month:p}:{month:p,day:"numeric"},"month"),l=(p,w)=>n?jm(t,p):s(w?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const w=$e.macroTokenToFormatOpts(p);return w?this.formatWithSystemDefault(t,w):p},d=p=>n?zm(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return Cu($e.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},s=$e.parseFormat(r),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return Cu(s,i(a))}}const _d=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function on(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function an(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,u]=s(t,i);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function un(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Vd(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=Ht(t[r+i]);return[n,null,r+i]}}const Ud=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Km=`(?:${Ud.source}?(?:\\[(${_d.source})\\])?)?`,pa=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Wd=RegExp(`${pa.source}${Km}`),ga=RegExp(`(?:T${Wd.source})?`),Zm=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ym=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Jm=/(\d{4})-?(\d{3})/,Qm=Vd("weekYear","weekNumber","weekDay"),Xm=Vd("year","ordinal"),ep=/(\d{4})-(\d\d)-(\d\d)/,jd=RegExp(`${pa.source} ?(?:${Ud.source}|(${_d.source}))?`),tp=RegExp(`(?: ${jd.source})?`);function Wr(e,t,r){const n=e[t];return I(n)?r:Ht(n)}function rp(e,t){return[{year:Wr(e,t),month:Wr(e,t+1,1),day:Wr(e,t+2,1)},null,t+3]}function ln(e,t){return[{hours:Wr(e,t,0),minutes:Wr(e,t+1,0),seconds:Wr(e,t+2,0),milliseconds:ha(e[t+3])},null,t+4]}function Qn(e,t){const r=!e[t]&&!e[t+1],n=ds(e[t+1],e[t+2]),i=r?null:xe.instance(n);return[{},i,t+3]}function Xn(e,t){const r=e[t]?Rt.create(e[t]):null;return[{},r,t+1]}const np=RegExp(`^T?${pa.source}$`),ip=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function sp(e){const[t,r,n,i,s,o,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(p,w=!1)=>p!==void 0&&(w||p&&c)?-p:p;return[{years:m(fr(r)),months:m(fr(n)),weeks:m(fr(i)),days:m(fr(s)),hours:m(fr(o)),minutes:m(fr(a)),seconds:m(fr(u),u==="-0"),milliseconds:m(ha(l),d)}]}const op={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function wa(e,t,r,n,i,s,o){const a={year:t.length===2?Bo(Ht(t)):Ht(t),month:Nd.indexOf(r)+1,day:Ht(n),hour:Ht(i),minute:Ht(s)};return o&&(a.second=Ht(o)),e&&(a.weekday=e.length>3?Pd.indexOf(e)+1:Ld.indexOf(e)+1),a}const ap=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function up(e){const[,t,r,n,i,s,o,a,u,l,c,d]=e,m=wa(t,i,n,r,s,o,a);let p;return u?p=op[u]:l?p=0:p=ds(c,d),[m,new xe(p)]}function lp(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const cp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,dp=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,fp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function $u(e){const[,t,r,n,i,s,o,a]=e;return[wa(t,i,n,r,s,o,a),xe.utcInstance]}function hp(e){const[,t,r,n,i,s,o,a]=e;return[wa(t,a,r,n,i,s,o),xe.utcInstance]}const mp=on(Zm,ga),pp=on(Ym,ga),gp=on(Jm,ga),wp=on(Wd),qd=an(rp,ln,Qn,Xn),yp=an(Qm,ln,Qn,Xn),bp=an(Xm,ln,Qn,Xn),vp=an(ln,Qn,Xn);function Dp(e){return un(e,[mp,qd],[pp,yp],[gp,bp],[wp,vp])}function Ep(e){return un(lp(e),[ap,up])}function Ap(e){return un(e,[cp,$u],[dp,$u],[fp,hp])}function Cp(e){return un(e,[ip,sp])}const $p=an(ln);function Sp(e){return un(e,[np,$p])}const kp=on(ep,tp),Fp=on(jd),Tp=an(ln,Qn,Xn);function xp(e){return un(e,[kp,qd],[Fp,Tp])}const Su="Invalid Duration",zd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Mp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...zd},Xe=146097/400,kr=146097/4800,Np={years:{quarters:4,months:12,weeks:Xe/7,days:Xe,hours:Xe*24,minutes:Xe*24*60,seconds:Xe*24*60*60,milliseconds:Xe*24*60*60*1e3},quarters:{months:3,weeks:Xe/28,days:Xe/4,hours:Xe*24/4,minutes:Xe*24*60/4,seconds:Xe*24*60*60/4,milliseconds:Xe*24*60*60*1e3/4},months:{weeks:kr/7,days:kr,hours:kr*24,minutes:kr*24*60,seconds:kr*24*60*60,milliseconds:kr*24*60*60*1e3},...zd},br=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Bp=br.slice(0).reverse();function qt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new q(n)}function Gd(e,t){let r=t.milliseconds??0;for(const n of Bp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function ku(e,t){const r=Gd(e,t)<0?-1:1;br.reduceRight((n,i)=>{if(I(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),br.reduce((n,i)=>{if(I(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function Pp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class q{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Np:Mp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Z.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return q.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ae(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new q({values:Gi(t,q.normalizeUnit),loc:Z.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Xt(t))return q.fromMillis(t);if(q.isDuration(t))return t;if(typeof t=="object")return q.fromObject(t);throw new Ae(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Cp(t);return n?q.fromObject(n,r):q.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Sp(t);return n?q.fromObject(n,r):q.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Duration is invalid");const n=t instanceof ht?t:new ht(t,r);if(ne.throwOnInvalid)throw new im(n);return new q({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new rd(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?$e.create(this.loc,n).formatDurationFromString(this,t):Su}toHuman(t={}){if(!this.isValid)return Su;const r=br.map(n=>{const i=this.values[n];return I(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ma(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},L.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Gd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t),n={};for(const i of br)(Hr(r.values,i)||Hr(this.values,i))&&(n[i]=r.get(i)+this.get(i));return qt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Md(t(this.values[n],n));return qt(this,{values:r},!0)}get(t){return this[q.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Gi(t,q.normalizeUnit)};return qt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return qt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ku(this.matrix,t),qt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Pp(this.normalize().shiftToAll().toObject());return qt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>q.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of br)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;Xt(i[o])&&(a+=i[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else Xt(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return ku(this.matrix,r),qt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return qt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of br)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Fr="Invalid Interval";function Lp(e,t){return!e||!e.isValid?de.invalid("missing or invalid start"):!t||!t.isValid?de.invalid("missing or invalid end"):t<e?de.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class de{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Interval is invalid");const n=t instanceof ht?t:new ht(t,r);if(ne.throwOnInvalid)throw new nm(n);return new de({invalid:n})}static fromDateTimes(t,r){const n=hn(t),i=hn(r),s=Lp(n,i);return s??new de({start:n,end:i})}static after(t,r){const n=q.fromDurationLike(r),i=hn(t);return de.fromDateTimes(i,i.plus(n))}static before(t,r){const n=q.fromDurationLike(r),i=hn(t);return de.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=L.fromISO(n,r),o=s.isValid}catch{o=!1}let a,u;try{a=L.fromISO(i,r),u=a.isValid}catch{u=!1}if(o&&u)return de.fromDateTimes(s,a);if(o){const l=q.fromISO(i,r);if(l.isValid)return de.after(s,l)}else if(u){const l=q.fromISO(n,r);if(l.isValid)return de.before(a,l)}}return de.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?de.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(hn).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(de.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=q.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(de.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:de.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return de.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(de.fromDateTimes(r,u.time)),r=null);return de.merge(i)}difference(...t){return de.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Fr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=ji,r={}){return this.isValid?$e.create(this.s.loc.clone(r),t).formatInterval(this):Fr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Fr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Fr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Fr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Fr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):q.invalid(this.invalidReason)}mapEndpoints(t){return de.fromDateTimes(t(this.s),t(this.e))}}class di{static hasDST(t=ne.defaultZone){const r=L.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Rt.isValidZone(t)}static normalizeZone(t){return Zt(t,ne.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Z.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Z.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Z.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Z.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Z.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Z.create(r,null,"gregory").eras(t)}static features(){return{relative:Fd(),localeWeek:Td()}}}function Fu(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(q.fromMillis(n).as("days"))}function Ip(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Fu(u,l);return(c-c%7)/7}],["days",Fu]],i={},s=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Rp(e,t,r,n){let[i,s,o,a]=Ip(e,t,r);const u=t-i,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=q.fromObject(s,n);return l.length>0?q.fromMillis(u,n).shiftTo(...l).plus(c):c}const Op="missing Intl.DateTimeFormat.formatToParts support";function H(e,t=r=>r){return{regex:e,deser:([r])=>t(km(r))}}const _p=" ",Hd=`[ ${_p}]`,Kd=new RegExp(Hd,"g");function Vp(e){return e.replace(/\./g,"\\.?").replace(Kd,Hd)}function Tu(e){return e.replace(/\./g,"").replace(Kd," ").toLowerCase()}function ct(e,t){return e===null?null:{regex:RegExp(e.map(Vp).join("|")),deser:([r])=>e.findIndex(n=>Tu(r)===Tu(n))+t}}function xu(e,t){return{regex:e,deser:([,r,n])=>ds(r,n),groups:t}}function fi(e){return{regex:e,deser:([t])=>t}}function Up(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Wp(e,t){const r=lt(t),n=lt(t,"{2}"),i=lt(t,"{3}"),s=lt(t,"{4}"),o=lt(t,"{6}"),a=lt(t,"{1,2}"),u=lt(t,"{1,3}"),l=lt(t,"{1,6}"),c=lt(t,"{1,9}"),d=lt(t,"{2,4}"),m=lt(t,"{4,6}"),p=A=>({regex:RegExp(Up(A.val)),deser:([D])=>D,literal:!0}),y=(A=>{if(e.literal)return p(A);switch(A.val){case"G":return ct(t.eras("short"),0);case"GG":return ct(t.eras("long"),0);case"y":return H(l);case"yy":return H(d,Bo);case"yyyy":return H(s);case"yyyyy":return H(m);case"yyyyyy":return H(o);case"M":return H(a);case"MM":return H(n);case"MMM":return ct(t.months("short",!0),1);case"MMMM":return ct(t.months("long",!0),1);case"L":return H(a);case"LL":return H(n);case"LLL":return ct(t.months("short",!1),1);case"LLLL":return ct(t.months("long",!1),1);case"d":return H(a);case"dd":return H(n);case"o":return H(u);case"ooo":return H(i);case"HH":return H(n);case"H":return H(a);case"hh":return H(n);case"h":return H(a);case"mm":return H(n);case"m":return H(a);case"q":return H(a);case"qq":return H(n);case"s":return H(a);case"ss":return H(n);case"S":return H(u);case"SSS":return H(i);case"u":return fi(c);case"uu":return fi(a);case"uuu":return H(r);case"a":return ct(t.meridiems(),0);case"kkkk":return H(s);case"kk":return H(d,Bo);case"W":return H(a);case"WW":return H(n);case"E":case"c":return H(r);case"EEE":return ct(t.weekdays("short",!1),1);case"EEEE":return ct(t.weekdays("long",!1),1);case"ccc":return ct(t.weekdays("short",!0),1);case"cccc":return ct(t.weekdays("long",!0),1);case"Z":case"ZZ":return xu(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return xu(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return fi(/[a-z_+-/]{1,256}?/i);case" ":return fi(/[^\S\n\r]/);default:return p(A)}})(e)||{invalidReason:Op};return y.token=e,y}const jp={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function qp(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=jp[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function zp(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Gp(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(Hr(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+u))),s+=u}return[n,i]}else return[n,{}]}function Hp(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return I(e.z)||(r=Rt.create(e.z)),I(e.Z)||(r||(r=new xe(e.Z)),n=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=ha(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let Ws=null;function Kp(){return Ws||(Ws=L.fromMillis(1555555555555)),Ws}function Zp(e,t){if(e.literal)return e;const r=$e.macroTokenToFormatOpts(e.val),n=Qd(r,t);return n==null||n.includes(void 0)?e:n}function Zd(e,t){return Array.prototype.concat(...e.map(r=>Zp(r,t)))}class Yd{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Zd($e.parseFormat(r),t),this.units=this.tokens.map(n=>Wp(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=zp(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=Gp(t,this.regex,this.handlers),[i,s,o]=n?Hp(n):[null,null,void 0];if(Hr(n,"a")&&Hr(n,"H"))throw new _r("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Jd(e,t,r){return new Yd(e,r).explainFromTokens(t)}function Yp(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=Jd(e,t,r);return[n,i,s,o]}function Qd(e,t){if(!e)return null;const n=$e.create(t,e).dtFormatter(Kp()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>qp(o,e,s))}const js="Invalid DateTime",Jp=864e13;function En(e){return new ht("unsupported zone",`the zone "${e.name}" is not supported`)}function qs(e){return e.weekData===null&&(e.weekData=qi(e.c)),e.weekData}function zs(e){return e.localWeekData===null&&(e.localWeekData=qi(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function hr(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new L({...r,...t,old:r})}function Xd(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function hi(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Ni(e,t,r){return Xd(cs(e),t,r)}function Mu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,zi(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=q.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=cs(s);let[u,l]=Xd(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Tr(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=L.fromObject(e,{...r,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return L.invalid(new ht("unparsable",`the input "${i}" can't be parsed as ${n}`))}function mi(e,t,r=!0){return e.isValid?$e.create(Z.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Gs(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=pe(e.c.year,r?6:4),t?(n+="-",n+=pe(e.c.month),n+="-",n+=pe(e.c.day)):(n+=pe(e.c.month),n+=pe(e.c.day)),n}function Nu(e,t,r,n,i,s){let o=pe(e.c.hour);return t?(o+=":",o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=pe(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=pe(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=pe(Math.trunc(-e.o/60)),o+=":",o+=pe(Math.trunc(-e.o%60))):(o+="+",o+=pe(Math.trunc(e.o/60)),o+=":",o+=pe(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const ef={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Qp={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Xp={ordinal:1,hour:0,minute:0,second:0,millisecond:0},tf=["year","month","day","hour","minute","second","millisecond"],eg=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],tg=["year","ordinal","hour","minute","second","millisecond"];function rg(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new rd(e);return t}function Bu(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return rg(e)}}function ng(e){return Pi[e]||(Bi===void 0&&(Bi=ne.now()),Pi[e]=e.offset(Bi)),Pi[e]}function Pu(e,t){const r=Zt(t.zone,ne.defaultZone);if(!r.isValid)return L.invalid(En(r));const n=Z.fromObject(t);let i,s;if(I(e.year))i=ne.now();else{for(const u of tf)I(e[u])&&(e[u]=ef[u]);const o=Sd(e)||kd(e);if(o)return L.invalid(o);const a=ng(r);[i,s]=Ni(e,a,r)}return new L({ts:i,zone:r,loc:n,o:s})}function Lu(e,t,r){const n=I(r.round)?!0:r.round,i=(o,a)=>(o=ma(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function Iu(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Bi,Pi={};class L{constructor(t){const r=t.zone||ne.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new ht("invalid input"):null)||(r.isValid?null:En(r));this.ts=I(t.ts)?ne.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=Xt(t.o)&&!t.old?t.o:r.offset(this.ts);i=hi(this.ts,a),n=Number.isNaN(i.year)?new ht("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||Z.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new L({})}static local(){const[t,r]=Iu(arguments),[n,i,s,o,a,u,l]=r;return Pu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Iu(arguments),[n,i,s,o,a,u,l]=r;return t.zone=xe.utcInstance,Pu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Nm(t)?t.valueOf():NaN;if(Number.isNaN(n))return L.invalid("invalid input");const i=Zt(r.zone,ne.defaultZone);return i.isValid?new L({ts:n,zone:i,loc:Z.fromObject(r)}):L.invalid(En(i))}static fromMillis(t,r={}){if(Xt(t))return t<-864e13||t>Jp?L.invalid("Timestamp out of range"):new L({ts:t,zone:Zt(r.zone,ne.defaultZone),loc:Z.fromObject(r)});throw new Ae(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Xt(t))return new L({ts:t*1e3,zone:Zt(r.zone,ne.defaultZone),loc:Z.fromObject(r)});throw new Ae("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Zt(r.zone,ne.defaultZone);if(!n.isValid)return L.invalid(En(n));const i=Z.fromObject(r),s=Gi(t,Bu),{minDaysInFirstWeek:o,startOfWeek:a}=Du(s,i),u=ne.now(),l=I(r.specificOffset)?n.offset(u):r.specificOffset,c=!I(s.ordinal),d=!I(s.year),m=!I(s.month)||!I(s.day),p=d||m,w=s.weekYear||s.weekNumber;if((p||c)&&w)throw new _r("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new _r("Can't mix ordinal dates with month/day");const y=w||s.weekday&&!p;let A,D,k=hi(u,l);y?(A=eg,D=Qp,k=qi(k,o,a)):c?(A=tg,D=Xp,k=Us(k)):(A=tf,D=ef);let N=!1;for(const bt of A){const At=s[bt];I(At)?N?s[bt]=D[bt]:s[bt]=k[bt]:N=!0}const R=y?Tm(s,o,a):c?xm(s):Sd(s),z=R||kd(s);if(z)return L.invalid(z);const ke=y?bu(s,o,a):c?vu(s):s,[ut,Pe]=Ni(ke,l,n),je=new L({ts:ut,zone:n,o:Pe,loc:i});return s.weekday&&p&&t.weekday!==je.weekday?L.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${je.toISO()}`):je.isValid?je:L.invalid(je.invalid)}static fromISO(t,r={}){const[n,i]=Dp(t);return Tr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=Ep(t);return Tr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=Ap(t);return Tr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(I(t)||I(r))throw new Ae("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=Yp(o,t,r);return c?L.invalid(c):Tr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return L.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=xp(t);return Tr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the DateTime is invalid");const n=t instanceof ht?t:new ht(t,r);if(ne.throwOnInvalid)throw new rm(n);return new L({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Qd(t,Z.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Zd($e.parseFormat(t),Z.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Bi=void 0,Pi={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?qs(this).weekYear:NaN}get weekNumber(){return this.isValid?qs(this).weekNumber:NaN}get weekday(){return this.isValid?qs(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?zs(this).weekday:NaN}get localWeekNumber(){return this.isValid?zs(this).weekNumber:NaN}get localWeekYear(){return this.isValid?zs(this).weekYear:NaN}get ordinal(){return this.isValid?Us(this.c).ordinal:NaN}get monthShort(){return this.isValid?di.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?di.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?di.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?di.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=cs(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=hi(u,o),d=hi(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[hr(this,{ts:u}),hr(this,{ts:l})]:[this]}get isInLeapYear(){return Jn(this.year)}get daysInMonth(){return zi(this.year,this.month)}get daysInYear(){return this.isValid?Ur(this.year):NaN}get weeksInWeekYear(){return this.isValid?Pn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Pn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=$e.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(xe.instance(t),r)}toLocal(){return this.setZone(ne.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Zt(t,ne.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=Ni(o,s,t)}return hr(this,{ts:i,zone:t})}else return L.invalid(En(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return hr(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Gi(t,Bu),{minDaysInFirstWeek:n,startOfWeek:i}=Du(r,this.loc),s=!I(r.weekYear)||!I(r.weekNumber)||!I(r.weekday),o=!I(r.ordinal),a=!I(r.year),u=!I(r.month)||!I(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new _r("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new _r("Can't mix ordinal dates with month/day");let d;s?d=bu({...qi(this.c,n,i),...r},n,i):I(r.ordinal)?(d={...this.toObject(),...r},I(r.day)&&(d.day=Math.min(zi(d.year,d.month),d.day))):d=vu({...Us(this.c),...r});const[m,p]=Ni(d,this.o,this.zone);return hr(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t);return hr(this,Mu(this,r))}minus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t).negate();return hr(this,Mu(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=q.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?$e.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):js}toLocaleString(t=ji,r={}){return this.isValid?$e.create(this.loc.clone(r),t).formatDateTime(this):js}toLocaleParts(t={}){return this.isValid?$e.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Gs(this,o);return a+="T",a+=Nu(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Gs(this,t==="extended"):null}toISOWeekDate(){return mi(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Nu(this,o==="extended",r,t,n,s):null}toRFC2822(){return mi(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return mi(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Gs(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),mi(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():js}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return q.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Bm(r).map(q.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Rp(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(L.now(),t,r)}until(t){return this.isValid?de.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||L.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Lu(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Lu(t.base||L.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(L.isDateTime))throw new Ae("min requires all arguments be DateTimes");return Eu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(L.isDateTime))throw new Ae("max requires all arguments be DateTimes");return Eu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Jd(o,t,r)}static fromStringExplain(t,r,n={}){return L.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=Z.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Yd(s,t)}static fromFormatParser(t,r,n={}){if(I(t)||I(r))throw new Ae("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(r.locale))throw new Ae(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?L.invalid(c):Tr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return ji}static get DATE_MED(){return nd}static get DATE_MED_WITH_WEEKDAY(){return sm}static get DATE_FULL(){return id}static get DATE_HUGE(){return sd}static get TIME_SIMPLE(){return od}static get TIME_WITH_SECONDS(){return ad}static get TIME_WITH_SHORT_OFFSET(){return ud}static get TIME_WITH_LONG_OFFSET(){return ld}static get TIME_24_SIMPLE(){return cd}static get TIME_24_WITH_SECONDS(){return dd}static get TIME_24_WITH_SHORT_OFFSET(){return fd}static get TIME_24_WITH_LONG_OFFSET(){return hd}static get DATETIME_SHORT(){return md}static get DATETIME_SHORT_WITH_SECONDS(){return pd}static get DATETIME_MED(){return gd}static get DATETIME_MED_WITH_SECONDS(){return wd}static get DATETIME_MED_WITH_WEEKDAY(){return om}static get DATETIME_FULL(){return yd}static get DATETIME_FULL_WITH_SECONDS(){return bd}static get DATETIME_HUGE(){return vd}static get DATETIME_HUGE_WITH_SECONDS(){return Dd}}function hn(e){if(L.isDateTime(e))return e;if(e&&e.valueOf&&Xt(e.valueOf()))return L.fromJSDate(e);if(e&&typeof e=="object")return L.fromObject(e);throw new Ae(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";const rf=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];B.Milliseconds+"",B.Seconds+"",B.Minutes+"",B.Hours+"",B.Days+"",B.Weeks+"",B.Months+"",B.Quarters+"",B.Years+"";function ig(e){return rf.filter(t=>e[t])}function Po(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function sg(e){return Po(Math.max(e-.4,0),{roundToDigits:0})}function Ru(e){return e===0?0:Math.sign(e)}function Kr(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=q.fromObject(e).as(B.Milliseconds);const u=ig(t).reverse(),l=Ru(a);u.forEach((p,w)=>{const y=w===u.length-1;if(s&&o||s)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===B.Milliseconds)n.milliseconds=Po(a,i);else{const A=q.fromObject({milliseconds:a}).as(p),D=Math.sign(A),k=Math.abs(A),N=y?Po(k,i):Math.floor(i.roundToDigits==null?k:sg(k)),R=N===0?0:N*D;n[p]=R,a-=q.fromObject({[p]:R}).as(B.Milliseconds),l!==Ru(a)&&(a=0)}});let c=!1;const d=[],m=rf.toReversed().filter(p=>n[p]?(c=!0,!0):c?(d.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(y=>p[y]=!0);const w=Kr(e,p,i);return d.forEach(y=>w[y]=0),w}return n}var M;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(M||(M={}));M.Year,M.Hour,M.Minute,M.Second,M.Millisecond;M.Quarter,M.Month,M.Week,M.Day;M.Millisecond,M.Second,M.Minute,M.Hour,M.Day,M.Week,M.Month,M.Quarter,M.Year;var Ce;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Ce||(Ce={}));Ce.Sunday+"",Ce.Monday+"",Ce.Tuesday+"",Ce.Wednesday+"",Ce.Thursday+"",Ce.Friday+"",Ce.Saturday+"";Ce.Sunday,Ce.Monday,Ce.Tuesday,Ce.Wednesday,Ce.Thursday,Ce.Friday,Ce.Saturday;var Re;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Re||(Re={}));Re.January,Re.February,Re.March,Re.April,Re.May,Re.June,Re.July,Re.August,Re.September,Re.October,Re.November,Re.December;const Ou={min:1,max:12},_u={min:1,max:31},Vu={min:0,max:23},Uu={min:0,max:59},Wu={min:0,max:59},ju={min:0,max:999};function Ln(e){const t=new td,r=Kr(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}var og=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Ot;(function(e){e.Node="node",e.Web="web"})(Ot||(Ot={}));function ag(){return og?Ot.Node:Ot.Web}const nf=ag();function ug(e){return nf===e}function sf(e){return e[nf]()}class f extends Error{name="AssertionError";constructor(t,r){super(os(r,t)||"Assertion failed.")}}const qu={interval:{milliseconds:100},timeout:{seconds:10}},Hs=Symbol("not set");async function of(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:o}=lg(t),a=Kr(o.timeout,{milliseconds:!0}).milliseconds,u=Kr(o.interval,{milliseconds:!0});let l=Hs,c;async function d(){try{l=r?n():await n(),e(l,...i)}catch(p){l=Hs,c=Ue(p)}}const m=Date.now();for(;l===Hs;)if(await d(),await Ln(u),Date.now()-m>=a){const w=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw as(c,w)}return l}function $(e,t=!1){return(...r)=>of(e,r,t)}function lg(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:af(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function af(e){return{interval:e?.interval||qu.interval,timeout:e?.timeout||qu.timeout}}const mn={isFalse(e,t){if(e!==!1)throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${h(e)}' is not truthy.`,t)}},uf={assert:mn,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:$(mn.isFalse),isFalsy:$(mn.isFalsy),isTrue:$(mn.isTrue),isTruthy:$(mn.isTruthy)}};function cg(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r)}function dg(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r)}function fg(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r)}function hg(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r)}const pn={endsWith:cg,endsWithout:dg,startsWith:fg,startsWithout:hg},lf={assert:pn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:$(pn.endsWith),endsWithout:$(pn.endsWithout),startsWith:$(pn.startsWith),startsWithout:$(pn.startsWithout)}};function mg(e,t,r){const n=xt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ft(e,t){return xt(t).includes(e)}const Ks={isEnumValue(e,t,r){mg(e,t,r)},isNotEnumValue(e,t,r){const n=xt(t);if(n.includes(e))throw new f(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},cf={assert:Ks,check:{isEnumValue:Ft,isNotEnumValue(e,t){return!xt(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=xt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=xt(t);if(n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(xt(t).includes(e))return e},isNotEnumValue(e,t){if(!xt(t).includes(e))return e}},waitUntil:{isEnumValue:$(Ks.isEnumValue),isNotEnumValue:$(Ks.isNotEnumValue)}},Zs={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new f("Entries are equal.",r)}},df={assert:Zs,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],s=t[n];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],s=t[n];return i!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new f(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new f("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:$(Zs.entriesEqual),notEntriesEqual:$(Zs.notEntriesEqual)}};function Hi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function In(e,t){if(!(e===t||Hi(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Hi(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{In(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${Ne(o)}`)}})}throw new Error("Values are not JSON equal.")}}function An(e,t){if(e===t||Hi(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Hi(r,n)?!1:Object.keys(e).every(s=>An(e[s],t[s]))}return!1}const Ys={jsonEquals(e,t,r){try{In(e,t)}catch(n){throw new f(Ne(n),r)}},notJsonEquals(e,t,r){try{In(e,t)}catch{return}throw new f("Values are JSON equal.",r)}},ff={assert:Ys,check:{jsonEquals(e,t){return An(e,t)},notJsonEquals(e,t){return!An(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return In(e,t),e}catch(n){throw new f(Ne(n),r)}},notJsonEquals(e,t,r){try{In(e,t)}catch{return e}throw new f("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(An(e,t))return e},notJsonEquals(e,t){if(!An(e,t))return e}},waitUntil:{jsonEquals:$(Ys.jsonEquals),notJsonEquals:$(Ys.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function zu(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function hf(){this._key="chai/deep-eql__"+Math.random()+Date.now()}hf.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var mf=typeof WeakMap=="function"?WeakMap:hf;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Gu(e,t,r){if(!r||Zr(e)||Zr(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function pi(e,t,r,n){if(!(!r||Zr(e)||Zr(t))){var i=r.get(e);i?i.set(t,n):(i=new mf,i.set(t,n),r.set(e,i))}}function dt(e,t,r){if(r&&r.comparator)return Hu(e,t,r);var n=pf(e,t);return n!==null?n:Hu(e,t,r)}function pf(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Zr(e)||Zr(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Hu(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new mf;var n=r&&r.comparator,i=Gu(e,t,r.memoize);if(i!==null)return i;var s=Gu(t,e,r.memoize);if(s!==null)return s;if(n){var o=n(e,t);if(o===!1||o===!0)return pi(e,t,r.memoize,o),o;var a=pf(e,t);if(a!==null)return a}var u=zu(e);if(u!==zu(t))return pi(e,t,r.memoize,!1),!1;pi(e,t,r.memoize,!0);var l=pg(e,t,u,r);return pi(e,t,r.memoize,l),l}function pg(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return dt(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return gf(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Dr(e,t,n);case"RegExp":return gg(e,t);case"Generator":return wg(e,t,n);case"DataView":return Dr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Dr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return Ku(e,t,n);case"Map":return Ku(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return bg(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function gg(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ku(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),Dr(n.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Dr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(dt(e[i],t[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function wg(e,t,r){return Dr(Lo(e),Lo(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function yg(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function Zu(e){if(yg(e))try{return Lo(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Lo(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function Yu(e){var t=[];for(var r in e)t.push(r);return t}function Ju(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function gf(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(dt(e[r[s]],t[r[s]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function bg(e,t,r){var n=Yu(e),i=Yu(t),s=Ju(e),o=Ju(t);if(n=n.concat(s),i=i.concat(o),n.length&&n.length===i.length)return Dr(Qu(n).sort(),Qu(i).sort())===!1?!1:gf(e,t,n,r);var a=Zu(e),u=Zu(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Dr(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function Zr(e){return e===null||typeof e!="object"}function Qu(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}const Gt={strictEquals(e,t,r){if(e!==t)throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!dt(e,t))throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(dt(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r)}},wf=Gt.deepEquals,yf={assert:Gt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return dt(e,t)},notDeepEquals(e,t){return!dt(e,t)}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(dt(e,t))return e;throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(dt(e,t))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(dt(e,t))return e},notDeepEquals(e,t){if(!dt(e,t))return e}},waitUntil:{strictEquals:$(Gt.strictEquals),notStrictEquals:$(Gt.notStrictEquals),looseEquals:$(Gt.looseEquals),notLooseEquals:$(Gt.notLooseEquals),deepEquals:$(Gt.deepEquals),notDeepEquals:$(Gt.notDeepEquals)}};function ze(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function et(e,t){return typeof t=="string"?t.includes(e):ze(t,e)}const $t={hasValue(e,t,r){if(!ze(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(ze(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!et(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(et(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is not empty.`,t)}}},bf={assert:$t,check:{hasValue(e,t){return ze(e,t)},lacksValue(e,t){return!ze(e,t)},hasValues(e,t){return t.every(r=>ze(e,r))},lacksValues(e,t){return t.every(r=>!ze(e,r))},isIn(e,t){return et(e,t)},isNotIn(e,t){return!et(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!ze(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(ze(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!et(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(et(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(ze(e,t))return e},lacksValue(e,t){if(!ze(e,t))return e},hasValues(e,t){if(t.every(r=>ze(e,r)))return e},lacksValues(e,t){if(!t.every(r=>ze(e,r)))return e},isIn(e,t){if(et(e,t))return e},isNotIn(e,t){if(!et(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:$($t.hasValue),lacksValue:$($t.lacksValue),hasValues:$($t.hasValues),lacksValues:$($t.lacksValues),isIn:$($t.isIn),isNotIn:$($t.isNotIn),isEmpty:$($t.isEmpty),isNotEmpty:$($t.isNotEmpty)}},Js={isHttpStatus(e,t){if(!Ft(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ft(e,g)){if(!et(e,xi[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r)}},vf={assert:Js,check:{isHttpStatus(e){return Ft(e,g)},isHttpStatusCategory(e,t){return Ft(e,g)&&et(e,xi[t])}},assertWrap:{isHttpStatus(e,t){if(!Ft(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ft(e,g)){if(!et(e,xi[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ft(e,g))return e},isHttpStatusCategory(e,t){if(Ft(e,g)&&et(e,xi[t]))return e}},waitUntil:{isHttpStatus:$(Js.isHttpStatus),isHttpStatusCategory:$(Js.isHttpStatusCategory)}},Qs={instanceOf(e,t,r){if(!(e instanceof t))throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r)}},Df={assert:Qs,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:$(Qs.instanceOf),notInstanceOf:$(Qs.notInstanceOf)}},vg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function re(e,t){return vg.some(r=>{try{return r(e,t)}catch{return!1}})}const mr={isKeyOf(e,t,r){if(!re(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(re(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!re(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(re(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!re(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>re(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},Ef={assert:mr,check:{isKeyOf(e,t){return re(t,e)},isNotKeyOf(e,t){return!re(t,e)},hasKey:re,lacksKey(e,t){return!re(e,t)},hasKeys(e,t){return t.every(r=>re(e,r))},lacksKeys(e,t){return t.every(r=>!re(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!re(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(re(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!re(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(re(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!re(e,i));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>re(e,i));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(re(t,e))return e},isNotKeyOf(e,t){if(!re(t,e))return e},hasKey(e,t){if(re(e,t))return e},lacksKey(e,t){if(!re(e,t))return e},hasKeys(e,t){if(t.every(r=>re(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!re(e,r)))return e}},waitUntil:{isKeyOf:$(mr.isKeyOf),isNotKeyOf:$(mr.isNotKeyOf),hasKey:$(mr.hasKey),lacksKey:$(mr.lacksKey),hasKeys:$(mr.hasKeys),lacksKeys:$(mr.lacksKeys)}};function Dg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r)}function Eg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r)}const Xs={isLengthAtLeast:Dg,isLengthExactly:Eg},Af={assert:Xs,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t)return e}},waitUntil:{isLengthAtLeast:$(Xs.isLengthAtLeast),isLengthExactly:$(Xs.isLengthExactly)}},eo={isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${h(e)}' is not a nullish.`,t)}},Cf={assert:eo,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:$(eo.isDefined),isNullish:$(eo.isNullish)}},Le={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n)}},$f={assert:Le,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:$(Le.isInBounds),isOutBounds:$(Le.isOutBounds),isInteger:$(Le.isInteger),isNotInteger:$(Le.isNotInteger),isAbove:$(Le.isAbove),isAtLeast:$(Le.isAtLeast),isBelow:$(Le.isBelow),isAtMost:$(Le.isAtMost),isNaN:$(Le.isNaN),isFinite:$(Le.isFinite),isInfinite:$(Le.isInfinite),isApproximately:$(Le.isApproximately),isNotApproximately:$(Le.isNotApproximately)}};function Ag(e,t,r,n,i){return ei(...hs(e,t,r,n,i),!1)}function hs(e,t,r,n,i){const s=Array.isArray(r);return[s?e:wf,s?t:e,s?r:t,s?n:r,s?i:n]}function ei(e,t,r,n,i,s){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),s?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Ne(l)}`,i))}});try{return e(o,n),s?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Ne(a)}`,i)}}function Cg(e,t,r,n,i){try{const s=ei(...hs(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function $g(e,t,r,n,i){return ei(...hs(e,t,r,n,i),!0)}function Sg(e,t,r,n,i){try{const s=ei(...hs(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const to=Symbol("not set");async function kg(e,t,r,n,i,s){const o=Array.isArray(r),a=o?e:wf,u=o?t:e,l=o?r:t,c=o?n:r,d=af(o?i:n),m=o?s:i,p=Kr(d.timeout,{milliseconds:!0}).milliseconds,w=Kr(d.interval,{milliseconds:!0});let y=to,A;async function D(){try{y=await ei(a,u,l,c,void 0,!0)}catch(N){y=to,A=Ue(N)}}const k=Date.now();for(;y===to;)if(await D(),await Ln(w),Date.now()-k>=p)throw as(A,os(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return y}const Fg={output:Ag},Sf={assert:Fg,check:{output:Cg},assertWrap:{output:$g},checkWrap:{output:Sg},waitUntil:{output:kg}},gn={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t)}},kf={assert:gn,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:$(gn.isNotPrimitive),isNotPropertyKey:$(gn.isNotPropertyKey),isPrimitive:$(gn.isPrimitive),isPropertyKey:$(gn.isPropertyKey)}},wn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t)}},Ff={assert:wn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:$(wn.isPromiseLike,!0),isNotPromiseLike:$(wn.isNotPromiseLike,!0),isPromise:$(wn.isPromise,!0),isNotPromise:$(wn.isNotPromise,!0)}},ro={matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r)}},Tf={assert:ro,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:$(ro.matches,!0),mismatches:$(ro.mismatches,!0)}},fe={isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t)}},xf={assert:fe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:$(fe.isArray),isBigInt:$(fe.isBigInt),isBoolean:$(fe.isBoolean),isFunction:$(fe.isFunction),isNull:$(fe.isNull),isNumber:$(fe.isNumber),isObject:$(fe.isObject),isString:$(fe.isString),isSymbol:$(fe.isSymbol),isUndefined:$(fe.isUndefined),isNotArray:$(fe.isNotArray),isNotBigInt:$(fe.isNotBigInt),isNotBoolean:$(fe.isNotBoolean),isNotFunction:$(fe.isNotFunction),isNotNull:$(fe.isNotNull),isNotNumber:$(fe.isNotNumber),isNotObject:$(fe.isNotObject),isNotString:$(fe.isNotString),isNotSymbol:$(fe.isNotSymbol),isNotUndefined:$(fe.isNotUndefined)}};var _e;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(_e||(_e={}));function ya(e,t,r){ba(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function Xu(e,t,r){ba(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function ba(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new f(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=Ne(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new f(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new f(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new f(t.notInstance,n);else throw new f(t.noError,n)}function el(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Ne(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function ms(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Ue(u)}try{Xu(i,r,n),e===_e.Assert?o():e===_e.Check?o(!0):o(i)}catch(u){e===_e.CheckWrap?o(void 0):e===_e.Check?o(!1):a(Ue(u))}})}catch(s){i=Ue(s)}try{return Xu(i,r,n),e===_e.Check?!0:e!==_e.Assert?i:void 0}catch(s){if(e===_e.CheckWrap)return;if(e===_e.Check)return!1;throw s}}function Tg(e,t,r){return ms(_e.Assert,e,t,r)}function xg(e,t){return ms(_e.Check,e,t)}function Mg(e,t,r){return ms(_e.AssertWrap,e,t,r)}function Ng(e,t,r){return ms(_e.CheckWrap,e,t,r)}const Bg=$(ya);function Pg(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${h(s)}'`);return Bg(i,async()=>{try{await s();return}catch(u){return Ue(u)}},a,o)}const Lg={throws:Tg,isError:ya},Mf={assert:Lg,check:{throws:xg,isError(e,t){return el(e,t)}},assertWrap:{throws:Mg,isError(e,t,r){return ba(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Ng,isError(e,t){if(el(e,t))return e}},waitUntil:{throws:Pg,isError:$(ya)}},Kt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,no={isUuid(e,t){if(!String(e).match(Kt))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Kt))throw new f(`'${String(e)}' is a UUID.`,t)}},Nf={assert:no,check:{isUuid(e){return!!String(e).match(Kt)},isNotUuid(e){return!String(e).match(Kt)}},assertWrap:{isUuid(e,t){if(!String(e).match(Kt))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Kt))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Kt))return e},isNotUuid(e){if(!String(e).match(Kt))return e}},waitUntil:{isUuid:$(no.isUuid),isNotUuid:$(no.isNotUuid)}},Ig={...uf.assert,...lf.assert,...df.assert,...cf.assert,...Df.assert,...ff.assert,...Ef.assert,...Af.assert,...Cf.assert,...$f.assert,...kf.assert,...Ff.assert,...Tf.assert,...xf.assert,...yf.assert,...Mf.assert,...Nf.assert,...bf.assert,...vf.assert,...Sf.assert},ps=[uf,lf,df,cf,Df,ff,Ef,Af,Cf,$f,kf,Ff,Tf,xf,yf,Mf,Nf,bf,vf,Sf],Rg=Object.assign({},...ps.map(e=>e.check)),E=Object.assign(function(t){return!!t},Rg);function Og(e,t,r){return Li(e,t,r,new Set)}function Li(e,t,r,n){if(e=tl(e),t=tl(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Li(J(e).sort(),J(t).sort(),r,n))return!1;let i=!1;const s=J(e).map(o=>{const a=Li(e[o],t[o],r,n);return E.isPromise(a)&&(i=!0),a});return rl(i,s)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Li(o,t[a],r,n);return E.isPromise(u)&&(i=!0),u});return rl(i,s)}else return r(e,t)}function tl(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function rl(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(E.isTrue))}catch(i){n(Ue(i))}}):t.every(E.isTrue)}const _g=Object.assign({},...ps.map(e=>e.assertWrap)),Vg=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r);return t},_g);function Ug(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Wg={tsType:Ug},jg={assert:Wg},qg={fail:e=>{throw new f("Failure triggered.",e)}},zg={...jg.assert,...Ig,...qg},Sr=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r)},zg),Gg=Object.assign({},...ps.map(e=>e.checkWrap)),Hg=Object.assign(function(t){if(t)return t},Gg),Kg=Object.assign({},...ps.map(e=>e.waitUntil));Object.assign(function(t,r){return of((n,i)=>{if(!n)throw new f("Assertion failed.",i)},[t,r],!1)},Kg);function Zg(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function xr(e,t){return e.controlType===t}var G=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(G||{});const Bf=Symbol("any-type"),Yg={checkbox:!1,color:"",dropdown:"",hidden:Bf,number:0,text:""};function Jg(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=Yg[i.controlType];s!==Bf&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Qg(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return E.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(n,a),s(a)}catch(a){o(Ue(a))}}):(e.set(n,i),i)}}function va(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(Ue(o))}}):(e[t]=n,n)}}function Da(e){return J(e).map(t=>[t,e[t]])}function Io(e){return Object.fromEntries(e)}function gs(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Xg(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}function ew({min:e,max:t}){const{min:r,max:n}=ed({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return r+l%i}const nl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Pf(e=16){let t="";for(let r=0;r<e;r++){const n=ew({min:0,max:nl.length-1});t+=nl[n]}return t}function Lf(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Ne(t).trim()).join(`
`))}var il;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(il||(il={}));function If(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const tw="modulepreload",rw=function(e){return"/element-vir/vira/"+e},sl={},Rf=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(r.map(u=>{if(u=rw(u),u in sl)return;sl[u]=!0;const l=u.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":tw,l||(d.as="script"),d.crossOrigin="",d.href=u,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((m,p)=>{d.addEventListener("load",m),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var be;(function(e){e.Standard="stdout",e.Error="stderr"})(be||(be={}));var W;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(W||(W={}));async function nw(){return await sf({async[Ot.Node](){const e=(await Rf(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[W.Bold]:e.bold.open,[W.Debug]:e.blueBright.open,[W.Error]:e.red.open,[W.Faint]:e.gray.open,[W.Info]:e.cyan.open,[W.Mutate]:e.magenta.open,[W.NormalWeight]:"\x1B[22m",[W.Plain]:"",[W.Reset]:e.reset.open,[W.Success]:e.green.open,[W.Warning]:e.yellow.open}},[Ot.Web](){return Promise.resolve({[W.Bold]:"font-weight: bold",[W.Debug]:"color: blue",[W.Error]:"color: red",[W.Faint]:"color: grey",[W.Info]:"color: teal",[W.Mutate]:"color: magenta",[W.NormalWeight]:"",[W.Plain]:"",[W.Reset]:"",[W.Success]:"color: green",[W.Warning]:"color: orange"})}})}const qe=await nw(),iw={[W.Bold]:{colors:[qe.bold],logType:be.Standard},[W.Debug]:{colors:[qe.debug],logType:be.Standard},[W.Faint]:{colors:[qe.faint],logType:be.Standard},[W.Info]:{colors:[qe.info],logType:be.Standard},[W.Mutate]:{colors:[qe.mutate,qe.bold],logType:be.Standard},[W.NormalWeight]:{colors:[qe.normalWeight],logType:be.Standard},[W.Plain]:{colors:[],logType:be.Standard},[W.Reset]:{colors:[qe.reset],logType:be.Standard},[W.Success]:{colors:[qe.success,qe.bold],logType:be.Standard},[W.Error]:{colors:[qe.error,qe.bold],logType:be.Error},[W.Warning]:{colors:[qe.warning],logType:be.Error}};function sw(e){return e.replace(/,/g,"")}function ow(e){return typeof e=="number"?e:Number(typeof e=="string"?sw(e):e)}function ol(e){const t=aw(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function aw(e){const t=ow(e);if(!isNaN(t))return t}const uw="px";function Of(e){return lw({value:e,suffix:uw})}function lw({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function cw({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function dw(){return await sf({async[Ot.Node](){const{inspect:e}=await Rf(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[W.Reset].colors.join("")].join(""),css:void 0}}},[Ot.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:gs(r.colorConfig[t].colors,o=>cw({value:o,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:o instanceof Error?Ne(o):h(o)).join(`
`),r.omitColors?"":r.colorConfig[W.Reset].colors.join("")].join(""),css:n}}}})}const fw=await dw();function Ye({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function jr({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function hw(e,t){try{let r=!1;const n=Da(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(E.isTruthy);return r?new Promise(async(i,s)=>{try{const o=gs(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);i(Io(o))}catch(o){s(Ue(o))}}):Io(n)}catch(r){throw Ue(r)}}function mw(e,t){return hw(e,(r,n)=>{const i=n,s=t(n,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function _f(e,...t){const r={...e};return t.forEach(n=>{n&&Da(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}const pw={colorConfig:iw,omitColors:!1},gw=Vf({[be.Error](){},[be.Standard](){}});function Vf(e,t){const r=_f(pw,t);function n(s){e[r.colorConfig[s.colorKey].logType](fw({...s,options:r}))}const i=mw(W,s=>(...o)=>n({args:o,colorKey:s}));return{...i,if(s){return s?i:gw}}}const ww=ug(Ot.Node)?{[be.Error]({text:e}){process.stderr.write(e+`
`)},[be.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[be.Error]({text:e,css:t}){console.error(Ye({value:e,prefix:"%c"}),t)},[be.Standard]({text:e,css:t}){console.log(Ye({value:e,prefix:"%c"}),t)}};Vf(ww);function Uf(...e){const t=e.join(""),r=Xg(Array.from(t));return Array.from(r).join("")}function yw(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Wf(e,t){const r=Uf([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return bw(e,r)}function bw(e,t){const r=Uf(t);return typeof e=="string"?new RegExp(yw(e),r):new RegExp(e.source,r)}function jf(e,{caseSensitive:t}){return Wf(e,"")}function vw({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Wf(jf(t,{caseSensitive:r}),"g"),s=[];return e.replace(i,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),s}function Dw(e,t,{caseSensitive:r}){const n=vw({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=jf(t,{caseSensitive:r});return e.split(i).reduce((o,a,u)=>{const l=n[u],c=o.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function Ew(e,t){return e.split(t)}function io(e,t){const{min:r,max:n}=ed(t);return e>n?r:e<r?n:e}function Be(e,t){let r=!1;const n=J(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),i[s]=o,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(J(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(Ue(o))}}):n}function ws(e,t){const r=Da(e).filter(([n,i])=>t(n,i,e));return Io(r)}function Aw(e,t){return ws(e,r=>!t.includes(r))}function Cw(e,t){return ws(e,r=>t.includes(r))}function Ro(e){return J(e).map(t=>e[t])}function $w(e,t){return t.capitalizeFirstLetter?Sw(e):e}function Sw(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const kw={capitalizeFirstLetter:!1};var Yr;(function(e){e.Upper="upper",e.Lower="lower"})(Yr||(Yr={}));function Fw(e){return e.toLowerCase()!==e.toUpperCase()}function al(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(Fw(n)){if(t===Yr.Upper&&n!==n.toUpperCase()||t===Yr.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function Tw(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return $w(n,_f(kw,t))}function xw(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=al(o,Yr.Lower,{rejectNoCaseCharacters:!0})||al(a,Yr.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Mw(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function Nw(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function cn(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function qf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class Bw{listeners={};getListenerCount(){return Ro(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=E.isString(t)?t:t.type;function o(){return i[s]?.delete(r)||!1}function a(u,l){n.once&&o(),r(u,l)}return va(i,s,()=>new Map).set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=E.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=Ro(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class Ea extends Bw{}function zf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function ul(e,t,r){return zf(globalThis,e,t,r)}function Aa(e,t){return Ki(e.title),e.parent?[...Aa(e.parent),Ki(e.parent.title)].concat([]):[]}function Ki(e){return Nw(e).toLowerCase().replaceAll(/\s/g,"-")}function Pw({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const Lw={[Se.ElementExample]:()=>[],[Se.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Jg(e.controls,e.title)].filter(E.isTruthy),[Se.Root]:()=>[]},Zi="_isBookTreeNode",Gf=new Map;function Iw(e){return Gf.get(e)}function Rw(e,t){Qg(Gf,e,()=>t)}function qr(e,t){return!!(Hf(e)&&e.entry.entryType===t)}function Hf(e){return!!(E.hasKeys(e,[Zi,"entry"])&&e[Zi])}function Ow(){return{[Zi]:!0,entry:{entryType:Se.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function _w({entries:e,debug:t}){const r=Iw(e);if(r)return r;const n=Ow();e.forEach(o=>Ca({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const i=Kf(n),s={tree:n,flattenedNodes:i};return Rw(e,s),t&&console.info("element-book tree:",n),s}function Vw(e,t,r){if(!t.parent)return e;const n=Oo(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ca({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Oo(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${Aa(t).join(" > ")}`);return i}function Ca({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=Lw[t.entryType](t);t.errors.push(...i);const s=Vw(e,t,r),o=Ki(t.title),a=s.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Zi]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};s.children[o]=u,Zg(t,Se.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Ca({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Oo(e,t){const r=Hf(e)?e.fullUrlBreadcrumbs.slice(0,-1):Aa(e);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function Kf(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Kf(i));return[e,...r].flat()}function $a(e,t){return Sa(e,["",...t],void 0)}function Sa(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],o=s&&Sa(s,n,r);return{...e.controls,...o}}function Uw(e,t,r){const n={...e};return Sa(n,["",...t],r),n}function Zf(e,t){const r=t?.controls||(qr(e,Se.Page)?Be(e.entry.controls,(i,s)=>s.initValue):{});return{children:Be(e.children,(i,s)=>Zf(s,t?.children?.[s.urlBreadcrumb])),controls:r}}function st(e){const t={...e,entryType:Se.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,entryType:Se.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[Ki(i.title)]=i}}),t}var ft=(e=>(e.Search="search",e.Book="book",e))(ft||{});function _o(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Jr={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=globalThis,ka=Ii.ShadowRoot&&(Ii.ShadyCSS===void 0||Ii.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fa=Symbol(),ll=new WeakMap;let Yf=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Fa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ka&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=ll.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ll.set(r,t))}return t}toString(){return this.cssText}};const me=e=>new Yf(typeof e=="string"?e:e+"",void 0,Fa),Ri=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Yf(r,e,Fa)},Ww=(e,t)=>{if(ka)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Ii.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},cl=ka?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return me(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jw,defineProperty:qw,getOwnPropertyDescriptor:zw,getOwnPropertyNames:Gw,getOwnPropertySymbols:Hw,getPrototypeOf:Kw}=Object,ys=globalThis,dl=ys.trustedTypes,Zw=dl?dl.emptyScript:"",Yw=ys.reactiveElementPolyfillSupport,xn=(e,t)=>e,Yi={toAttribute(e,t){switch(t){case Boolean:e=e?Zw:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ta=(e,t)=>!jw(e,t),fl={attribute:!0,type:String,converter:Yi,reflect:!1,hasChanged:Ta};Symbol.metadata??=Symbol("metadata"),ys.litPropertyMetadata??=new WeakMap;let Rr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=fl){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&qw(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=zw(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fl}static _$Ei(){if(this.hasOwnProperty(xn("elementProperties")))return;const t=Kw(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xn("properties"))){const r=this.properties,n=[...Gw(r),...Hw(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(cl(i))}else t!==void 0&&r.push(cl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ww(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Yi).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Yi;this._$Em=i,this[i]=o.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??Ta)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(t){}firstUpdated(t){}};Rr.elementStyles=[],Rr.shadowRootOptions={mode:"open"},Rr[xn("elementProperties")]=new Map,Rr[xn("finalized")]=new Map,Yw?.({ReactiveElement:Rr}),(ys.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa=globalThis,Ji=xa.trustedTypes,hl=Ji?Ji.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jf="$lit$",Yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Qf="?"+Yt,Jw=`<${Qf}>`,Ar=document,Rn=()=>Ar.createComment(""),On=e=>e===null||typeof e!="object"&&typeof e!="function",Ma=Array.isArray,Qw=e=>Ma(e)||typeof e?.[Symbol.iterator]=="function",so=`[ 	
\f\r]`,yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ml=/-->/g,pl=/>/g,pr=RegExp(`>|${so}(?:([^\\s"'>=/]+)(${so}*=${so}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gl=/'/g,wl=/"/g,Xf=/^(?:script|style|textarea|title)$/i,Xw=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),e1=Xw(1),Je=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),yl=new WeakMap,vr=Ar.createTreeWalker(Ar,129);function eh(e,t){if(!Ma(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return hl!==void 0?hl.createHTML(t):t}const t1=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=yn;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===yn?c[1]==="!--"?o=ml:c[1]!==void 0?o=pl:c[2]!==void 0?(Xf.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=pr):c[3]!==void 0&&(o=pr):o===pr?c[0]===">"?(o=i??yn,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?pr:c[3]==='"'?wl:gl):o===wl||o===gl?o=pr:o===ml||o===pl?o=yn:(o=pr,i=void 0);const p=o===pr&&e[a+1].startsWith("/>")?" ":"";s+=o===yn?u+Jw:d>=0?(n.push(l),u.slice(0,d)+Jf+u.slice(d)+Yt+p):u+Yt+(d===-2?a:p)}return[eh(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class _n{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=t1(t,r);if(this.el=_n.createElement(l,n),vr.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=vr.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Jf)){const m=c[o++],p=i.getAttribute(d).split(Yt),w=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:w[2],strings:p,ctor:w[1]==="."?n1:w[1]==="?"?i1:w[1]==="@"?s1:bs}),i.removeAttribute(d)}else d.startsWith(Yt)&&(u.push({type:6,index:s}),i.removeAttribute(d));if(Xf.test(i.tagName)){const d=i.textContent.split(Yt),m=d.length-1;if(m>0){i.textContent=Ji?Ji.emptyScript:"";for(let p=0;p<m;p++)i.append(d[p],Rn()),vr.nextNode(),u.push({type:2,index:++s});i.append(d[m],Rn())}}}else if(i.nodeType===8)if(i.data===Qf)u.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Yt,d+1))!==-1;)u.push({type:7,index:s}),d+=Yt.length-1}s++}}static createElement(t,r){const n=Ar.createElement("template");return n.innerHTML=t,n}}function Qr(e,t,r=e,n){if(t===Je)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=On(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=Qr(e,i._$AS(e,t.values),i,n)),t}let r1=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Ar).importNode(r,!0);vr.currentNode=i;let s=vr.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new dn(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new o1(s,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=vr.nextNode(),o++)}return vr.currentNode=Ar,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class dn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Qr(this,t,r),On(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==Je&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qw(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&On(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ar.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_n.createElement(eh(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new r1(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=yl.get(t.strings);return r===void 0&&yl.set(t.strings,r=new _n(t)),r}k(t){Ma(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new dn(this.O(Rn()),this.O(Rn()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class bs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=se}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=Qr(this,t,r,0),o=!On(t)||t!==this._$AH&&t!==Je,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Qr(this,a[n+u],r,u),l===Je&&(l=this._$AH[u]),o||=!On(l)||l!==this._$AH[u],l===se?t=se:t!==se&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class n1 extends bs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class i1 extends bs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class s1 extends bs{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=Qr(this,t,r,0)??se)===Je)return;const n=this._$AH,i=t===se&&n!==se||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==se&&(n===se||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class o1{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Qr(this,t)}}const a1={I:dn},u1=xa.litHtmlPolyfillSupport;u1?.(_n,dn),(xa.litHtmlVersions??=[]).push("3.2.1");const l1=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new dn(t.insertBefore(Rn(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mn=class extends Rr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=l1(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};Mn._$litElement$=!0,Mn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Mn});const c1=globalThis.litElementPolyfillSupport;c1?.({LitElement:Mn});(globalThis.litElementVersions??=[]).push("4.1.1");function ar(e){if(E.isObject(e))return Be(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(xw(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?me(r):r.startsWith("-")?Ri`-${me(r)}`:Ri`--${me(r)}`;return{name:o,value:Ri`var(${o}, ${me(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${ar.name}' function.`)}function d1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const K=ar({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),f1={nav:{hover:{background:K["element-book-nav-hover-background-color"],foreground:K["element-book-nav-hover-foreground-color"]},active:{background:K["element-book-nav-active-background-color"],foreground:K["element-book-nav-active-foreground-color"]},selected:{background:K["element-book-nav-selected-background-color"],foreground:K["element-book-nav-selected-foreground-color"]}},accent:{icon:K["element-book-accent-icon-color"]},page:{background:K["element-book-page-background-color"],backgroundFaint1:K["element-book-page-background-faint-level-1-color"],backgroundFaint2:K["element-book-page-background-faint-level-2-color"],foreground:K["element-book-page-foreground-color"],foregroundFaint1:K["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:K["element-book-page-foreground-faint-level-2-color"]}};function h1(e,t){th(e,t,f1)}function Vo(e){return E.hasKey(e,"_$cssResult$")}function bl(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&Vo(e.name)&&Vo(e.value)}function th(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Vo(i)){if(!bl(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);d1({forCssVar:s,onElement:e,toValue:String(i)})}else{if(bl(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);th(e,i,s)}})}function oe(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(s=s[0]),n===1?s.map(o=>o[0]):s}function ti(e){return er(e)==="string"}function er(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Qi(e,{precision:t,unit:r}){return rr(e)?"none":rh(e,t)+(r??"")}function rr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ge(e){return rr(e)?0:e}function rh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const m1={deg:1,grad:.9,rad:180/Math.PI,turn:360};function nh(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let d=l[0],m=c.slice(0,-d.length);d==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*m1[d]),c.type="<angle>",c.unit=d)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),o.push(c)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function ih(e){return e[e.length-1]}function Vn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function sh(e,t,r){return(r-e)/(t-e)}function Na(e,t,r){return Vn(t[0],t[1],sh(e[0],e[1],r))}function oh(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function ah(e,t,r){return Math.max(Math.min(r,t),e)}function vs(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function vt(e,t){return vs(Math.abs(e)**t,e)}function Ba(e,t){return t===0?0:e/t}function uh(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var p1=Object.freeze({__proto__:null,bisectLeft:uh,clamp:ah,copySign:vs,interpolate:Vn,interpolateInv:sh,isNone:rr,isString:ti,last:ih,mapRange:Na,multiplyMatrices:oe,parseCoordGrammar:oh,parseFunction:nh,serializeNumber:Qi,skipNone:ge,spow:vt,toPrecision:rh,type:er,zdiv:Ba});class g1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const nr=new g1;var Qe={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Me={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Uo(e){return Array.isArray(e)?e:Me[e]}function Xi(e,t,r,n={}){if(e=Uo(e),t=Uo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(nr.run("chromatic-adaptation-start",i),i.M||(i.W1===Me.D65&&i.W2===Me.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Me.D50&&i.W2===Me.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),nr.run("chromatic-adaptation-end",i),i.M)return oe(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const w1=new Set(["<number>","<percentage>","<angle>"]);function vl(e,t,r,n){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,d;if(l.none?d=u.find(w=>w1.has(w)):d=u.find(w=>w==c),!d){let w=o.name||s;throw new TypeError(`${c??l.raw} not allowed for ${w} in ${r}()`)}let m=d.range;c==="<percentage>"&&(m||=[0,1]);let p=o.range||o.refRange;return m&&p&&(n[a]=Na(m,p,n[a])),d})}function lh(e,{meta:t}={}){let r={str:String(e)?.trim()};if(nr.run("parse-start",r),r.color)return r.color;if(r.parsed=nh(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of x.all){let d=c.getFormat("color");if(d&&(o.includes(d.id)||d.ids?.filter(m=>o.includes(m)).length)){const m=Object.keys(c.coords).map((w,y)=>r.parsed.args[y]||0);let p;return d.coordGrammar&&(p=vl(c,d,"color",m)),t&&Object.assign(t,{formatId:"color",types:p}),d.id.startsWith("--")&&!i.startsWith("--")&&Qe.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${i}).`),i.startsWith("--")&&!d.id.startsWith("--")&&Qe.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:m,alpha:a}}}let u="",l=i in x.registry?i:s;if(l in x.registry){let c=x.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of x.all){let s=i.getFormat(n);if(s&&s.type==="function"){let o=1;(s.lastAlpha||ih(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return s.coordGrammar&&(u=vl(i,s,n,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let n of x.all)for(let i in n.formats){let s=n.formats[i];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let o=s.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function V(e){if(Array.isArray(e))return e.map(V);if(!e)throw new TypeError("Empty color reference");ti(e)&&(e=lh(e));let t=e.space||e.spaceId;return t instanceof x||(e.space=x.get(t)),e.alpha===void 0&&(e.alpha=1),e}const y1=75e-6;class x{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?x.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Uo(n),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:x.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:b1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),nr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=y1}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Dl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Dl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=V(t);[t,r]=[a.space,a.coords]}if(t=x.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,s,o;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)s=n[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=V(t);[t,r]=[n.space,n.coords]}return t=x.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(x.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof x)return t;if(er(t)==="string"){let i=x.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return x.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=er(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=x.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=er(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=x.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function b1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Dl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=oh(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(s=Na(a,u,s)),s=Qi(s,{precision:i,unit:l}),s})}return e}var Ee=new x({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class We extends x{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ee),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=oe(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Xi(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Xi(this.base.white,this.white,r),oe(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function ri(e,t){return e=V(e),!t||e.space.equals(t)?e.coords.slice():(t=x.get(t),t.from(e))}function He(e,t){e=V(e);let{space:r,index:n}=x.resolveCoord(t,e.space);return ri(e,r)[n]}function Pa(e,t,r){return e=V(e),t=x.get(t),e.coords=t.to(e.space,r),e}Pa.returns="color";function _t(e,t,r){if(e=V(e),arguments.length===2&&er(arguments[1])==="object"){let n=arguments[1];for(let i in n)_t(e,i,n[i])}else{typeof r=="function"&&(r=r(He(e,t)));let{space:n,index:i}=x.resolveCoord(t,e.space),s=ri(e,n);s[i]=r,Pa(e,n,s)}return e}_t.returns="color";var La=new x({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ee,fromBase:e=>Xi(Ee.white,"D50",e),toBase:e=>Xi("D50",Ee.white,e)});const v1=216/24389,El=24/116,gi=24389/27;let oo=Me.D50;var Ke=new x({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:oo,base:La,fromBase(e){let r=e.map((n,i)=>n/oo[i]).map(n=>n>v1?Math.cbrt(n):(gi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>El?Math.pow(t[0],3):(116*t[0]-16)/gi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gi,t[2]>El?Math.pow(t[2],3):(116*t[2]-16)/gi].map((n,i)=>n*oo[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Dt(e){return(e%360+360)%360}function D1(e,t){if(e==="raw")return t;let[r,n]=t.map(Dt),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var Un=new x({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ke,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Al=25**7,es=Math.PI,Cl=180/es,Mr=es/180;function $l(e){const t=e*e;return t*t*t*e}function ch(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=V([e,t]);let[s,o,a]=Ke.from(e),u=Un.from(Ke,[s,o,a])[1],[l,c,d]=Ke.from(t),m=Un.from(Ke,[l,c,d])[1];u<0&&(u=0),m<0&&(m=0);let p=(u+m)/2,w=$l(p),y=.5*(1-Math.sqrt(w/(w+Al))),A=(1+y)*o,D=(1+y)*c,k=Math.sqrt(A**2+a**2),N=Math.sqrt(D**2+d**2),R=A===0&&a===0?0:Math.atan2(a,A),z=D===0&&d===0?0:Math.atan2(d,D);R<0&&(R+=2*es),z<0&&(z+=2*es),R*=Cl,z*=Cl;let ke=l-s,ut=N-k,Pe=z-R,je=R+z,bt=Math.abs(Pe),At;k*N===0?At=0:bt<=180?At=Pe:Pe>180?At=Pe-360:Pe<-180?At=Pe+360:Qe.warn("the unthinkable has happened");let oi=2*Math.sqrt(N*k)*Math.sin(At*Mr/2),I0=(s+l)/2,Is=(k+N)/2,tu=$l(Is),Ct;k*N===0?Ct=je:bt<=180?Ct=je/2:je<360?Ct=(je+360)/2:Ct=(je-360)/2;let ru=(I0-50)**2,R0=1+.015*ru/Math.sqrt(20+ru),nu=1+.045*Is,fn=1;fn-=.17*Math.cos((Ct-30)*Mr),fn+=.24*Math.cos(2*Ct*Mr),fn+=.32*Math.cos((3*Ct+6)*Mr),fn-=.2*Math.cos((4*Ct-63)*Mr);let iu=1+.015*Is*fn,O0=30*Math.exp(-1*((Ct-275)/25)**2),_0=2*Math.sqrt(tu/(tu+Al)),V0=-1*Math.sin(2*O0*Mr)*_0,ai=(ke/(r*R0))**2;return ai+=(ut/(n*nu))**2,ai+=(oi/(i*iu))**2,ai+=V0*(ut/(n*nu))*(oi/(i*iu)),Math.sqrt(ai)}const E1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],A1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],C1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],$1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Xr=new x({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ee,fromBase(e){let r=oe(E1,e).map(n=>Math.cbrt(n));return oe(C1,r)},toBase(e){let r=oe($1,e).map(n=>n**3);return oe(A1,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Wo(e,t){[e,t]=V([e,t]);let[r,n,i]=Xr.from(e),[s,o,a]=Xr.from(t),u=r-s,l=n-o,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const S1=75e-6;function Er(e,t,{epsilon:r=S1}={}){e=V(e),t||(t=e.space),t=x.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function en(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function dh(e,t,r="lab"){r=x.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function k1(e,t){return dh(e,t,"lab")}const F1=Math.PI,Sl=F1/180;function T1(e,t,{l:r=2,c:n=1}={}){[e,t]=V([e,t]);let[i,s,o]=Ke.from(e),[,a,u]=Un.from(Ke,[i,s,o]),[l,c,d]=Ke.from(t),m=Un.from(Ke,[l,c,d])[1];a<0&&(a=0),m<0&&(m=0);let p=i-l,w=a-m,y=s-c,A=o-d,D=y**2+A**2-w**2,k=.511;i>=16&&(k=.040975*i/(1+.01765*i));let N=.0638*a/(1+.0131*a)+.638,R;Number.isNaN(u)&&(u=0),u>=164&&u<=345?R=.56+Math.abs(.2*Math.cos((u+168)*Sl)):R=.36+Math.abs(.4*Math.cos((u+35)*Sl));let z=Math.pow(a,4),ke=Math.sqrt(z/(z+1900)),ut=N*(ke*R+1-ke),Pe=(p/(r*k))**2;return Pe+=(w/(n*N))**2,Pe+=D/ut**2,Math.sqrt(Pe)}const kl=203;var Ia=new x({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ee,fromBase(e){return e.map(t=>Math.max(t*kl,0))},toBase(e){return e.map(t=>Math.max(t/kl,0))}});const wi=1.15,yi=.66,Fl=2610/2**14,x1=2**14/2610,Tl=3424/2**12,xl=2413/2**7,Ml=2392/2**7,M1=1.7*2523/2**5,Nl=2**5/(1.7*2523),bi=-.56,ao=16295499532821565e-27,N1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],B1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],P1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],L1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var fh=new x({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ia,fromBase(e){let[t,r,n]=e,i=wi*t-(wi-1)*n,s=yi*r-(yi-1)*t,a=oe(N1,[i,s,n]).map(function(m){let p=Tl+xl*(m/1e4)**Fl,w=1+Ml*(m/1e4)**Fl;return(p/w)**M1}),[u,l,c]=oe(P1,a);return[(1+bi)*u/(1+bi*u)-ao,l,c]},toBase(e){let[t,r,n]=e,i=(t+ao)/(1+bi-bi*(t+ao)),o=oe(L1,[i,r,n]).map(function(m){let p=Tl-m**Nl,w=Ml*m**Nl-xl;return 1e4*(p/w)**x1}),[a,u,l]=oe(B1,o),c=(a+(wi-1)*l)/wi,d=(u+(yi-1)*c)/yi;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),jo=new x({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:fh,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function I1(e,t){[e,t]=V([e,t]);let[r,n,i]=jo.from(e),[s,o,a]=jo.from(t),u=r-s,l=n-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,d=2*Math.sqrt(n*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const hh=3424/4096,mh=2413/128,ph=2392/128,Bl=2610/16384,R1=2523/32,O1=16384/2610,Pl=32/2523,_1=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],V1=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],U1=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],W1=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var qo=new x({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ia,fromBase(e){let t=oe(_1,e);return j1(t)},toBase(e){let t=q1(e);return oe(W1,t)}});function j1(e){let t=e.map(function(r){let n=hh+mh*(r/1e4)**Bl,i=1+ph*(r/1e4)**Bl;return(n/i)**R1});return oe(V1,t)}function q1(e){return oe(U1,e).map(function(n){let i=Math.max(n**Pl-hh,0),s=mh-ph*n**Pl;return 1e4*(i/s)**O1})}function z1(e,t){[e,t]=V([e,t]);let[r,n,i]=qo.from(e),[s,o,a]=qo.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-o)**2+(i-a)**2)}const G1=Me.D65,gh=.42,Ll=1/gh,uo=2*Math.PI,wh=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],H1=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],K1=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Z1={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},yr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Y1=180/Math.PI,Il=Math.PI/180;function yh(e,t){return e.map(n=>{const i=vt(t*Math.abs(n)*.01,gh);return 400*vs(i,n)/(i+27.13)})}function J1(e,t){const r=100/t*27.13**Ll;return e.map(n=>{const i=Math.abs(n);return vs(r*vt(i/(400-i),Ll),n)})}function Q1(e){let t=Dt(e);t<=yr.h[0]&&(t+=360);const r=uh(yr.h,t)-1,[n,i]=yr.h.slice(r,r+2),[s,o]=yr.e.slice(r,r+2),a=yr.H[r],u=(t-n)/s;return a+100*u/(u+(i-t)/o)}function X1(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=yr.h.slice(r,r+2),[s,o]=yr.e.slice(r,r+2);return Dt((t*(o*n-s*i)-100*n*o)/(t*(o-s)-100*o))}function bh(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const o=e.map(y=>y*100);s.la=t,s.yb=r;const a=o[1],u=oe(wh,o);n=Z1[s.surround];const l=n[0];s.c=n[1],s.nc=n[2];const d=(1/(5*s.la+1))**4;s.fl=d*s.la+.1*(1-d)*(1-d)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(y=>Vn(1,a/y,m)),s.dRgbInv=s.dRgb.map(y=>1/y);const p=u.map((y,A)=>y*s.dRgb[A]),w=yh(p,s.fl);return s.aW=s.nbb*(2*w[0]+w[1]+.05*w[2]),s}const Rl=bh(G1,64/Math.PI*.2,20,"average",!1);function zo(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Dt(e.h)*Il:r=X1(e.H)*Il;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=vt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=vt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*vt(s,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,m=23*(d+.305)*Ba(a,23*c+a*(11*n+108*i)),p=m*n,w=m*i,y=J1(oe(K1,[d,p,w]).map(A=>A*1/1403),t.fl);return oe(H1,y.map((A,D)=>A*t.dRgbInv[D])).map(A=>A/100)}function vh(e,t){const r=e.map(N=>N*100),n=yh(oe(wh,r).map((N,R)=>N*t.dRgb[R]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(s,i)%uo+uo)%uo,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Ba(a*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),l=vt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=vt(c/t.aW,.5*t.c*t.z),m=100*vt(d,2),p=4/t.c*d*(t.aW+4)*t.flRoot,w=l*d,y=w*t.flRoot,A=Dt(o*Y1),D=Q1(A),k=50*vt(t.c*l/(t.aW+4),1/2);return{J:m,C:w,h:A,s:k,Q:p,M:y,H:D}}var ey=new x({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ee,fromBase(e){const t=vh(e,Rl);return[t.J,t.M,t.h]},toBase(e){return zo({J:e[0],M:e[1],h:e[2]},Rl)}});const ty=Me.D65,ry=216/24389,Dh=24389/27;function ny(e){return 116*(e>ry?Math.cbrt(e):(Dh*e+16)/116)-16}function Go(e){return e>8?Math.pow((e+16)/116,3):e/Dh}function iy(e,t){let[r,n,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=Go(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){s=zo({J:o,C:n,h:r},t);const m=Math.abs(s[1]-a);if(m<d){if(m<=u)return s;d=m}o=o-(s[1]-a)*o/(2*s[1]),c+=1}return zo({J:o,C:n,h:r},t)}function sy(e,t){const r=ny(e[1]);if(r===0)return[0,0,0];const n=vh(e,Ra);return[Dt(n.h),n.C,r]}const Ra=bh(ty,200/Math.PI*Go(50),Go(50)*100,"average",!1);var Wn=new x({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ee,fromBase(e){return sy(e)},toBase(e){return iy(e,Ra)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const oy=Math.PI/180,Ol=[1,.007,.0228];function _l(e){e[1]<0&&(e=Wn.fromBase(Wn.toBase(e)));const t=Math.log(Math.max(1+Ol[2]*e[1]*Ra.flRoot,1))/Ol[2],r=e[0]*oy,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function ay(e,t){[e,t]=V([e,t]);let[r,n,i]=_l(Wn.from(e)),[s,o,a]=_l(Wn.from(t));return Math.sqrt((r-s)**2+(n-o)**2+(i-a)**2)}var tn={deltaE76:k1,deltaECMC:T1,deltaE2000:ch,deltaEJz:I1,deltaEITP:z1,deltaEOK:Wo,deltaEHCT:ay};function uy(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Vl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ir(e,{method:t=Qe.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=V(e),ti(arguments[1])?r=arguments[1]:r||(r=e.space),r=x.get(r),Er(e,r,{epsilon:0}))return e;let o;if(t==="css")o=ly(e,{space:r});else{if(t!=="clip"&&!Er(e,r)){Object.prototype.hasOwnProperty.call(Vl,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=Vl[t]);let a=ch;if(n!==""){for(let l in tn)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=tn[l];break}}let u=ir(ie(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(s).length===3){let k=x.resolveCoord(s.channel),N=He(ie(e,k.space),k.id);if(rr(N)&&(N=0),N>=s.max)return ie({space:"xyz-d65",coords:Me.D65},e.space);if(N<=s.min)return ie({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=x.resolveCoord(t),c=l.space,d=l.id,m=ie(e,c);m.coords.forEach((k,N)=>{rr(k)&&(m.coords[N]=0)});let w=(l.range||l.refRange)[0],y=uy(i),A=w,D=He(m,d);for(;D-A>y;){let k=en(m);k=ir(k,{space:r,method:"clip"}),a(m,k)-i<y?A=He(m,d):D=He(m,d),_t(m,d,(A+D)/2)}o=ie(m,r)}else o=u}else o=ie(e,r);if(t==="clip"||!Er(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(o=ie(o,e.space)),e.coords=o.coords,e}ir.returns="color";const Ul={WHITE:{space:Xr,coords:[1,0,0]},BLACK:{space:Xr,coords:[0,0,0]}};function ly(e,{space:t}={}){e=V(e),t||(t=e.space),t=x.get(t);const i=x.get("oklch");if(t.isUnbounded)return ie(e,t);const s=ie(e,i);let o=s.coords[0];if(o>=1){const w=ie(Ul.WHITE,t);return w.alpha=e.alpha,ie(w,t)}if(o<=0){const w=ie(Ul.BLACK,t);return w.alpha=e.alpha,ie(w,t)}if(Er(s,t,{epsilon:0}))return ie(s,t);function a(w){const y=ie(w,t),A=Object.values(t.coords);return y.coords=y.coords.map((D,k)=>{if("range"in A[k]){const[N,R]=A[k].range;return ah(N,D,R)}return D}),y}let u=0,l=s.coords[1],c=!0,d=en(s),m=a(d),p=Wo(m,d);if(p<.02)return m;for(;l-u>1e-4;){const w=(u+l)/2;if(d.coords[1]=w,c&&Er(d,t,{epsilon:0}))u=w;else if(m=a(d),p=Wo(m,d),p<.02){if(.02-p<1e-4)break;c=!1,u=w}else l=w}return m}function ie(e,t,{inGamut:r}={}){e=V(e),t=x.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=ir(i,r===!0?void 0:r)),i}ie.returns="color";function Nn(e,{precision:t=Qe.precision,format:r="default",inGamut:n=!0,...i}={}){let s;e=V(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??x.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!Er(e)&&(a=ir(en(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(m=>Qi(m,{precision:t})));let l=[...a];if(u==="color"){let m=r.id||r.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=Qi(c,{precision:t}));let d=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;s=`${u}(${l.join(r.commas?", ":" ")}${d})`}return s}const cy=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],dy=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ds=new We({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:cy,fromXYZ_M:dy});const vi=1.09929682680944,Wl=.018053968510807;var Eh=new We({id:"rec2020",name:"REC.2020",base:Ds,toBase(e){return e.map(function(t){return t<Wl*4.5?t/4.5:Math.pow((t+vi-1)/vi,1/.45)})},fromBase(e){return e.map(function(t){return t>=Wl?vi*Math.pow(t,.45)-(vi-1):4.5*t})}});const fy=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],hy=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ah=new We({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:fy,fromXYZ_M:hy});const my=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],ve=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ch=new We({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:my,fromXYZ_M:ve}),jl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ql=Array(3).fill("<percentage> | <number>[0, 255]"),zl=Array(3).fill("<number>[0, 255]");var rn=new We({id:"srgb",name:"sRGB",base:Ch,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ql},rgb_number:{name:"rgb",commas:!0,coords:zl,noAlpha:!0},color:{},rgba:{coords:ql,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:zl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=jl.black,t.alpha=0):t.coords=jl[e],t.coords)return t}}}}),$h=new We({id:"p3",cssId:"display-p3",name:"P3",base:Ah,fromBase:rn.fromBase,toBase:rn.toBase});Qe.display_space=rn;let py;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ke,Eh,$h]){let t=e.getMinCoords(),n=Nn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Qe.display_space=e;break}}function gy(e,{space:t=Qe.display_space,...r}={}){let n=Nn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Qe.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(rr)||rr(e.alpha))&&!(py??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=en(e),i.coords=i.coords.map(ge),i.alpha=ge(i.alpha),n=Nn(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=ie(i,t),n=new String(Nn(i,r)),n.color=i}return n}function wy(e,t){return e=V(e),t=V(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function sr(e){return He(e,[Ee,"y"])}function Sh(e,t){_t(e,[Ee,"y"],t)}function yy(e){Object.defineProperty(e.prototype,"luminance",{get(){return sr(this)},set(t){Sh(this,t)}})}var by=Object.freeze({__proto__:null,getLuminance:sr,register:yy,setLuminance:Sh});function vy(e,t){e=V(e),t=V(t);let r=Math.max(sr(e),0),n=Math.max(sr(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Dy=.56,Ey=.57,Ay=.62,Cy=.65,Gl=.022,$y=1.414,Sy=.1,ky=5e-4,Fy=1.14,Hl=.027,Ty=1.14;function Kl(e){return e>=Gl?e:e+(Gl-e)**$y}function Nr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function xy(e,t){t=V(t),e=V(e);let r,n,i,s,o,a;t=ie(t,"srgb"),[s,o,a]=t.coords;let u=Nr(s)*.2126729+Nr(o)*.7151522+Nr(a)*.072175;e=ie(e,"srgb"),[s,o,a]=e.coords;let l=Nr(s)*.2126729+Nr(o)*.7151522+Nr(a)*.072175,c=Kl(u),d=Kl(l),m=d>c;return Math.abs(d-c)<ky?n=0:m?(r=d**Dy-c**Ey,n=r*Fy):(r=d**Cy-c**Ay,n=r*Ty),Math.abs(n)<Sy?i=0:n>0?i=n-Hl:i=n+Hl,i*100}function My(e,t){e=V(e),t=V(t);let r=Math.max(sr(e),0),n=Math.max(sr(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const Ny=5e4;function By(e,t){e=V(e),t=V(t);let r=Math.max(sr(e),0),n=Math.max(sr(t),0);return n>r&&([r,n]=[n,r]),n===0?Ny:(r-n)/n}function Py(e,t){e=V(e),t=V(t);let r=He(e,[Ke,"l"]),n=He(t,[Ke,"l"]);return Math.abs(r-n)}const Ly=216/24389,Zl=24/116,Di=24389/27;let lo=Me.D65;var Ho=new x({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:lo,base:Ee,fromBase(e){let r=e.map((n,i)=>n/lo[i]).map(n=>n>Ly?Math.cbrt(n):(Di*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Zl?Math.pow(t[0],3):(116*t[0]-16)/Di,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Di,t[2]>Zl?Math.pow(t[2],3):(116*t[2]-16)/Di].map((n,i)=>n*lo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const co=Math.pow(5,.5)*.5+.5;function Iy(e,t){e=V(e),t=V(t);let r=He(e,[Ho,"l"]),n=He(t,[Ho,"l"]),i=Math.abs(Math.pow(r,co)-Math.pow(n,co)),s=Math.pow(i,1/co)*Math.SQRT2-40;return s<7.5?0:s}var Oi=Object.freeze({__proto__:null,contrastAPCA:xy,contrastDeltaPhi:Iy,contrastLstar:Py,contrastMichelson:My,contrastWCAG21:vy,contrastWeber:By});function Ry(e,t,r={}){ti(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(Oi).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=V(e),t=V(t);for(let s in Oi)if("contrast"+n.toLowerCase()===s.toLowerCase())return Oi[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Es(e){let[t,r,n]=ri(e,Ee),i=t+15*r+3*n;return[4*t/i,9*r/i]}function kh(e){let[t,r,n]=ri(e,Ee),i=t+r+n;return[t/i,r/i]}function Oy(e){Object.defineProperty(e.prototype,"uv",{get(){return Es(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return kh(this)}})}var _y=Object.freeze({__proto__:null,register:Oy,uv:Es,xy:kh});function Cn(e,t,r={}){ti(r)&&(r={method:r});let{method:n=Qe.deltaE,...i}=r;for(let s in tn)if("deltae"+n.toLowerCase()===s.toLowerCase())return tn[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function Vy(e,t=.25){let n=[x.get("oklch","lch"),"l"];return _t(e,n,i=>i*(1+t))}function Uy(e,t=.25){let n=[x.get("oklch","lch"),"l"];return _t(e,n,i=>i*(1-t))}var Wy=Object.freeze({__proto__:null,darken:Uy,lighten:Vy});function Fh(e,t,r=.5,n={}){return[e,t]=[V(e),V(t)],er(r)==="object"&&([r,n]=[.5,r]),ni(e,t,n)(r)}function Th(e,t,r={}){let n;Oa(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[V(e),V(t)],n=ni(e,t,u));let l=Cn(e,t),c=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let m=1/(c-1);d=Array.from({length:c},(p,w)=>{let y=w*m;return{p:y,color:n(y)}})}if(i>0){let m=d.reduce((p,w,y)=>{if(y===0)return 0;let A=Cn(w.color,d[y-1].color,s);return Math.max(p,A)},0);for(;m>i;){m=0;for(let p=1;p<d.length&&d.length<a;p++){let w=d[p-1],y=d[p],A=(y.p+w.p)/2,D=n(A);m=Math.max(m,Cn(D,w.color),Cn(D,y.color)),d.splice(p,0,{p:A,color:n(A)}),p++}}}return d=d.map(m=>m.color),d}function ni(e,t,r={}){if(Oa(e)){let[u,l]=[e,t];return ni(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:s,premultiplied:o}=r;e=V(e),t=V(t),e=en(e),t=en(t);let a={colors:[e,t],options:r};if(n?n=x.get(n):n=x.registry[Qe.interpolationSpace]||e.space,i=i?x.get(i):n,e=ie(e,n),t=ie(t,n),e=ir(e),t=ir(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[He(e,l),He(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=D1(u,[c,d]),_t(e,l,c),_t(t,l,d)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((m,p)=>{let w=t.coords[p];return Vn(m,w,u)}),c=Vn(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return o&&(d.coords=d.coords.map(m=>m/c)),i!==n&&(d=ie(d,i)),d},{rangeArgs:a})}function Oa(e){return er(e)==="function"&&!!e.rangeArgs}Qe.interpolationSpace="lab";function jy(e){e.defineFunction("mix",Fh,{returns:"color"}),e.defineFunction("range",ni,{returns:"function<color>"}),e.defineFunction("steps",Th,{returns:"array<color>"})}var qy=Object.freeze({__proto__:null,isRange:Oa,mix:Fh,range:ni,register:jy,steps:Th}),xh=new x({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:rn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-n)/l+2;break;case s:o=(n-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let o=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Mh=new x({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:xh,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),zy=new x({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Mh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let s=1-n,o=s===0?0:1-r/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Gy=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Hy=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Nh=new We({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Gy,fromXYZ_M:Hy}),Ky=new We({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Nh,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const Zy=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Yy=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Bh=new We({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:La,toXYZ_M:Zy,fromXYZ_M:Yy});const Jy=1/512,Qy=16/512;var Xy=new We({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Bh,toBase(e){return e.map(t=>t<Qy?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Jy?t**(1/1.8):16*t)}}),e2=new x({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Xr,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dt(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Ph=Me.D65;const t2=216/24389,Yl=24389/27,[Jl,Ql]=Es({space:Ee,coords:Ph});var Lh=new x({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ph,base:Ee,fromBase(e){let t=[ge(e[0]),ge(e[1]),ge(e[2])],r=t[1],[n,i]=Es({space:Ee,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=t2?Yl*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Jl),13*s*(i-Ql)]},toBase(e){let[t,r,n]=e;if(t===0||rr(t))return[0,0,0];r=ge(r),n=ge(n);let i=r/(13*t)+Jl,s=n/(13*t)+Ql,o=t<=8?t/Yl:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),_a=new x({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Lh,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Dt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const r2=216/24389,n2=24389/27,Xl=ve[0][0],ec=ve[0][1],fo=ve[0][2],tc=ve[1][0],rc=ve[1][1],ho=ve[1][2],nc=ve[2][0],ic=ve[2][1],mo=ve[2][2];function Br(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function ts(e){const t=Math.pow(e+16,3)/1560896,r=t>r2?t:e/n2,n=r*(284517*Xl-94839*fo),i=r*(838422*fo+769860*ec+731718*Xl),s=r*(632260*fo-126452*ec),o=r*(284517*tc-94839*ho),a=r*(838422*ho+769860*rc+731718*tc),u=r*(632260*ho-126452*rc),l=r*(284517*nc-94839*mo),c=r*(838422*mo+769860*ic+731718*nc),d=r*(632260*mo-126452*ic);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function sc(e,t){const r=t/360*Math.PI*2,n=Br(e.r0s,e.r0i,r),i=Br(e.r1s,e.r1i,r),s=Br(e.g0s,e.g0i,r),o=Br(e.g1s,e.g1i,r),a=Br(e.b0s,e.b0i,r),u=Br(e.b1s,e.b1i,r);return Math.min(n,i,s,o,a,u)}var i2=new x({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_a,gamutSpace:rn,fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=ts(t),o=sc(s,n);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=ts(n);i=sc(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});ve[0][0];ve[0][1];ve[0][2];ve[1][0];ve[1][1];ve[1][2];ve[2][0];ve[2][1];ve[2][2];function Pr(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function oc(e){let t=Pr(e.r0s,e.r0i),r=Pr(e.r1s,e.r1i),n=Pr(e.g0s,e.g0i),i=Pr(e.g1s,e.g1i),s=Pr(e.b0s,e.b0i),o=Pr(e.b1s,e.b1i);return Math.min(t,r,n,i,s,o)}var s2=new x({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_a,gamutSpace:"self",fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=ts(t),o=oc(s);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=ts(n);i=oc(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ac=203,uc=2610/2**14,o2=2**14/2610,a2=2523/2**5,lc=2**5/2523,cc=3424/2**12,dc=2413/2**7,fc=2392/2**7;var u2=new We({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ds,toBase(e){return e.map(function(t){return(Math.max(t**lc-cc,0)/(dc-fc*t**lc))**o2*1e4/ac})},fromBase(e){return e.map(function(t){let r=Math.max(t*ac/1e4,0),n=cc+dc*r**uc,i=1+fc*r**uc;return(n/i)**a2})}});const hc=.17883277,mc=.28466892,pc=.55991073,po=3.7743;var l2=new We({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ds,toBase(e){return e.map(function(t){return t<=.5?t**2/3*po:(Math.exp((t-pc)/hc)+mc)/12*po})},fromBase(e){return e.map(function(t){return t/=po,t<=1/12?Math.sqrt(3*t):hc*Math.log(12*t-mc)+pc})}});const Ih={};nr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Rh(e.W1,e.W2,e.options.method))});nr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Rh(e.W1,e.W2,e.options.method))});function As({id:e,toCone_M:t,fromCone_M:r}){Ih[e]=arguments[0]}function Rh(e,t,r="Bradford"){let n=Ih[r],[i,s,o]=oe(n.toCone_M,e),[a,u,l]=oe(n.toCone_M,t),c=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],d=oe(c,n.toCone_M);return oe(n.fromCone_M,d)}As({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});As({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});As({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});As({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Me,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Me.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const c2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],d2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Oh=new We({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Me.ACES,toXYZ_M:c2,fromXYZ_M:d2});const Ei=2**-16,go=-.35828683,Ai=(Math.log2(65504)+9.72)/17.52;var f2=new We({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[go,Ai],name:"Red"},g:{range:[go,Ai],name:"Green"},b:{range:[go,Ai],name:"Blue"}},referred:"scene",base:Oh,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ei)*2:r<Ai?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ei)+9.72)/17.52:t<Ei?(Math.log2(Ei+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),gc=Object.freeze({__proto__:null,A98RGB:Ky,A98RGB_Linear:Nh,ACEScc:f2,ACEScg:Oh,CAM16_JMh:ey,HCT:Wn,HPLuv:s2,HSL:xh,HSLuv:i2,HSV:Mh,HWB:zy,ICTCP:qo,JzCzHz:jo,Jzazbz:fh,LCH:Un,LCHuv:_a,Lab:Ke,Lab_D65:Ho,Luv:Lh,OKLCH:e2,OKLab:Xr,P3:$h,P3_Linear:Ah,ProPhoto:Xy,ProPhoto_Linear:Bh,REC_2020:Eh,REC_2020_Linear:Ds,REC_2100_HLG:l2,REC_2100_PQ:u2,XYZ_ABS_D65:Ia,XYZ_D50:La,XYZ_D65:Ee,sRGB:rn,sRGB_Linear:Ch});let Q=class Ie{constructor(...t){let r;t.length===1&&(r=V(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:x.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Ie(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=gy(this,...t);return r.color=new Ie(r.color),r}static get(t,...r){return t instanceof Ie?t:new Ie(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,o=function(...a){let u=r(...a);if(s==="color")u=Ie.get(u);else if(s==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Ie.get(d)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Ie.get(l)));return u};t in Ie||(Ie[t]=o),i&&(Ie.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Ie.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ie);else for(let r in t)Ie.defineFunction(r,t[r])}};Q.defineFunctions({get:He,getAll:ri,set:_t,setAll:Pa,to:ie,equals:wy,inGamut:Er,toGamut:ir,distance:dh,toString:Nn});Object.assign(Q,{util:p1,hooks:nr,WHITES:Me,Space:x,spaces:x.registry,parse:lh,defaults:Qe});for(let e of Object.keys(gc))x.register(gc[e]);for(let e in x.registry)Ko(e,x.registry[e]);nr.add("colorspace-init-end",e=>{Ko(e.id,e),e.aliases?.forEach(t=>{Ko(t,e)})});function Ko(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(Q.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return x.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=x.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=x.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}Q.extend(tn);Q.extend({deltaE:Cn});Object.assign(Q,{deltaEMethods:tn});Q.extend(Wy);Q.extend({contrast:Ry});Q.extend(_y);Q.extend(by);Q.extend(qy);Q.extend(Oi);const h2=Symbol("no update");class wo extends cn()("observable-value-update"){}class m2 extends qf("observable-destroy"){}class p2{listenTarget=new Ea;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===h2||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new wo({detail:r})),!0)}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(wo,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(wo,r)}destroy(){this.listenTarget.dispatch(new m2),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function g2(e,t){return Og(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}const _h="__vir__shape__definition__key__do__not__use__in__actual__objects",Va="__vir__shape__specifier__key__do__not__use__in__actual__objects",Vh="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Ua(e){return E.hasKey(e,Vh)}function Uh({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[Vh]:!0,[Va]:!0}}Uh({customName:"UUID",defaultValue:Vg.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function Wa(e){return E.hasKey(e,_h)}var we;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(we||(we={}));function w2(...e){return ur(e,we.And)}function Zo(...e){return ur(e,we.Enum)}function _(...e){return ur(e,we.Exact)}function Cs(...e){return ur(e,we.IndexedKeys)}function X(...e){return ur(e,we.Or)}function y2(e){return ur([e],we.Unknown)}function Vr(e,t){return ur([e,t],we.NumericRange)}function Ge(e){return ur([e],we.Optional)}function $s(e){return Et(e,we.And)}function Ss(e){return Et(e,we.Class)}function ks(e){return Et(e,we.Enum)}function Fs(e){return Et(e,we.Exact)}function Ts(e){return Et(e,we.IndexedKeys)}function Wh(e){return Et(e,we.Tuple)}function ii(e){return Et(e,we.Or)}function xs(e){return Et(e,we.Unknown)}function jh(e){return Et(e,we.NumericRange)}function rs(e){return Et(e,we.Optional)}function Et(e,t){const r=si(e);return!!r&&r.specifierType===t}function ur(e,t){return{[Va]:!0,specifierType:t,parts:e}}function si(e){if(!(!E.isObject(e)||!E.hasKey(e,Va)))return e}class wc extends TypeError{name="DefaultValueConstructionError"}function b2(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1;return typeof e==typeof t&&(i||s)}class Oe extends TypeError{name="ShapeMismatchError"}function qh(e,t,r={}){try{return zh(e,t,r),!0}catch{return!1}}function zh(e,t,r={},n=""){try{Fe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?as(i,n):i}}function Yo(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Fe({subject:e,shape:t,keys:r,options:n}){if(xs(t))return!0;if(Wa(t))return Fe({subject:e,shape:t.shape,keys:r,options:n});if(Ua(t)){if(!t.checker(e))throw new Oe(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const i=Yo(r);if(si(e))throw new Oe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Wh(t)){if(!E.isArray(e))throw new Oe(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return Fe({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(rs(t))return Fe({keys:r,options:n,shape:t.parts[0],subject:e});if(_i(e,t,r,n)){if(E.isFunction(t))return E.isFunction(e);if(Ss(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(ii(t)){const c=[];l=t.parts.some(d=>{try{const m=Fe({subject:e,shape:d,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof Oe)return c.push(m.message),!1;throw m}}),!l&&E.isLengthAtLeast(c,1)&&u.push(c[0])}else if($s(t))l=t.parts.every(c=>{try{const d=Fe({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof Oe)return u.push(d.message),!1;throw d}});else if(Fs(t)){const c=Fe({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(ks(t))throw new Oe(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((c,d)=>{const m=t.some(p=>{try{return Fe({subject:c,shape:p,keys:[...r,d],options:n}),!0}catch(w){if(w instanceof Oe)return u.push(w.message),!1;throw w}});return a[d]=m,m});else if(Ts(t)){const c=Be(e,(d,m)=>(n.ignoreExtraKeys||Fe({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),Fe({shape:t.parts[0].values,subject:m,keys:[...r,d],options:n}),!0));Object.assign(a,c),l=!0}else{const c=v2({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new Oe(os(u));if(!l){const d=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>Yo([...r,m])).join(",")}`;throw new Oe(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,d])=>{if(!d)throw new Oe(`subject as extra key '${c}' in ${i}.`)}),a}else if(n.exactValues)return e===t}else throw new Oe(`Subject does not match shape definition at key ${i}`)}return!0}function v2({keys:e,options:t,shape:r,subject:n}){const i=Yo(e),s={};if(E.isObject(r)){const o=new Set(J(r)),a=new Set(J(n));o.forEach(u=>{(u in n||rs(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Oe(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],c=ii(l)?l.parts.includes(void 0):!1,d=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!d)throw new Oe(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in n)&&rs(r[u])){s[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];Fe({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new Oe(`Shape definition at ${i} was not an object.`);return s}function _i(e,t,r,n,i){const s=si(t);if(s){if(Ua(s))return s.checker(e);if(jh(s))return E.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(Ss(s))return e instanceof s.parts[0];if($s(s))return s.parts.every(o=>{try{return Fe({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(ii(s))return s.parts.some(o=>{try{return Fe({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(Fs(s))return E.isObject(e)?(Fe({subject:e,shape:s.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===s.parts[0];if(ks(s))return E.hasValue(Object.values(s.parts[0]),e);if(Ts(s)){if(!E.isObject(e))return!1;const o=D2(e,s,!!n.ignoreExtraKeys),a=Ro(e).every(u=>{try{return Fe({subject:u,shape:s.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(xs(s))return!0}return i?t===e:b2(e,t)}function D2(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys,s=ja(t);if(E.isBoolean(s))return J(e).every(u=>_i(u,i,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?s.every(u=>J(e).some(l=>_i(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return J(e).every(u=>s.includes(u)?_i(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function ja(e){const t=e.parts[0].keys,r=si(t);if(E.isPropertyKey(t))return!0;if(r){if(Ss(r))return!1;if($s(r))return!1;if(ii(r)){const n=r.parts.map(i=>ja(Cs({...e.parts[0],keys:i})));return n.includes(!1)?!1:n.flat().filter(E.isPropertyKey)}else if(Fs(r)){const n=r.parts.filter(E.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(ks(r))return Object.values(r.parts[0]);if(Ts(r))return!1;if(xs(r))return!0}}return!1}function Jo(e){return wr(e)}function wr(e){const t=si(e);if(Ua(e))return e.defaultValue;if(t){if(Wh(t))return t.parts.map(r=>wr(r));if(rs(t))return wr(t.parts[0]);if(jh(t))return t.parts[0];if(Ss(t)){const r=t.parts[0];try{return new r}catch(n){throw new wc(`Failed to create default value for classShape for class '${r.name}': ${Ne(n)}`)}}else{if(ii(t)||Fs(t))return wr(t.parts[0]);if($s(t))return t.parts.reduce((r,n)=>Object.assign(r,wr(n)),{});if(ks(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Ts(t)){const r=ja(t);return!t.parts[0].required||E.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,wr(t.parts[0].values)]))}else{if(xs(t))return t.parts[0]??{};throw new wc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Wa(e)?Jo(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(wr):E.isObject(e)?Be(e,(r,n)=>Jo(n)):e}function ot(e,t=!1){if(Wa(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return Jo(e)},[_h]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const E2=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Gh=E2.reduce((e,t)=>(e[t]=t,e),{});ne.defaultZone.name;const Hh=Gh.UTC,A2=ot({hour:Vr(Vu.min,Vu.max),minute:Vr(Uu.min,Uu.max),second:Vr(Wu.min,Wu.max),millisecond:Vr(ju.min,ju.max),timezone:Zo(Gh,Hh)}),C2=ot({year:2023,month:Vr(Ou.min,Ou.max),day:Vr(_u.min,_u.max),timezone:Hh});ot(w2(C2,A2));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";ot(X({get:_(M.Month),in:X(_(M.Year),_(M.Quarter))},{get:_(M.Week),in:X(_(M.Year),_(M.Quarter),_(M.Month))},{get:_(M.Day),in:X(_(M.Year),_(M.Quarter),_(M.Month),_(M.Week))},{get:_(M.Hour),in:X(_(M.Year),_(M.Quarter),_(M.Month),_(M.Week),_(M.Day))},{get:_(M.Minute),in:X(_(M.Year),_(M.Quarter),_(M.Month),_(M.Week),_(M.Day),_(M.Hour))},{get:_(M.Second),in:X(_(M.Year),_(M.Quarter),_(M.Month),_(M.Week),_(M.Day),_(M.Hour),_(M.Minute))},{get:_(M.Millisecond),in:X(_(M.Year),_(M.Quarter),_(M.Month),_(M.Week),_(M.Day),_(M.Hour),_(M.Minute),_(M.Second))}));var yc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(yc||(yc={}));var Qo;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Qo||(Qo={}));var bc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(bc||(bc={}));const $2={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Cw($2,xt(Qo));ne.defaultLocale;ot(Uh({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return S2(e)}}));function S2(e){return L.fromISO(e).toUTC().toISO()===e}const k2=ot({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:y2()});function yo(e){return qh(e,k2,{allowExtraKeys:!0})}class Kh extends p2{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||g2}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:F2}=a1,vc=()=>document.createComment(""),bn=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(vc(),i),o=n.insertBefore(vc(),i);r=new F2(s,o,e,e.options)}else{const s=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(s!==i||a){let u=r._$AA;for(;u!==s;){const l=u.nextSibling;n.insertBefore(u,i),u=l}}}return r},gr=(e,t,r=e)=>(e._$AI(t,r),e),T2={},x2=(e,t=T2)=>e._$AH=t,M2=e=>e._$AH,bo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms={ATTRIBUTE:1,CHILD:2,ELEMENT:6},lr=e=>(...t)=>({_$litDirective$:e,values:t});class Vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N2={attribute:!0,type:String,converter:Yi,reflect:!1,hasChanged:Ta},B2=(e=N2,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function P2(e){return(t,r)=>typeof r=="object"?B2(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=lr(class extends Vt{constructor(e){if(super(e),e.type!==Ms.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Je}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zh=e=>e??se;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xo extends Vt{constructor(t){if(super(t),this.it=se,t.type!==Ms.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this._t=void 0,this.it=t;if(t===Je)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Xo.directiveName="unsafeHTML",Xo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dc extends Xo{}Dc.directiveName="unsafeSVG",Dc.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L2(e,t,r){return e?t(e):r?.(e)}class I2 extends Mn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function R2(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function ea(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function qa(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Yh(e){return gs(e,t=>{if(ea(t))return t.definition;if(qa(t))return t.tagInterpolationKey||t},E.isTruthy)}const Jh=new WeakMap;function O2(e,t){const r=Yh(t);return Qh(Jh,[e,...r]).value?.template}function _2(e,t,r){const n=Yh(t);return e0(Jh,[e,...n],r)}function Qh(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Xh(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Qh(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Xh(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function e0(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Xh(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),e0(u,t,r,n+1)}function t0(e,t,r){const n=O2(e,t),i=n??r();if(!n){const a=_2(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=R2(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function r0(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const d=i.length-1,m=i[d],p=c-1,w=t[p];n&&n(l);let y,A=[];if(typeof m=="string"&&(y=r(m,l,w),y)){i[d]=[m,y.replacement].join(""),o.push(p);const k=y.getExtraValues;A=k?k(w):[],A.length&&k?(i[d]+=" ",A.forEach((N,R)=>{R&&i.push(" ")}),a.push(N=>{const R=N[p],z=k(R);return{index:p,values:z}}),i.push(l)):i[d]+=l}y||i.push(l);const D=e.raw[c];y?(s[d]=[s[d],y.replacement,D].join(""),A.length&&A.forEach(()=>{s.push("")})):s.push(D)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function V2(...[e,t,r]){if(qa(r))return{replacement:r.tagName,getExtraValues:void 0}}function U2(e,t){return r0(e,t,V2)}function S(e,...t){const r=t0(e,t,()=>U2(e,t));return Ri(r.strings,...r.values)}const W2={allowPolymorphicState:!1};function n0(e,t){const r=e.instanceState;J(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&J(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function Ec(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class j2 extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function za(){return e=>class extends j2{static type=e;_type=e;constructor(t){super(e,t)}}}function yt(){return za()}function q2(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=za()([e,n].join("-"));return r[n]=i,r},{}):{}}function z2(e){return e?Be(e,t=>t):{}}function i0(e,t){t in e||P2()(e,t)}function G2(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Ac(e,t){const r=e;function n(o){t?G2(o,e,e.tagName):i0(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,u){n(a);const l=r[a];function c(m){o[a]=m,r[a]=m}const d=e.observablePropertyListenerMap[a];if(l!==u&&yo(l)&&d&&l.removeListener(d),yo(u))if(d)u.listen(!1,d);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else yo(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function H2({hostClassNames:e,cssVars:t}){return{hostClasses:Be(e,(r,n)=>({name:me(n),selector:me(`:host(.${n})`)})),cssVars:t}}function K2({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&J(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function Z2({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){J(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Y2(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function Ga(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...W2,...e.options},r=q2(e.tagName,e.events),n=z2(e.hostClasses);e.hostClasses&&Ec(e.tagName,e.hostClasses),e.cssVars&&Ec(e.tagName,e.cssVars);const i=e.cssVars?ar(e.cssVars):{},s=Y2(e.slotNames),o=typeof e.styles=="function"?e.styles(H2({hostClassNames:n,cssVars:i})):e.styles||S``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends I2{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return Z2({element:this,eventsMap:r,cssVars:i,slotNamesMap:s})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");J(m).forEach(p=>{i0(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=a(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return K2({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=as(c,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,Ne(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){n0(this,c)}observablePropertyListenerMap={};instanceInputs=Ac(this,!1);instanceState=Ac(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:Tw(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Ha(...e){return Sr.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return Ga({...r,options:{...r.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cc=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},J2=lr(class extends Vt{constructor(e){if(super(e),e.type!==Ms.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,s[o]=r(a,o),o++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=M2(e),{values:s,keys:o}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,c,d=0,m=i.length-1,p=0,w=s.length-1;for(;d<=m&&p<=w;)if(i[d]===null)d++;else if(i[m]===null)m--;else if(a[d]===o[p])u[p]=gr(i[d],s[p]),d++,p++;else if(a[m]===o[w])u[w]=gr(i[m],s[w]),m--,w--;else if(a[d]===o[w])u[w]=gr(i[d],s[w]),bn(e,u[w+1],i[d]),d++,w--;else if(a[m]===o[p])u[p]=gr(i[m],s[p]),bn(e,i[d],i[m]),m--,p++;else if(l===void 0&&(l=Cc(o,p,w),c=Cc(a,d,m)),l.has(a[d]))if(l.has(a[m])){const y=c.get(o[p]),A=y!==void 0?i[y]:null;if(A===null){const D=bn(e,i[d]);gr(D,s[p]),u[p]=D}else u[p]=gr(A,s[p]),bn(e,i[d],A),i[y]=null;p++}else bo(i[m]),m--;else bo(i[d]),d++;for(;p<=w;){const y=bn(e,u[w+1]);gr(y,s[p]),u[p++]=y}for(;d<=m;){const y=i[d++];y!==null&&bo(y)}return this.ut=o,x2(e,u),Je}}),Q2=J2;function Ns(e,t){return qn(e,t),e.element}function X2(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function qn(e,t){const r=X2(e),n=r?`: in ${r}`:"";if(e.type!==Ms.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function eb(e){const t=lr(class extends Vt{element;constructor(r){super(r),this.element=Ns(r,e)}render(r){return this.element.setAttribute(e,r),Je}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Y(e,t){return tb(e,t)}const tb=lr(class extends Vt{element;lastListenerMetaData;constructor(e){super(e),this.element=Ns(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Je}}),$c="onDomCreated",Sc=lr(class extends Vt{element;constructor(e){super(e),qn(e,$c)}update(e,[t]){qn(e,$c);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),vo="onResize",s0=lr(class extends Vt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),qn(e,vo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${vo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){qn(e,vo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Ve(e,t,r){return L2(e,()=>t,()=>r)}const{attributeDirective:rb}=eb("data-test-id"),$n=rb;J({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function o0(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:(...n)=>i=>(t(i),Ha(...n)(r(i))),defineElementNoInputs:n=>(t(n),Ga(r(n)))}}function nb(e,t){return ib(void 0,e)}const ib=lr(class extends Vt{element;constructor(e){super(e),this.element=Ns(e,"assign")}render(e,t){return n0(this.element,t),Je}}),sb={};function ob(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=a0(i,s);if(o&&E.isString(r))return{tagName:r,tagInterpolationKey:va(sb,r,()=>({tagName:r}))}}return r})}function a0(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function ab(...[e,t,r]){const n=ea(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=a0(e,t),o=qa(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=ea(u)?u.inputs:void 0;return[i&&l?nb(l):void 0].filter(E.isTruthy)}}}function ub(e){}function lb(e){return r0(e.strings,e.values,ab,ub)}function b(e,...t){const r=ob(e,t),n=e1(e,...r),i=t0(e,r,()=>lb(n));return{...n,strings:i.strings,values:i.values}}function u0(e){return Be(e,(t,r)=>r instanceof Q?me(r.toString({format:"hex"})):u0(r))}const cb="dodgerblue";function ta(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Do({background:e,foreground:t}){return{background:e??new Q(ta(t)),foreground:t??new Q(ta(e))}}function db(e){return e==="black"?"white":"black"}const fb={black:{foregroundFaint1:new Q("#ccc"),foregroundFaint2:new Q("#eee")},white:{foregroundFaint1:new Q("#ccc"),foregroundFaint2:new Q("#eee")}},hb={black:{backgroundFaint1:new Q("#666"),backgroundFaint2:new Q("#444")},white:{backgroundFaint1:new Q("#ccc"),backgroundFaint2:new Q("#fafafa")}};function kc({themeColor:e=cb,themeStyle:t="light"}={}){const r=new Q(e),n=new Q(t==="dark"?"black":"white"),i=ta(n),s=new Q(i),o={nav:{hover:Do({background:r.clone().set({"hsl.l":93})}),active:Do({background:r.clone().set({"hsl.l":90})}),selected:Do({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...hb[db(i)],foreground:s,...fb[i]}};return u0(o)}var Pt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(Pt||{});async function ra(e=1){const t=new td;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function mb(e){return[...e.children,...e.shadowRoot?.children??[]]}function pb(e){return e.matches(":focus")}function ns(e){if(e instanceof ShadowRoot)return ns(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:ns(t)}function l0(e,t){if(t(e))return e;const r=ns(e);if(r)return l0(r,t)}async function gb(e){return wb(e,1)}async function wb(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{Sr.isLengthAtLeast(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function Sn(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}function yb(e){const t=ns(e);return t&&l0(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}const bb={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},vb=Object.keys(bb),Db={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Eb=Object.keys(Db),Ab={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Cb=Object.keys(Ab);Array.from(new Set([...vb,...Cb,...Eb].sort()));function $b({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=s.codePointAt(o);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const Sb=Pf(32);function Vi(e){return e.join(Sb)}function c0(e){if(!e.length)return[];const t=Vi(e),r=c0(e.slice(0,-1));return[t,...r]}const kb=["error","errors"];function Fb(e){return kb.includes(e)}function Tb({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(o=>(n(o),Vi(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&Fb(t),o=Vi(i.fullUrlBreadcrumbs);if($b({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[o]){const u=c0(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(i=>{const s=Vi(i.fullUrlBreadcrumbs),o=r[s];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class Ka extends Error{name="SpaRouterError"}class Fc extends Ka{name="GlobalUrlEventsConsolidationError"}class xb extends Ka{name="SanitizationDepthMaxed"}ot({paths:[""],search:Ge(X(void 0,Cs({keys:"",values:[""],required:!1}))),hash:Ge(X(void 0,""))});const Mb=ot({basePath:X("",void 0),sanitizeRoute:e=>e,maxListenerCount:X(1,void 0),disableWarnings:X(void 0,!1),isPaused:X(!1,void 0)}),Eo="://";function Za(...e){const t=e.join("/"),[r,n=""]=t.includes(Eo)?t.split(Eo):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const c=l[u+1];let d=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,w=c==="?";if(m||p){i=!0;let y=!1;const A=l.slice(u+2).reduce((D,k)=>(k.includes("#")&&(y=!0),y?D.concat(k):[D,k].join("&")),"");d=[a,c,w?jr({value:A,prefix:"&"}):A].join("")}return o.concat(d)},[]);return[r,r?Eo:"",s.join("/")].join("")}var nn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(nn||(nn={}));var sn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(sn||(sn={}));const Nb=ot({encoding:Ge(X(void 0,Zo(nn))),searchParamStrategy:Ge(X(void 0,Zo(sn)))});function Ci(e,t){return e.map(r=>{if(r!=null)return zr(String(r),t)}).filter(r=>r!=null)}function zr(e,t){return t?.encoding===nn.Decode?decodeURIComponent(e):t?.encoding===nn.Encode?encodeURIComponent(e):e}const Bb=ot(Cs({keys:"",values:[""],required:!0}));function Pb(e,t,r){const n=r?.searchParamStrategy===sn.Clear?{}:Be(e,(o,a)=>E.isString(a)?[a]:a),i=Be(t,(o,a)=>{if(r?.searchParamStrategy===sn.Append){const u=n[o],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return Ci([...l,...c],r)}else return Ci(l,r)}else return E.isArray(a)?Ci(a,r):a?Ci([a],r):void 0});return ws({...n,...i},(o,a)=>!!a)}function d0(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=Ew(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=f0({options:t,key:o,value:a}),l=va(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function Lb(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function Ib(e,t){const r=gs(Object.entries(e),([n,i])=>{const s=Lb(i);return s?.length?s.map(o=>{const a=f0({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Ye({value:r.join("&"),prefix:"?"}):""}function f0({options:e,key:t,value:r}){return{key:zr(t,e),value:zr(String(r),e)}}function h0({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",Bs({hostname:t,port:i}),Ya({hash:e,pathname:n,search:o})].join("")}function m0({pathname:e}){const t=jr({value:e,prefix:"/"});return t?t.split("/"):[]}function Ya({hash:e,pathname:t,search:r}){return[Ye({value:t,prefix:"/"}),r?Ye({value:r,prefix:"?"}):"",e?Ye({value:e,prefix:"#"}):""].join("")}function Bs({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function p0({hostname:e,port:t,protocol:r}){return[r,Bs({hostname:e,port:t})].filter(E.isTruthy).join("://")}function Gr(e,t){const r=E.isString(e)?jr({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Ye({value:zr(n,t),prefix:"#"}):"",s=r.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?Ye({value:zr(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=d!==m,[w,...y]=p?d.split(":").reverse():[],A=y.toReversed().join("").replace(/[/:]/g,"")||"",D=w?.replace(/[/:]/g,"")||"",k=Dw(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),N=k[0]?.endsWith("]")?"":k[1]===":"&&k[0]||"",z=m.replace(new RegExp(`:${N}($|/)`),"$1").replace(/\/.*/,""),ke=m.replace(/^[^/]*(\/|$)/,"$1"),ut=zr(ke.replace(/^[^/]*(?:\/|$)/,"/"),t),Pe=Bs({hostname:z,port:N}),je=p0({hostname:z,port:N,protocol:l}),bt=h0({hash:i,hostname:z,password:D,pathname:ut,port:N,protocol:l,search:a,username:A}),At=d0(a),oi=m0({pathname:ut});return{fullPath:Ya({hash:i,pathname:ut,search:a}),hash:i,host:Pe,hostname:z,href:bt,origin:je,password:D,pathname:ut,paths:oi,port:N,protocol:l,search:a,searchParams:At,username:A}}ot({hash:Ge(X(void 0,"")),search:Ge(X(void 0,"",Cs({keys:"",required:!1,values:X(null,void 0,"",-1,!1,0n)}))),hostname:Ge(X(void 0,"")),pathname:Ge(X(void 0,"")),paths:Ge(X(void 0,[""])),protocol:Ge(X(void 0,"")),username:Ge(X(void 0,"")),password:Ge(X(void 0,"")),port:Ge(X(void 0,"",-1))});function Rb(e,t,r){const n=!!r,i=t==null||qh(t,Nb),s=i?Gr(""):E.instanceOf(e,URL)||E.isString(e)?Gr(e):e,o=i?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?ws(Gr(o),(y,A)=>E.isTruthy(A)):o,l=n?r:i?t:void 0,c=Be(s,(y,A)=>{if(!E.hasKey(u,y))return A;const D=u[y];return E.isNumber(D)?String(D):E.isString(D)?y==="hash"&&D?Ye({value:D,prefix:"#"}):y==="pathname"?Ye({value:D,prefix:"/"}):D:A});E.hasKey(u,"paths")&&u.paths&&(c.pathname=Za(a?s.pathname:"",...u.paths));const d=E.isString(u.search)?d0(Ye({value:u.search,prefix:"?"})):If(u.search||{}),m=Pb(c.searchParams,d,{...l,encoding:nn.None}),p=Ib(m,l);return{...c,searchParams:m,search:p,paths:m0(c),fullPath:Ya(c),host:Bs(c),origin:p0(c),href:h0({...c,search:p})}}const Ob=ot({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:Bb,hash:"",fullPath:"/",href:"/"},!0);({...Ob.defaultValue});const _b=0;function g0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==_b)}const Ps="locationchange",Nt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Tc=Nt?.pushState;function xc(...e){if(!Tc)return;const t=Tc.apply(Nt,e);return globalThis.dispatchEvent(new Event(Ps)),t}const Mc=Nt?.replaceState;function Nc(...e){if(!Mc)return;const t=Mc.apply(Nt,e);return globalThis.dispatchEvent(new Event(Ps)),t}function Vb(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Nt)){{if(Nt.pushState===xc)throw new Fc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Nt.replaceState===Nc)throw new Fc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Nt.pushState=xc,Nt.replaceState=Nc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ps))})}}function $i(e,t){const r=Gr(e),n=jr({value:jr({value:r.pathname,prefix:Ye({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?jr({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class Ub{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){zh(t,Mb),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Kh({defaultValue:r,equalityCheck:()=>!1}),Vb(),this.removeGlobalListener=zf(globalThis,Ps,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new xb("Looping route sanitization detected; aborting window URL change listener.");const n=$i(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);E.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Za(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute($i(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...$i(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),s=this.routeIncludesBasePath($i(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return Rb(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?Ye({value:s.hash,prefix:"#"}):""},{searchParamStrategy:sn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Gr(n);return this.params.isPaused||!r.force&&E.jsonEquals(Gr(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return g0(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Ka(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function Wb(e){return new Ub({basePath:e,sanitizeRoute(t){return{paths:jb(t.paths),hash:void 0,search:void 0}}})}function jb(e){const t=e[0];if(E.isEnumValue(t,ft)){if(t===ft.Book)return[ft.Book,...e.slice(1)];if(t===ft.Search)return e[1]?[t,e[1]]:[ft.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Jr.paths}const is=za()("element-book-change-route"),Bc="vira-",{defineElement:qb}=o0({assertInputs:e=>{if(!e.tagName.startsWith(Bc))throw new Error(`Tag name should start with '${Bc}' but got '${e.tagName}'`)}}),Ut=qb,C=ar({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),zb=Q;function Gb(e){try{if(!e)throw new Error("invalid empty color");return new zb(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function ae({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Pc(e,t){const r=J(t).map(n=>{const i=t[n],s=Gb(i);return`${C[n].name}: ${s.toString()};`}).join(" ");return ae({name:e.name,svgTemplate:b`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const w0=ae({name:"Check24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mt=ar({"vira-form-input-radius":"8px"}),Ls=S`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,gt=ar({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Cr=ar({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":S`calc(${mt["vira-form-input-radius"].value} + 4px)`});function Ja({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=me(Of(n+r+t));return S`
        ${me(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Cr["vira-focus-outline-color"].value};
            border-radius: ${Cr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Qt=ar({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Cr["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),Hb=S`
    padding: 0;
    margin: 0;
`,Jt=S`
    ${Hb};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Lc=S`#e2e2e2`,y0={menuShadow:S`
        filter: drop-shadow(0px 5px 5px ${Lc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:S`
        filter: drop-shadow(0px -5px 5px ${Lc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},zn=S`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P=Ut()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>S`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Bt=Ut()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            ${zn};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${P} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${P} {
            transition: opacity
                ${gt["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${mt["vira-form-input-radius"].value}
                ${mt["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${mt["vira-form-input-radius"].value}
                ${mt["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return b`
            <div class="option">
                <${P.assign({icon:w0})}></${P}>
                <slot>${e.label}</slot>
            </div>
        `}}),na="group";function Kb(e,t,r){return[e,t,r].filter(n=>n!==void 0).join(",")||""}function Zb(e){const[t,r,n]=e.split(",");return r?{type:"2d",xCord:ol(t),yCord:ol(r),isGroup:n===na}:{type:"1d",isGroup:t===na}}function Yb(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const Jb=lr(class extends Vt{element;lastKey;constructor(e){super(e),this.element=Ns(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Je}}),ia={name:"data-nav"},Or="nav-activated",sa={js:{click(e){return`${e}.${Or}`},selected(e){return`${e}:focus`}},css:{click(e){return S`
                ${me(sa.js.click(e))}
            `},selected(e){return S`
                ${me(sa.js.selected(e))}
            `}}},Qb={activateKeys:["Space","Return","Enter"]};function Xb(){b0=If(Qb)}let b0;Xb();function Ic(e){return b0.activateKeys.some(t=>{const r=t.toLowerCase();return r===e.key.toLowerCase()||r===e.code.toLowerCase()})}function ev(e,t){const r=Kb(e,t);return Jb(`${e}-${t}`,n=>{const i=n.hasAttribute("tabindex")||e===na?{}:{tabindex:0},s={[ia.name]:r,...i};Sr.instanceOf(n,HTMLElement),Yb(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(Or)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(Or)},!0),n.addEventListener("blur",()=>{n.classList.remove(Or)},!0),n.addEventListener("keydown",o=>{o.target===n&&Ic(o)&&n.classList.add(Or)},!0),n.addEventListener("keyup",o=>{o.target===n&&Ic(o)&&n.classList.remove(Or)},!0)})}function tv(e,t){return v0([],e,t)}function v0(e,t,r){return!t||t.type==="child"?!1:t.type==="1d"?Rc(t.children,t,0,e,r):t.children.some((n,i)=>Rc(n,t,i,e,r))}function Rc(e,t,r,n,i){return e.some((s,o)=>{const a=E.hasKey(t,"isRoot")&&t.isRoot?n:[t,...n];return i(a,s,{x:o,y:r})?!0:v0(a,s,i)})}function rv(e){return e.toReversed().find(t=>!t.isGroup)}function Gn(e){if(!e)return;let t,r,n;tv(e,(o,a,u)=>pb(a.element)?(t=o,r=a,n=u,!0):!1);const i=t?t[0]||e:void 0,s=t?rv(t)||e:void 0;if(!(!r||!i||!n||!s||!t))return{node:r,parent:i,nonGroupParent:s,ancestors:t}}function Hn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function Oc(e,t){return e>t}function _c(e,t){return e<t}var tt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(tt||(tt={}));var le;(function(e){e.Enter="enter",e.Exit="exit",e.Navigate="navigate",e.Pibling="pibling"})(le||(le={}));function Qa(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?Qa(t):t}function Vc(e,t,r){if(!e)return{success:!1,reason:"no nav tree",direction:t,navAction:le.Navigate};const n=Gn(e);if(!n){const a=Qa(e);return a?(Hn(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element,direction:t,navAction:le.Navigate}):{success:!1,reason:"no default element to focus",direction:t,navAction:le.Navigate}}const{nextNode:i,requiresWrapping:s}=D0(n.parent,t,n.node),o=r?!0:!s;return i&&o?(Hn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:t,navAction:le.Navigate}):i?o?{success:!1,reason:"no conditions matched",direction:t,navAction:le.Navigate}:{success:!1,reason:"wrapping blocked",direction:t,navAction:le.Navigate}:{success:!1,reason:"failed to find node to focus",direction:t,navAction:le.Navigate}}function D0(e,t,r){if(t===tt.Down||t===tt.Up){const i=t===tt.Down?_c:Oc,s=t===tt.Down?1:-1,o=e.type==="1d"?0:io(r.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?io(r.coords.x+s,{min:0,max:e.children.length-1}):a&&r.coords.x>=a.length?a.length-1:r.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],c=e.type==="1d"?i(u.x,r.coords.x):i(u.y,r.coords.y);return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:c}}else{const i=t===tt.Right?_c:Oc,s=t===tt.Right?1:-1,o=e.type==="1d"?e.children:e.children[r.coords.y];Sr.isDefined(o,`No current row found at y index: '${r.coords.y}'`);const a={x:io(r.coords.x+s,{min:0,max:o.length-1}),y:r.coords.y},u=i(a.x,r.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===r.element?void 0:l,requiresWrapping:u}}}function nv(e,t,r,n){const i=E.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from",direction:r,navAction:le.Pibling};const{nextNode:o,requiresWrapping:a}=D0(i,r,s),u=o?.isGroup?Qa(o):o,l=n?!0:!a;return u?l?(Hn(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a,direction:r,navAction:le.Pibling}):{success:!1,reason:"wrapping blocked",direction:r,navAction:le.Pibling}:{success:!1,reason:"no node to navigate to",direction:r,navAction:le.Pibling}}function iv(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:le.Enter};const t=Gn(e);if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:le.Enter};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:le.Enter};const r=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return r?(Hn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:le.Enter}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:le.Enter}}function sv(e){if(!e)return{success:!1,reason:"no nav tree",direction:void 0,navAction:le.Exit};const t=Gn(e);if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:le.Exit};const r=t.nonGroupParent;return r.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to",direction:void 0,navAction:le.Exit}:(Hn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:le.Exit})}class ov extends cn()("nav-exit-event"){}class av extends cn()("nav-exit-event"){}class uv extends cn()("navigate-event"){}class lv extends cn()("navigate-pibling-event"){}function E0(e){const t=[];return mb(e).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=E0(r),i=r.hasAttribute(ia.name)?Zb(r.getAttribute(ia.name)||""):void 0;if(!i){t.push(...n);return}t.push({children:n,element:r,navValue:i})}),t}function cv(e){const t=E0(e);return A0(t)}function A0(e){if(!E.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(r=>{const n=r.children.length?A0(r.children):void 0;if(r.navValue.isGroup&&!n){const o=new Error("group nav has no children");throw console.error(o,r),o}const i=dv(r,t.children),s=n?{element:r.element,children:n.children,type:n.type,isGroup:r.navValue.isGroup,coords:i}:{element:r.element,type:"child",coords:i,isGroup:!1};if(r.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(Sr.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(r.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==r.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,r),o}}),t}function dv(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}class C0 extends Ea{rootElement;constructor(t){super(),this.rootElement=t}getCurrentlyFocused(){return Gn(this.buildNavTree())}buildNavTree(){return cv(this.rootElement)}navigate({direction:t,allowWrapping:r}){const n=Vc(this.buildNavTree(),t,r);return this.dispatch(new uv({detail:n})),n}enterInto(){const t=iv(this.buildNavTree());return this.dispatch(new av({detail:t})),t}exitOutOf(){const t=sv(this.buildNavTree());return this.dispatch(new ov({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){const n=this.buildNavTree(),i=Gn(n),o={...!i||!n?Vc(n,r,t):nv(n,i,r,t),navAction:le.Pibling};return this.dispatch(new lv({detail:o})),o}}const fv={option:"dropdown-option"},Si=Ut()({tagName:"vira-dropdown-options",events:{selectionChange:yt()},styles:S`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${mt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Qt["vira-form-background-color"].value};
            border: 1px solid ${Qt["vira-form-border-color"].value};
            color: ${Qt["vira-form-foreground-color"].value};
            ${y0.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${sa.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Qt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Bt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Ls};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=i.template||b`
                    <${Bt.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Bt}>
                `;return b`
                <div
                    class="dropdown-item ${jn({disabled:!!i.disabled})}"
                    ${$n(fv.option)}
                    title=${Zh(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?se:ev()}
                    ${Y("mousedown",o=>{o.stopPropagation()})}
                    ${Y("mouseup",o=>{o.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return b`
            <slot>${n}</slot>
        `}}),hv=ae({name:"Chat24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),$0=ae({name:"ChevronUp24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${C["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),S0=ae({name:"CloseX24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mv=ae({name:"Commit24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),pv=ae({name:"Document24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),k0=ae({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lt=ae({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),F0=ae({name:"EyeClosed24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),T0=ae({name:"EyeOpen24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),x0=ae({name:"Loader24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),gv=S`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${gt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Kn=ae({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${gv}
        </style>
        ${x0.svgTemplate}
    `}),Xa=ae({name:"Options24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wv=ae({name:"Pencil24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),yv=ae({name:"Shield24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),bv=ae({name:"SpeakerLoud24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),vv=ae({name:"SpeakerMedium24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Dv=ae({name:"SpeakerMuted24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ev=ae({name:"SpeakerQuiet24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Av=ae({name:"Star24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ss=ae({name:"StatusFailure24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Cv=ae({name:"StatusInProgress24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),$v=ae({name:"StatusSuccess24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),oa={Chat24Icon:hv,Check24Icon:w0,ChevronUp24Icon:$0,CloseX24Icon:S0,Commit24Icon:mv,Document24Icon:pv,Element16Icon:k0,Element24Icon:Lt,EyeClosed24Icon:F0,EyeOpen24Icon:T0,Loader24Icon:x0,LoaderAnimated24Icon:Kn,Options24Icon:Xa,Pencil24Icon:wv,Shield24Icon:yv,SpeakerLoud24Icon:bv,SpeakerMedium24Icon:vv,SpeakerMuted24Icon:Dv,SpeakerQuiet24Icon:Ev,Star24Icon:Av,StatusFailure24Icon:ss,StatusInProgress24Icon:Cv,StatusSuccess24Icon:$v};class Sv extends Kh{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Fv.includes(t.type),n=kv.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const kv=["blur","focusout","pagehide"],Fv=["focus","focusin","pageshow"],Tv=new Sv;function xv(e,t){return Tv.listen(e,t)}const Uc={top:0,left:0,right:0,bottom:0};class M0 extends qf("hide-pop-up"){}class N0 extends cn()("nav-select"){}class Mv{listenTarget=new Ea;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const r=new C0(t);this.cleanupCallbacks=[xv(!1,n=>{n||this.removePopUp()}),ul("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),ul("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:tt.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:tt.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:tt.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:tt.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new N0({detail:s.node.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new M0)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=yb(t);Sr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Be(Uc,p=>s[p]),d=Be(Uc,p=>{const w=l[p],y=c[p];return Math.abs(w-y)}),m=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(t),{popDown:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function Nv({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}function Bv(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Mw(r)}`)}function Wc(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function jc({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const ki={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},kn=Ut()({tagName:"vira-dropdown",state(){return{showPopUpResult:void 0,popUpManager:new Mv,navController:void 0}},hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Cr["vira-focus-outline-color"].name}: ${Qt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Jt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${mt["vira-form-input-radius"].value};
            transition: border-radius
                ${gt["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Ja({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${gt["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Qt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${zn};
            border-radius: inherit;
            background-color: ${Qt["vira-form-background-color"].value};
            color: ${Qt["vira-form-foreground-color"].value};
        }

        .open-upwards ${Si} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${y0.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Ls}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:yt(),openChange:yt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(M0,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Sr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(N0,o=>{const a=o.detail.x,u=n.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||jc({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Wc(u.id,n.selected,!!n.isMultiSelect)))}),t({navController:new C0(r)})},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){Bv(n.options);function o(w){jc(w,{dispatch:y=>{e(new t.openChange(y))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=Nv(n),u=n.icon?b`
                  <${P.assign({icon:n.icon})}
                      ${$n(ki.icon)}
                  ></${P}>
              `:"",l=r.showPopUpResult?r.showPopUpResult.popDown?S`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:S`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!r.showPopUpResult})}const d=!a.length,m=n.selectionPrefix&&!d?b`
                      <span class="selected-label-prefix" ${$n(ki.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",p=d?n.placeholder||"":a.map(w=>w.label).join(", ");return b`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${jn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${$n(ki.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Y("keydown",w=>{!r.showPopUpResult&&w.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Y("click",w=>{w.detail===0&&c()})}
                ${Y("mousedown",w=>{w.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${jn({"using-placeholder":d})}"
                        title=${Zh(d?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:$0})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Ve(!!r.showPopUpResult,b`
                            <${Si.assign({options:n.options,selectedOptions:a})}
                                ${Y(Si.events.selectionChange,w=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Wc(w.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${$n(ki.options)}
                            ></${Si}>
                        `)}
                </div>
            </button>
        `}}),ce=Ha()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>S`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return b`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var B0=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(B0||{});const ye=Ut()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>S`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${zn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Cr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Ls};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Jt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${mt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${gt["vira-interaction-animation-duration"].value},
                background-color
                    ${gt["vira-interaction-animation-duration"].value},
                border-color ${gt["vira-interaction-animation-duration"].value};
        }

        ${Ja({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?b`
                  <${P.assign({icon:e.icon})}></${P}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),St=Ut()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Jt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${gt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:yt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?S`
                  height: ${e.contentHeight}px;
              `:S`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${Y("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${s0(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),zt=Ut()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:yt(),imageError:yt()},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?b`
                  <slot class="status-wrapper" name=${s.error}>
                      <${P.assign({icon:ss})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[o]?void 0:b`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${P.assign({icon:Kn})}></${P}>
                    </slot>
                `;return b`
            ${Ve(!!a,a)}
            <img
                class=${jn({hidden:!!a})}
                ${Y("load",async()=>{e._debugLoadDelay&&await Ln(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${Y("error",async u=>{e._debugLoadDelay&&await Ln(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function aa({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>aa({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Pv({value:e,allowed:t,blocked:r}){const n=t?aa({input:e,matcher:t}):!0,i=r?aa({input:e,matcher:r}):!1;return n&&!i}function ua(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(Pv({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Lv({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const s=Sn(r,HTMLInputElement),o=E.hasKey(r,"data")&&Hg.isString(r.data)||"";if(o){const{blocked:u}=ua({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=ua({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var P0=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(P0||{});const ue=Ut()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Cr["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>S`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Cr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ls};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Jt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${zn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Jt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${mt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${gt["vira-interaction-animation-duration"].value};
            }

            label {
                ${Jt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${mt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ja({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Jt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${zn};
            }

            button {
                ${Jt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${gt["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,events:{valueChange:yt(),inputBlocked:yt()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=ua({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?b`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:"",a=e.fitText?S`
                  width: ${r.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type==="password";return b`
            <label>
                ${o}
                ${Ve(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${s0(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${Iv(e.type,r.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Y("input",l=>{Lv({inputs:e,previousValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Ve(!!(e.showClearButton&&e.value),b`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${P.assign({icon:S0})}></${P}>
                        </button>
                    `)}
                ${Ve(e.type==="password",b`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${P.assign({icon:r.showPassword?T0:F0})}></${P}>
                        </button>
                    `)}
                ${Ve(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Iv(e,t){return e==="password"&&t?"text":e||"text"}const Fi=Ut()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>S`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return b`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return b`
                <a href=${r} rel="noopener noreferrer" ${Y("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:at}=o0(),rt=at()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>S`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return b`
            <a
                href=${r}
                ${Y("click",n=>{(!e.router||g0(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new is(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Rv(e,t){return e.entry.entryType===Se.Root?!1:e.entry.entryType===Se.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Tt=at()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${K["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${K["element-book-nav-hover-background-color"].value};
            color: ${K["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${K["element-book-nav-active-background-color"].value};
            color: ${K["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${rt.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${K["element-book-nav-selected-background-color"].value};
            color: ${K["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${P} {
            display: inline-flex;
            color: ${K["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Rv(r,e.selectedPath))return;const n=S`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${rt.assign({router:e.router,route:{paths:[ft.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${jn({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ve(qr(r,Se.ElementExample),b`
                                    <${P.assign({icon:k0})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${rt}>
                </li>
            `});return b`
            <${rt.assign({route:Jr,router:e.router})}>
                <slot name=${Pt.NavHeader}>Book</slot>
            </${rt}>
            <ul>
                ${t}
            </ul>
        `}});async function Ov(e){await ra(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await gb(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const or=at()({tagName:"book-error",styles:S`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>b`
                <p>${r}</p>
            `)}}),Zn=at()({tagName:"book-page-controls",events:{controlValueChange:yt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${K["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ue} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===G.Hidden)return"";const o=_v(e.currentValues[n],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return b`
                    <div class="control-wrapper">
                        ${Ve(s===0,b`
                                <${P.assign({icon:Xa})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function _v(e,t,r){return xr(t,G.Hidden)?"":xr(t,G.Checkbox)?b`
            <input
                type="checkbox"
                ?checked=${e}
                ${Y("input",n=>{const i=Sn(n,HTMLInputElement);r(i.checked)})}
            />
        `:xr(t,G.Color)?b`
            <input
                type="color"
                .value=${e}
                ${Y("input",n=>{const i=Sn(n,HTMLInputElement);r(i.value)})}
            />
        `:xr(t,G.Text)?b`
            <${ue.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Y(ue.events.valueChange,n=>{r(n.detail)})}
            ></${ue}>
        `:xr(t,G.Number)?b`
            <input
                type="number"
                .value=${e}
                ${Y("input",n=>{const i=Sn(n,HTMLInputElement);r(i.value)})}
            />
        `:xr(t,G.Dropdown)?b`
            <select
                .value=${e}
                ${Y("input",n=>{const i=Sn(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>b`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:b`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const qc=at()({tagName:"book-breadcrumbs",styles:S`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,o=i.slice(0,n+1),a=s?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${rt.assign({route:{hash:void 0,search:void 0,paths:[ft.Book,...o]},router:e.router})}>
                    ${r}
                </${rt}>
                ${a}
            `}):b`
                &nbsp;
            `}}),Ao=at()({tagName:"book-breadcrumbs-bar",styles:S`
        :host {
            border-bottom: 1px solid
                ${K["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${K["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return b`
            ${Ve(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${qc.assign({currentRoute:e.currentRoute,router:e.router})}></${qc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await Ln({milliseconds:200}),n.value===i&&(n.value?t(new is({paths:[ft.Search,encodeURIComponent(n.value)]})):t(new is(Jr)))})}
            />
        `}}),zc=at()({tagName:"book-entry-description",styles:S`
        :host {
            color: ${K["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${K["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),Gc=at()({tagName:"book-page-wrapper",styles:S`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${rt} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[ft.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Lf(e.pageNode.entry.errors):void 0;return n&&console.error(n),b`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${rt.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${rt}>
                    ${n?b`
                              <${or.assign({message:n.message})}></${or}>
                          `:b`
                              <${zc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${zc}>
                              <${Zn.assign({config:e.pageNode.entry.controls,currentValues:$a(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Zn}>
                          `}
                </div>
            </div>
        `}}),Ti=at()({tagName:"book-element-example-controls",styles:S`
        :host {
            display: flex;
            color: ${K["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[ft.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${rt.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${rt}>
        `}}),Hc=Symbol("unset-internal-state"),Kc=at()({tagName:"book-element-example-viewer",state(){return{isUnset:Hc}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Lf(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Hc&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return b`
                ${Ve(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Ne(n)),console.error(n),b`
                <${or.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ne(n)}`})}></${or}>
            `}},options:{allowPolymorphicState:!0}}),Zc=at()({tagName:"book-element-example-wrapper",styles:S`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ti} {
            color: ${K["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ti} {
            color: ${K["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${Ti.assign(Aw(e,["currentPageControls"]))}></${Ti}>
                <${Kc.assign(e)}></${Kc}>
            </div>
        `}});function L0(e,t,r,n){const i=Oo(r,n),s=[];if(i){const o=L0(e,t,i,n);o&&s.push(o)}if(qr(r,Se.Page)&&!e.includes(r)){const o=$a(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:o,breadcrumbs:Be(o,()=>r.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Vv({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[b`
                No results
            `];const o=E.isLengthAtLeast(e,1)?L0(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?b`
                  <${Zn.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${Zn}>
              `:se,u=Q2(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(qr(l,Se.Page))return b`
                    <${Gc.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Gc}>
                `;if(qr(l,Se.ElementExample)){const c=$a(i,l.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${Zc.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry"
                    ></${Zc}>
                `}else return qr(l,Se.Root)?se:b`
                    <${or.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${or}>
                `});return[a,u]}const Lr=at()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:S`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Ao} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${gt["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:yt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=_o(e.currentRoute.paths),o=Vv({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return b`
            <${Ao.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${Ao}>

            ${Ve(e.showLoading,b`
                    <div
                        ${Sc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:Kn})}></${P}>
                    </div>
                    ${Ve(!!n.lastElement,b`
                            ${n.lastElement}
                            <slot name=${Pt.Footer}></slot>
                        `)}
                `,b`
                    <div
                        ${Sc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${Pt.Footer}></slot>
                `)}
        `}});function Uv(e,t,r){const n=Yc(e,t);return n.length?n:(r(Jr),Yc(e,Jr.paths))}function Yc(e,t){return e.filter(r=>Pw({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Co=Ha()({tagName:"element-book-app",state(){return{currentRoute:Jr,router:void 0,loading:!0,colors:{config:void 0,theme:kc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:yt()},styles:S`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${K["element-book-page-background-color"].value};
            color: ${K["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Lr} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Tt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Jc(e,_o(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(c){return{...e.currentRoute,...c}}function a(c){const d=o(c);return!E.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=o(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=Wb(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,k=>{n({currentRoute:k})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const D=kc(c);n({colors:{config:c,theme:D}}),h1(r,D)}const d=t._debug??!1,m=_w({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Zf(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=_o(e.currentRoute.paths),y=(p?Tb({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??Uv(m.flattenedNodes,e.currentRoute.paths,l);u(y[0]?.entry.title);const A=e.treeBasedControls?.controls;return A?(t._debug&&console.info({currentControls:A}),b`
                <div
                    class="root"
                    ${Y(is,async D=>{const k=D.detail;if(!a(k))return;if(n({loading:!0}),l(k),!(r.shadowRoot.querySelector(Tt.tagName)instanceof Tt))throw new TypeError(`Failed to find child '${Tt.tagName}'`);await Jc(r,p,e.currentRoute)})}
                    ${Y(Zn.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const k=Uw(A,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:k}})})}
                >
                    <${Tt.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Pt.NavHeader}
                            slot=${Pt.NavHeader}
                        ></slot>
                    </${Tt}>
                    <${Lr.assign({controls:A,currentNodes:y,currentRoute:e.currentRoute,debug:d,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${Y(Lr.events.loadingRender,async D=>{await ra();const k=r.shadowRoot.querySelector(Lr.tagName);k?k.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Lr.tagName}' for scrolling.`),await ra(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Pt.Footer}
                            slot=${Pt.Footer}
                        ></slot>
                    </${Lr}>
                </div>
            `):b`
                    <${or.assign({message:"Failed to generate page controls."})}></${or}>
                `}catch(c){return console.error(c),b`
                <p class="error">${Ne(c)}</p>
            `}}});async function Jc(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Tt.tagName);if(!(n instanceof Tt))throw new TypeError(`Failed to find child '${Tt.tagName}'`);await Ov(n)}const Wt=st({title:"Elements",parent:void 0}),eu=st({parent:Wt,title:"Dropdown"}),Wv=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:b`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:S`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:S`
            ${Bt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],jv=st({title:Bt.tagName,parent:eu,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:G.Text,initValue:""}},defineExamples({defineExample:e}){Wv.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?b`
                            <${Bt.assign(n)}>
                                ${t.customTemplate}
                            </${Bt}>
                        `:b`
                            <${Bt.assign(n)}></${Bt}>
                        `}})})}}),Bn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],qv=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Bn,{id:42,label:"custom template",template:b`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Bn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:S`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:S`
            ${kn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Lt}}],zv=st({title:kn.tagName,parent:eu,controls:{Selected:{controlType:G.Dropdown,initValue:"",options:["",...Bn.map(e=>e.label)]},Prefix:{controlType:G.Text,initValue:""},"Force State":{controlType:G.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:G.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:G.Dropdown,initValue:"",options:["",...Object.keys(oa)]},Disabled:{controlType:G.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:G.Text,initValue:"Select something"}},defineExamples({defineExample:e}){qv.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Bn,selected:i.Selected?[Bn.find(o=>o.label===i.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?oa[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return b`
                        <${kn.assign(s)}
                            ${Y(kn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${kn}>
                    `}})})}}),Gv=st({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:G.Color,initValue:""},"Fill Color":{controlType:G.Color,initValue:""},"Stroke Width":{controlType:G.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(oa).forEach(t=>{e({title:t.name,styles:S`
                    :host(:hover) ${P} {
                        background-color: #f2f2f2;
                    }

                    ${P} {
                        padding: 8px;
                        border-radius: ${mt["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=S`
                        ${C["vira-icon-fill-color"].name}: ${me(r["Fill Color"]||"inherit")};
                        ${C["vira-icon-stroke-color"].name}: ${me(r["Stroke Color"]||"inherit")};
                        ${C["vira-icon-stroke-width"].name}: ${me(r["Stroke Width"]?Of(r["Stroke Width"]):"inherit")};
                    `;return b`
                        <${P.assign({icon:t})} style=${n}></${P}>
                    `}})})}}),Hv=st({parent:Wt,title:ce.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:G.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return b`
                    <${ce.assign({text:"Text here",bold:!1})}></${ce}>
                `}}),e({title:"Bold",render(){return b`
                    <${ce.assign({text:"Text here",bold:!0})}></${ce}>
                `}}),e({title:"Dynamic",render({controls:t}){return b`
                    <${ce.assign({text:"Text here",bold:t.bolded})}></${ce}>
                `}}),e({title:"Resized",styles:S`
                ${ce} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return b`
                    <${ce.assign({text:"Not Bolded",bold:!1})}></${ce}>
                    <${ce.assign({text:"Bolded",bold:!0})}></${ce}>
                `}}),e({title:"Alignment",styles:S`
                ${ce} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return b`
                    <${ce.assign({text:"Not Bolded",bold:!1})}></${ce}>
                    <${ce.assign({text:"Bolded",bold:!0})}></${ce}>
                `}}),e({title:"Stylized",styles:S`
                ${ce} {
                    text-decoration: underline;
                }
            `,render(){return b`
                    <${ce.assign({text:"Not Bolded",bold:!1})}></${ce}>
                    <${ce.assign({text:"Bolded",bold:!0})}></${ce}>
                `}})}}),Kv=st({parent:Wt,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:G.Color,initValue:ye.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:G.Color,initValue:ye.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:G.Color,initValue:ye.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:G.Color,initValue:ye.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const s=n??S``;e({title:r,styles:s,render({controls:o}){const a=S`
                        ${ye.cssVars["vira-button-primary-color"].name}: ${me(o["Primary color"]||"inherit")};
                        ${ye.cssVars["vira-button-secondary-color"].name}: ${me(o["Secondary color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-hover-color"].name}: ${me(o["Hover color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-active-color"].name}: ${me(o["Active color"]||"inherit")};
                    `;return b`
                        <${ye.assign({text:"hello",...i})}
                            style=${a}
                        ></${ye}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Xa}}),t({title:"outline",inputs:{buttonStyle:B0.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:S`
                ${ye} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:S`
                ${ye} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:S`
                :host {
                    ${ye.cssVars["vira-button-primary-color"].name}: pink;
                    ${ye.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ye.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ye.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return b`
                    <${ye.assign({text:"hello"})}></${ye}>
                `}})}}),Zv=st({title:St.tagName,parent:Wt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>b`
                        <${St.assign({expanded:!!r.expandedStates[i]})}
                            ${Y(St.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${St.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Y("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Ve(!!r.showMoreStates[i],b`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${St}>
                    `)}}),e({title:"wider examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>b`
                        <${St.assign({expanded:!!r.expandedStates[i]})}
                            ${Y(St.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${St.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Y("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Ve(!!r.showMoreStates[i],b`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${St}>
                    `)}})}}),Yv=st({title:P.tagName,parent:Wt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return b`
                    <${P.assign({icon:Lt})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return b`
                    <${P.assign({icon:Pc(Lt,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"fit container",styles:S`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return b`
                    <${P.assign({icon:Pc(Lt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}})}}),Jv=st({title:zt.tagName,parent:Wt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:S`
                    border-radius: 32px;
                `,loadingSlot:b`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:Kn,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:S`
                    border-radius: 32px;
                `,errorSlot:b`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:ss,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:S`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:b`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:Kn,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:b`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:ss,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:S`
                    ${zt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||S``}
                    }

                    ${r.allowReload?S`
                              ${zt} {
                                  cursor: pointer;
                              }

                              ${zt}:hover {
                                  border-color: #0055ff;
                              }
                          `:S``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return b`
                        <${zt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${Y("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Pf()}`})})}
                        >
                            ${r.loadingSlot?b`
                                      <div class="slot-wrapper" slot=${zt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?b`
                                      <div class="slot-wrapper" slot=${zt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${zt}>
                    `}})})}}),Qv=st({title:ue.tagName,parent:Wt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:G.Color,initValue:ue.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:G.Color,initValue:ue.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:G.Color,initValue:ue.cssVars["vira-input-border-color"].default},"Focus color":{controlType:G.Color,initValue:ue.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:G.Color,initValue:ue.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:s}){e({title:i,styles:S`
                    ${n||S``}
                `,state(){return{value:s.value}},render({state:o,updateState:a,controls:u}){const l={[String(ue.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(ue.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(ue.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(ue.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(ue.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},c=Be(l,(m,p)=>p||"inherit"),d=Object.entries(c).map(([m,p])=>[m,p].join(": ")+";").join(`
`);return b`
                        <${ue.assign({...s,value:o.value})}
                            style=${d}
                            ${Y(ue.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${ue}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Lt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:S`
                    ${ue} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Lt}},{title:"taller height",styles:S`
                    ${ue} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Lt}},{title:"shorter height",styles:S`
                    ${ue} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Lt}},{title:"max width",styles:S`
                    ${ue} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:S`
                    ${ue} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:P0.Password}}].forEach(t)}}),Xv=st({title:Fi.tagName,parent:Wt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:G.Color,initValue:""},"Hover color":{controlType:G.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const s=S`
                        ${Fi.cssVars["vira-link-hover-color"].name}: ${me(i["Hover color"]||"inherit")};
                        color: ${me(i["CSS Color"]||"inherit")};
                    `;return b`
                        <${Fi.assign(n)} style=${s}>My Link</${Fi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),eD=[Wt,Gv,eu,Hv,Kv,Zv,jv,zv,Yv,Jv,Qv,Xv].sort((e,t)=>e.title.localeCompare(t.title));Ga({tagName:"vira-book-app",styles:S`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Co} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return b`
            <${Co.assign({internalRouterConfig:{basePath:Za("element-vir","vira"),useInternalRouter:!0},pages:eD,themeColor:"#33ccff"})}>
                <h1 slot=${Pt.NavHeader}>Vira</h1>
            </${Co}>
        `}});
