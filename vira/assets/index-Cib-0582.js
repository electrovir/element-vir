(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Dt=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Dt||{});function ke(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ew(e){return ke(e).filter(t=>isNaN(Number(t)))}function Rn(e){return Ew(e).map(n=>e[n])}var Cw=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,xw=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Aw=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,ol={Space_Separator:Cw,ID_Start:xw,ID_Continue:Aw},Re={isSpaceSeparator(e){return typeof e=="string"&&ol.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||ol.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||ol.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Yl,Nt,dr,Wu,qr,_n,rt,zc,as;var Fw=function(t,n){Yl=String(t),Nt="start",dr=[],Wu=0,qr=1,_n=0,rt=void 0,zc=void 0,as=void 0;do rt=kw(),Iw[Nt]();while(rt.type!=="eof");return typeof n=="function"?Jl({"":as},"",n):as};function Jl(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let i=0;i<r.length;i++){const o=String(i),s=Jl(r,o,n);s===void 0?delete r[o]:Object.defineProperty(r,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in r){const o=Jl(r,i,n);o===void 0?delete r[i]:Object.defineProperty(r,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let J,Z,es,ar,re;function kw(){for(J="default",Z="",es=!1,ar=1;;){re=$r();const e=C0[J]();if(e)return e}}function $r(){if(Yl[Wu])return String.fromCodePoint(Yl.codePointAt(Wu))}function x(){const e=$r();return e===`
`?(qr++,_n=0):e?_n+=e.length:_n++,e&&(Wu+=e.length),e}const C0={default(){switch(re){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":x();return;case"/":x(),J="comment";return;case void 0:return x(),$e("eof")}if(Re.isSpaceSeparator(re)){x();return}return C0[Nt]()},comment(){switch(re){case"*":x(),J="multiLineComment";return;case"/":x(),J="singleLineComment";return}throw De(x())},multiLineComment(){switch(re){case"*":x(),J="multiLineCommentAsterisk";return;case void 0:throw De(x())}x()},multiLineCommentAsterisk(){switch(re){case"*":x();return;case"/":x(),J="default";return;case void 0:throw De(x())}x(),J="multiLineComment"},singleLineComment(){switch(re){case`
`:case"\r":case"\u2028":case"\u2029":x(),J="default";return;case void 0:return x(),$e("eof")}x()},value(){switch(re){case"{":case"[":return $e("punctuator",x());case"n":return x(),si("ull"),$e("null",null);case"t":return x(),si("rue"),$e("boolean",!0);case"f":return x(),si("alse"),$e("boolean",!1);case"-":case"+":x()==="-"&&(ar=-1),J="sign";return;case".":Z=x(),J="decimalPointLeading";return;case"0":Z=x(),J="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Z=x(),J="decimalInteger";return;case"I":return x(),si("nfinity"),$e("numeric",1/0);case"N":return x(),si("aN"),$e("numeric",NaN);case'"':case"'":es=x()==='"',Z="",J="string";return}throw De(x())},identifierNameStartEscape(){if(re!=="u")throw De(x());x();const e=Hl();switch(e){case"$":case"_":break;default:if(!Re.isIdStartChar(e))throw Sd();break}Z+=e,J="identifierName"},identifierName(){switch(re){case"$":case"_":case"‌":case"‍":Z+=x();return;case"\\":x(),J="identifierNameEscape";return}if(Re.isIdContinueChar(re)){Z+=x();return}return $e("identifier",Z)},identifierNameEscape(){if(re!=="u")throw De(x());x();const e=Hl();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Re.isIdContinueChar(e))throw Sd();break}Z+=e,J="identifierName"},sign(){switch(re){case".":Z=x(),J="decimalPointLeading";return;case"0":Z=x(),J="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":Z=x(),J="decimalInteger";return;case"I":return x(),si("nfinity"),$e("numeric",ar*(1/0));case"N":return x(),si("aN"),$e("numeric",NaN)}throw De(x())},zero(){switch(re){case".":Z+=x(),J="decimalPoint";return;case"e":case"E":Z+=x(),J="decimalExponent";return;case"x":case"X":Z+=x(),J="hexadecimal";return}return $e("numeric",ar*0)},decimalInteger(){switch(re){case".":Z+=x(),J="decimalPoint";return;case"e":case"E":Z+=x(),J="decimalExponent";return}if(Re.isDigit(re)){Z+=x();return}return $e("numeric",ar*Number(Z))},decimalPointLeading(){if(Re.isDigit(re)){Z+=x(),J="decimalFraction";return}throw De(x())},decimalPoint(){switch(re){case"e":case"E":Z+=x(),J="decimalExponent";return}if(Re.isDigit(re)){Z+=x(),J="decimalFraction";return}return $e("numeric",ar*Number(Z))},decimalFraction(){switch(re){case"e":case"E":Z+=x(),J="decimalExponent";return}if(Re.isDigit(re)){Z+=x();return}return $e("numeric",ar*Number(Z))},decimalExponent(){switch(re){case"+":case"-":Z+=x(),J="decimalExponentSign";return}if(Re.isDigit(re)){Z+=x(),J="decimalExponentInteger";return}throw De(x())},decimalExponentSign(){if(Re.isDigit(re)){Z+=x(),J="decimalExponentInteger";return}throw De(x())},decimalExponentInteger(){if(Re.isDigit(re)){Z+=x();return}return $e("numeric",ar*Number(Z))},hexadecimal(){if(Re.isHexDigit(re)){Z+=x(),J="hexadecimalInteger";return}throw De(x())},hexadecimalInteger(){if(Re.isHexDigit(re)){Z+=x();return}return $e("numeric",ar*Number(Z))},string(){switch(re){case"\\":x(),Z+=Sw();return;case'"':if(es)return x(),$e("string",Z);Z+=x();return;case"'":if(!es)return x(),$e("string",Z);Z+=x();return;case`
`:case"\r":throw De(x());case"\u2028":case"\u2029":Tw(re);break;case void 0:throw De(x())}Z+=x()},start(){switch(re){case"{":case"[":return $e("punctuator",x())}J="value"},beforePropertyName(){switch(re){case"$":case"_":Z=x(),J="identifierName";return;case"\\":x(),J="identifierNameStartEscape";return;case"}":return $e("punctuator",x());case'"':case"'":es=x()==='"',J="string";return}if(Re.isIdStartChar(re)){Z+=x(),J="identifierName";return}throw De(x())},afterPropertyName(){if(re===":")return $e("punctuator",x());throw De(x())},beforePropertyValue(){J="value"},afterPropertyValue(){switch(re){case",":case"}":return $e("punctuator",x())}throw De(x())},beforeArrayValue(){if(re==="]")return $e("punctuator",x());J="value"},afterArrayValue(){switch(re){case",":case"]":return $e("punctuator",x())}throw De(x())},end(){throw De(x())}};function $e(e,t){return{type:e,value:t,line:qr,column:_n}}function si(e){for(const t of e){if($r()!==t)throw De(x());x()}}function Sw(){switch($r()){case"b":return x(),"\b";case"f":return x(),"\f";case"n":return x(),`
`;case"r":return x(),"\r";case"t":return x(),"	";case"v":return x(),"\v";case"0":if(x(),Re.isDigit($r()))throw De(x());return"\0";case"x":return x(),Nw();case"u":return x(),Hl();case`
`:case"\u2028":case"\u2029":return x(),"";case"\r":return x(),$r()===`
`&&x(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw De(x());case void 0:throw De(x())}return x()}function Nw(){let e="",t=$r();if(!Re.isHexDigit(t)||(e+=x(),t=$r(),!Re.isHexDigit(t)))throw De(x());return e+=x(),String.fromCodePoint(parseInt(e,16))}function Hl(){let e="",t=4;for(;t-- >0;){const n=$r();if(!Re.isHexDigit(n))throw De(x());e+=x()}return String.fromCodePoint(parseInt(e,16))}const Iw={start(){if(rt.type==="eof")throw ui();sl()},beforePropertyName(){switch(rt.type){case"identifier":case"string":zc=rt.value,Nt="afterPropertyName";return;case"punctuator":du();return;case"eof":throw ui()}},afterPropertyName(){if(rt.type==="eof")throw ui();Nt="beforePropertyValue"},beforePropertyValue(){if(rt.type==="eof")throw ui();sl()},beforeArrayValue(){if(rt.type==="eof")throw ui();if(rt.type==="punctuator"&&rt.value==="]"){du();return}sl()},afterPropertyValue(){if(rt.type==="eof")throw ui();switch(rt.value){case",":Nt="beforePropertyName";return;case"}":du()}},afterArrayValue(){if(rt.type==="eof")throw ui();switch(rt.value){case",":Nt="beforeArrayValue";return;case"]":du()}},end(){}};function sl(){let e;switch(rt.type){case"punctuator":switch(rt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=rt.value;break}if(as===void 0)as=e;else{const t=dr[dr.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,zc,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")dr.push(e),Array.isArray(e)?Nt="beforeArrayValue":Nt="beforePropertyName";else{const t=dr[dr.length-1];t==null?Nt="end":Array.isArray(t)?Nt="afterArrayValue":Nt="afterPropertyValue"}}function du(){dr.pop();const e=dr[dr.length-1];e==null?Nt="end":Array.isArray(e)?Nt="afterArrayValue":Nt="afterPropertyValue"}function De(e){return zu(e===void 0?`JSON5: invalid end of input at ${qr}:${_n}`:`JSON5: invalid character '${x0(e)}' at ${qr}:${_n}`)}function ui(){return zu(`JSON5: invalid end of input at ${qr}:${_n}`)}function Sd(){return _n-=5,zu(`JSON5: invalid identifier character at ${qr}:${_n}`)}function Tw(e){console.warn(`JSON5: '${x0(e)}' in strings is not valid ECMAScript; consider escaping`)}function x0(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function zu(e){const t=new SyntaxError(e);return t.lineNumber=qr,t.columnNumber=_n,t}var Mw=function(t,n,r){const i=[];let o="",s,u,a="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")u=n;else if(Array.isArray(n)){s=[];for(const D of n){let S;typeof D=="string"?S=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&(S=String(D)),S!==void 0&&s.indexOf(S)<0&&s.push(S)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),a="          ".substr(0,r)):typeof r=="string"&&(a=r.substr(0,10)),c("",{"":t});function c(D,S){let A=S[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),u&&(A=u.call(S,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return f(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?E(A):p(A)}function f(D){const S={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let T="";for(let z=0;z<D.length;z++){const ee=D[z];switch(ee){case"'":case'"':S[ee]++,T+=ee;continue;case"\0":if(Re.isDigit(D[z+1])){T+="\\x00";continue}}if(A[ee]){T+=A[ee];continue}if(ee<" "){let at=ee.charCodeAt(0).toString(16);T+="\\x"+("00"+at).substring(at.length);continue}T+=ee}const _=l||Object.keys(S).reduce((z,ee)=>S[z]<S[ee]?z:ee);return T=T.replace(new RegExp(_,"g"),A[_]),_+T+_}function p(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+a;let A=s||Object.keys(D),T=[];for(const z of A){const ee=c(z,D);if(ee!==void 0){let at=g(z)+":";a!==""&&(at+=" "),at+=ee,T.push(at)}}let _;if(T.length===0)_="{}";else{let z;if(a==="")z=T.join(","),_="{"+z+"}";else{let ee=`,
`+o;z=T.join(ee),_=`{
`+o+z+`,
`+S+"}"}}return i.pop(),o=S,_}function g(D){if(D.length===0)return f(D);const S=String.fromCodePoint(D.codePointAt(0));if(!Re.isIdStartChar(S))return f(D);for(let A=S.length;A<D.length;A++)if(!Re.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return f(D);return D}function E(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let S=o;o=o+a;let A=[];for(let _=0;_<D.length;_++){const z=c(String(_),D);A.push(z!==void 0?z:"null")}let T;if(A.length===0)T="[]";else if(a==="")T="["+A.join(",")+"]";else{let _=`,
`+o,z=A.join(_);T=`[
`+o+z+`,
`+S+"]"}return i.pop(),o=S,T}};const Pw={parse:Fw,stringify:Mw};var Ow=Pw;function m(e){try{return Ow.stringify(e)}catch{return String(e)}}const Bw=[".",":",";",",","?","!"],Rw=new RegExp(`[${Bw.join("")}]+$`);function Nd(e){return e.replace(Rw,"")}function Kt(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}function pa(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Nd(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Nd(r)).join(": "):""}function Wt(e){return e instanceof Error?e:new Error(Kt(e))}function Kc(e,t){const n=Wt(e),r=pa(t,n.message);try{return n.message=r,n}catch{return new Error(r,{cause:e})}}var $;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})($||($={}));var R;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(R||(R={}));R.ClientError,R.ServerError;$.Continue+"",R.Information,$.SwitchingProtocols+"",R.Information,$.Processing+"",R.Information,$.EarlyHints+"",R.Information,$.Ok+"",R.Success,$.Created+"",R.Success,$.Accepted+"",R.Success,$.NonAuthoritativeInformation+"",R.Success,$.NoContent+"",R.Success,$.ResetContent+"",R.Success,$.PartialContent+"",R.Success,$.MultiStatus+"",R.Success,$.AlreadyReported+"",R.Success,$.ImUsed+"",R.Success,$.MultipleChoices+"",R.Redirect,$.MovedPermanently+"",R.Redirect,$.Found+"",R.Redirect,$.SeeOther+"",R.Redirect,$.NotModified+"",R.Redirect,$.UseProxy+"",R.Redirect,$.Unused+"",R.Redirect,$.TemporaryRedirect+"",R.Redirect,$.PermanentRedirect+"",R.Redirect,$.BadRequest+"",R.ClientError,$.Unauthorized+"",R.ClientError,$.PaymentRequired+"",R.ClientError,$.Forbidden+"",R.ClientError,$.NotFound+"",R.ClientError,$.MethodNotAllowed+"",R.ClientError,$.NotAcceptable+"",R.ClientError,$.ProxyAuthenticationRequired+"",R.ClientError,$.RequestTimeout+"",R.ClientError,$.Conflict+"",R.ClientError,$.Gone+"",R.ClientError,$.LengthRequired+"",R.ClientError,$.PreconditionFailed+"",R.ClientError,$.PayloadTooLarge+"",R.ClientError,$.UriTooLong+"",R.ClientError,$.UnsupportedMediaType+"",R.ClientError,$.RangeNotSatisfiable+"",R.ClientError,$.ExpectationFailed+"",R.ClientError,$.ImATeapot+"",R.ClientError,$.MisdirectedRequest+"",R.ClientError,$.UnprocessableContent+"",R.ClientError,$.Locked+"",R.ClientError,$.FailedDependency+"",R.ClientError,$.TooEarly+"",R.ClientError,$.UpgradeRequired+"",R.ClientError,$.PreconditionRequired+"",R.ClientError,$.TooManyRequests+"",R.ClientError,$.RequestHeaderFieldsTooLarge+"",R.ClientError,$.UnavailableForLegalReasons+"",R.ClientError,$.InternalServerError+"",R.ServerError,$.NotImplemented+"",R.ServerError,$.BadGateway+"",R.ServerError,$.ServiceUnavailable+"",R.ServerError,$.GatewayTimeout+"",R.ServerError,$.HttpVersionNotSupported+"",R.ServerError,$.VariantAlsoNegotiates+"",R.ServerError,$.InsufficientStorage+"",R.ServerError,$.LoopDetected+"",R.ServerError,$.NotExtended+"",R.ServerError,$.NetworkAuthenticationRequired+"",R.ServerError;const Mu={[R.Information]:[$.Continue,$.SwitchingProtocols,$.Processing,$.EarlyHints],[R.Success]:[$.Ok,$.Created,$.Accepted,$.NonAuthoritativeInformation,$.NoContent,$.ResetContent,$.PartialContent,$.MultiStatus,$.AlreadyReported,$.ImUsed],[R.Redirect]:[$.MultipleChoices,$.MovedPermanently,$.Found,$.SeeOther,$.NotModified,$.UseProxy,$.Unused,$.TemporaryRedirect,$.PermanentRedirect],[R.ClientError]:[$.BadRequest,$.Unauthorized,$.PaymentRequired,$.Forbidden,$.NotFound,$.MethodNotAllowed,$.NotAcceptable,$.ProxyAuthenticationRequired,$.RequestTimeout,$.Conflict,$.Gone,$.LengthRequired,$.PreconditionFailed,$.PayloadTooLarge,$.UriTooLong,$.UnsupportedMediaType,$.RangeNotSatisfiable,$.ExpectationFailed,$.ImATeapot,$.MisdirectedRequest,$.UnprocessableContent,$.Locked,$.FailedDependency,$.TooEarly,$.UpgradeRequired,$.PreconditionRequired,$.TooManyRequests,$.RequestHeaderFieldsTooLarge,$.UnavailableForLegalReasons],[R.ServerError]:[$.InternalServerError,$.NotImplemented,$.BadGateway,$.ServiceUnavailable,$.GatewayTimeout,$.HttpVersionNotSupported,$.VariantAlsoNegotiates,$.InsufficientStorage,$.LoopDetected,$.NotExtended,$.NetworkAuthenticationRequired]};function A0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class F0{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Wt(r))}})}}class xi extends Error{}class Lw extends xi{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Uw extends xi{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class jw extends xi{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Gi extends xi{}class k0 extends xi{constructor(t){super(`Invalid unit ${t}`)}}class wt extends xi{}class Ir extends xi{constructor(){super("Zone is an abstract class")}}const O="numeric",Vn="short",sn="long",Ku={year:O,month:O,day:O},S0={year:O,month:Vn,day:O},_w={year:O,month:Vn,day:O,weekday:Vn},N0={year:O,month:sn,day:O},I0={year:O,month:sn,day:O,weekday:sn},T0={hour:O,minute:O},M0={hour:O,minute:O,second:O},P0={hour:O,minute:O,second:O,timeZoneName:Vn},O0={hour:O,minute:O,second:O,timeZoneName:sn},B0={hour:O,minute:O,hourCycle:"h23"},R0={hour:O,minute:O,second:O,hourCycle:"h23"},L0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:Vn},U0={hour:O,minute:O,second:O,hourCycle:"h23",timeZoneName:sn},j0={year:O,month:O,day:O,hour:O,minute:O},_0={year:O,month:O,day:O,hour:O,minute:O,second:O},V0={year:O,month:Vn,day:O,hour:O,minute:O},q0={year:O,month:Vn,day:O,hour:O,minute:O,second:O},Vw={year:O,month:Vn,day:O,weekday:Vn,hour:O,minute:O},W0={year:O,month:sn,day:O,hour:O,minute:O,timeZoneName:Vn},z0={year:O,month:sn,day:O,hour:O,minute:O,second:O,timeZoneName:Vn},K0={year:O,month:sn,day:O,weekday:sn,hour:O,minute:O,timeZoneName:sn},Z0={year:O,month:sn,day:O,weekday:sn,hour:O,minute:O,second:O,timeZoneName:sn};class Ls{get type(){throw new Ir}get name(){throw new Ir}get ianaName(){return this.name}get isUniversal(){throw new Ir}offsetName(t,n){throw new Ir}formatOffset(t,n){throw new Ir}offset(t){throw new Ir}equals(t){throw new Ir}get isValid(){throw new Ir}}let ul=null;class ga extends Ls{static get instance(){return ul===null&&(ul=new ga),ul}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return ip(t,n,r)}formatOffset(t,n){return ls(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Xl=new Map;function qw(e){let t=Xl.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Xl.set(e,t)),t}const Ww={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function zw(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,s,u,a,l,c]=r;return[s,i,o,u,a,l,c]}function Kw(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:s}=n[i],u=Ww[o];o==="era"?r[u]=s:W(u)||(r[u]=parseInt(s,10))}return r}const al=new Map;class vr extends Ls{static create(t){let n=al.get(t);return n===void 0&&al.set(t,n=new vr(t)),n}static resetCache(){al.clear(),Xl.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=vr.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return ip(t,n,r,this.name)}formatOffset(t,n){return ls(this.offset(t),n)}offset(t){if(!this.valid)return NaN;const n=new Date(t);if(isNaN(n))return NaN;const r=qw(this.name);let[i,o,s,u,a,l,c]=r.formatToParts?Kw(r,n):zw(r,n);u==="BC"&&(i=-Math.abs(i)+1);const p=wa({year:i,month:o,day:s,hour:a===24?0:a,minute:l,second:c,millisecond:0});let g=+n;const E=g%1e3;return g-=E>=0?E:1e3+E,(p-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Id={};function Zw(e,t={}){const n=JSON.stringify([e,t]);let r=Id[n];return r||(r=new Intl.ListFormat(e,t),Id[n]=r),r}const Ql=new Map;function ec(e,t={}){const n=JSON.stringify([e,t]);let r=Ql.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Ql.set(n,r)),r}const tc=new Map;function Gw(e,t={}){const n=JSON.stringify([e,t]);let r=tc.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),tc.set(n,r)),r}const nc=new Map;function Yw(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=nc.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),nc.set(i,o)),o}let ts=null;function Jw(){return ts||(ts=new Intl.DateTimeFormat().resolvedOptions().locale,ts)}const rc=new Map;function G0(e){let t=rc.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),rc.set(e,t)),t}const ic=new Map;function Hw(e){let t=ic.get(e);if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in t||(t={...Y0,...t}),ic.set(e,t)}return t}function Xw(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=ec(e).resolvedOptions(),i=e}catch{const a=e.substring(0,n);r=ec(a).resolvedOptions(),i=a}const{numberingSystem:o,calendar:s}=r;return[i,o,s]}}function Qw(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function eb(e){const t=[];for(let n=1;n<=12;n++){const r=K.utc(2009,n,1);t.push(e(r))}return t}function tb(e){const t=[];for(let n=1;n<=7;n++){const r=K.utc(2016,11,13+n);t.push(e(r))}return t}function mu(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function nb(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||G0(e.locale).numberingSystem==="latn"}class rb{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...s}=r;if(!n||Object.keys(s).length>0){const u={useGrouping:!1,...r};r.padTo>0&&(u.minimumIntegerDigits=r.padTo),this.inf=Gw(t,u)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Hc(t,3);return Ve(n,this.padTo)}}}class ib{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),u=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&vr.create(u).valid?(i=u,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=ec(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class ob{constructor(t,n,r){this.opts={style:"long",...r},!n&&np()&&(this.rtf=Yw(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Fb(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Y0={firstDay:1,minimalDays:4,weekend:[6,7]};class me{static fromOpts(t){return me.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const s=t||Pe.defaultLocale,u=s||(o?"en-US":Jw()),a=n||Pe.defaultNumberingSystem,l=r||Pe.defaultOutputCalendar,c=sc(i)||Pe.defaultWeekSettings;return new me(u,a,l,c,s)}static resetCache(){ts=null,Ql.clear(),tc.clear(),nc.clear(),rc.clear(),ic.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return me.create(t,n,r,i)}constructor(t,n,r,i,o){const[s,u,a]=Xw(t);this.locale=s,this.numberingSystem=n||u||null,this.outputCalendar=r||a||null,this.weekSettings=i,this.intl=Qw(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=nb(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:me.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,sc(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return mu(this,t,up,()=>{const r=this.intl==="ja"||this.intl.startsWith("ja-");n&=!r;const i=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";if(!this.monthsCache[o][t]){const s=r?u=>this.dtFormatter(u,i).format():u=>this.extract(u,i,"month");this.monthsCache[o][t]=eb(s)}return this.monthsCache[o][t]})}weekdays(t,n=!1){return mu(this,t,cp,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=tb(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return mu(this,void 0,()=>fp,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[K.utc(2016,11,13,9),K.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return mu(this,t,dp,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[K.utc(-40,1,1),K.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),s=o.find(u=>u.type.toLowerCase()===r);return s?s.value:null}numberFormatter(t={}){return new rb(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new ib(t,this.intl,n)}relFormatter(t={}){return new ob(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Zw(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||G0(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:rp()?Hw(this.locale):Y0}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ll=null;class It extends Ls{static get utcInstance(){return ll===null&&(ll=new It(0)),ll}static instance(t){return t===0?It.utcInstance:new It(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new It(ba(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ls(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ls(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return ls(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class sb extends Ls{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Rr(e,t){if(W(e)||e===null)return t;if(e instanceof Ls)return e;if(db(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?ga.instance:n==="utc"||n==="gmt"?It.utcInstance:It.parseSpecifier(n)||vr.create(e)}else return jr(e)?It.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new sb(e)}const Zc={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Td={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},ub=Zc.hanidec.replace(/[\[|\]]/g,"").split("");function ab(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Zc.hanidec)!==-1)t+=ub.indexOf(e[n]);else for(const i in Td){const[o,s]=Td[i];r>=o&&r<=s&&(t+=r-o)}}return parseInt(t,10)}else return t}const oc=new Map;function lb(){oc.clear()}function Pn({numberingSystem:e},t=""){const n=e||"latn";let r=oc.get(n);r===void 0&&(r=new Map,oc.set(n,r));let i=r.get(t);return i===void 0&&(i=new RegExp(`${Zc[n]}${t}`),r.set(t,i)),i}let Md=()=>Date.now(),Pd="system",Od=null,Bd=null,Rd=null,Ld=60,Ud,jd=null;class Pe{static get now(){return Md}static set now(t){Md=t}static set defaultZone(t){Pd=t}static get defaultZone(){return Rr(Pd,ga.instance)}static get defaultLocale(){return Od}static set defaultLocale(t){Od=t}static get defaultNumberingSystem(){return Bd}static set defaultNumberingSystem(t){Bd=t}static get defaultOutputCalendar(){return Rd}static set defaultOutputCalendar(t){Rd=t}static get defaultWeekSettings(){return jd}static set defaultWeekSettings(t){jd=sc(t)}static get twoDigitCutoffYear(){return Ld}static set twoDigitCutoffYear(t){Ld=t%100}static get throwOnInvalid(){return Ud}static set throwOnInvalid(t){Ud=t}static resetCaches(){me.resetCache(),vr.resetCache(),K.resetCache(),lb()}}class Un{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const J0=[0,31,59,90,120,151,181,212,243,273,304,334],H0=[0,31,60,91,121,152,182,213,244,274,305,335];function En(e,t){return new Un("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Gc(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function X0(e,t,n){return n+(Us(e)?H0:J0)[t-1]}function Q0(e,t){const n=Us(e)?H0:J0,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function Yc(e,t){return(e-t+7)%7+1}function Zu(e,t=4,n=1){const{year:r,month:i,day:o}=e,s=X0(r,i,o),u=Yc(Gc(r,i,o),n);let a=Math.floor((s-u+14-t)/7),l;return a<1?(l=r-1,a=ws(l,t,n)):a>ws(r,t,n)?(l=r+1,a=1):l=r,{weekYear:l,weekNumber:a,weekday:u,...$a(e)}}function _d(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,s=Yc(Gc(r,1,t),n),u=Hi(r);let a=i*7+o-s-7+t,l;a<1?(l=r-1,a+=Hi(l)):a>u?(l=r+1,a-=Hi(r)):l=r;const{month:c,day:f}=Q0(l,a);return{year:l,month:c,day:f,...$a(e)}}function cl(e){const{year:t,month:n,day:r}=e,i=X0(t,n,r);return{year:t,ordinal:i,...$a(e)}}function Vd(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Q0(t,n);return{year:t,month:r,day:i,...$a(e)}}function qd(e,t){if(!W(e.localWeekday)||!W(e.localWeekNumber)||!W(e.localWeekYear)){if(!W(e.weekday)||!W(e.weekNumber)||!W(e.weekYear))throw new Gi("Cannot mix locale-based week fields with ISO-based week fields");return W(e.localWeekday)||(e.weekday=e.localWeekday),W(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),W(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function cb(e,t=4,n=1){const r=ya(e.weekYear),i=Cn(e.weekNumber,1,ws(e.weekYear,t,n)),o=Cn(e.weekday,1,7);return r?i?o?!1:En("weekday",e.weekday):En("week",e.weekNumber):En("weekYear",e.weekYear)}function fb(e){const t=ya(e.year),n=Cn(e.ordinal,1,Hi(e.year));return t?n?!1:En("ordinal",e.ordinal):En("year",e.year)}function ep(e){const t=ya(e.year),n=Cn(e.month,1,12),r=Cn(e.day,1,Gu(e.year,e.month));return t?n?r?!1:En("day",e.day):En("month",e.month):En("year",e.year)}function tp(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=Cn(t,0,23)||t===24&&n===0&&r===0&&i===0,s=Cn(n,0,59),u=Cn(r,0,59),a=Cn(i,0,999);return o?s?u?a?!1:En("millisecond",i):En("second",r):En("minute",n):En("hour",t)}function W(e){return typeof e>"u"}function jr(e){return typeof e=="number"}function ya(e){return typeof e=="number"&&e%1===0}function db(e){return typeof e=="string"}function mb(e){return Object.prototype.toString.call(e)==="[object Date]"}function np(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function rp(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function hb(e){return Array.isArray(e)?e:[e]}function Wd(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function pb(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function oo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function sc(e){if(e==null)return null;if(typeof e!="object")throw new wt("Week settings must be an object");if(!Cn(e.firstDay,1,7)||!Cn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Cn(t,1,7)))throw new wt("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Cn(e,t,n){return ya(e)&&e>=t&&e<=n}function gb(e,t){return e-t*Math.floor(e/t)}function Ve(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Pr(e){if(!(W(e)||e===null||e===""))return parseInt(e,10)}function ai(e){if(!(W(e)||e===null||e===""))return parseFloat(e)}function Jc(e){if(!(W(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Hc(e,t,n="round"){const r=10**t;switch(n){case"expand":return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case"trunc":return Math.trunc(e*r)/r;case"round":return Math.round(e*r)/r;case"floor":return Math.floor(e*r)/r;case"ceil":return Math.ceil(e*r)/r;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function Us(e){return e%4===0&&(e%100!==0||e%400===0)}function Hi(e){return Us(e)?366:365}function Gu(e,t){const n=gb(t-1,12)+1,r=e+(t-n)/12;return n===2?Us(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function wa(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function zd(e,t,n){return-Yc(Gc(e,1,t),n)+t-1}function ws(e,t=4,n=1){const r=zd(e,t,n),i=zd(e+1,t,n);return(Hi(e)-r+i)/7}function uc(e){return e>99?e:e>Pe.twoDigitCutoffYear?1900+e:2e3+e}function ip(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const s={timeZoneName:t,...o},u=new Intl.DateTimeFormat(n,s).formatToParts(i).find(a=>a.type.toLowerCase()==="timezonename");return u?u.value:null}function ba(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function op(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new wt(`Invalid unit value ${e}`);return t}function Yu(e,t){const n={};for(const r in e)if(oo(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=op(i)}return n}function ls(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Ve(n,2)}:${Ve(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${Ve(n,2)}${Ve(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function $a(e){return pb(e,["hour","minute","second","millisecond"])}const yb=["January","February","March","April","May","June","July","August","September","October","November","December"],sp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wb=["J","F","M","A","M","J","J","A","S","O","N","D"];function up(e){switch(e){case"narrow":return[...wb];case"short":return[...sp];case"long":return[...yb];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const ap=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],lp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],bb=["M","T","W","T","F","S","S"];function cp(e){switch(e){case"narrow":return[...bb];case"short":return[...lp];case"long":return[...ap];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const fp=["AM","PM"],$b=["Before Christ","Anno Domini"],Db=["BC","AD"],vb=["B","A"];function dp(e){switch(e){case"narrow":return[...vb];case"short":return[...Db];case"long":return[...$b];default:return null}}function Eb(e){return fp[e.hour<12?0:1]}function Cb(e,t){return cp(t)[e.weekday-1]}function xb(e,t){return up(t)[e.month-1]}function Ab(e,t){return dp(t)[e.year<0?0:1]}function Fb(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,u=Math.abs(t),a=u===1,l=i[e],c=r?a?l[1]:l[2]||l[1]:a?i[e][0]:e;return s?`${u} ${c} ago`:`in ${u} ${c}`}function Kd(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const kb={D:Ku,DD:S0,DDD:N0,DDDD:I0,t:T0,tt:M0,ttt:P0,tttt:O0,T:B0,TT:R0,TTT:L0,TTTT:U0,f:j0,ff:V0,fff:W0,ffff:K0,F:_0,FF:q0,FFF:z0,FFFF:Z0};class $t{static create(t,n={}){return new $t(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let s=0;s<t.length;s++){const u=t.charAt(s);u==="'"?((r.length>0||i)&&o.push({literal:i||/^\s+$/.test(r),val:r===""?"'":r}),n=null,r="",i=!i):i||u===n?r+=u:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=u,n=u)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return kb[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0,r=void 0){if(this.opts.forceSimple)return Ve(t,n);const i={...this.opts};return n>0&&(i.padTo=n),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,E)=>this.loc.extract(t,g,E),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",u=()=>r?Eb(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),a=(g,E)=>r?xb(t,g):o(E?{month:g}:{month:g,day:"numeric"},"month"),l=(g,E)=>r?Cb(t,g):o(E?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),c=g=>{const E=$t.macroTokenToFormatOpts(g);return E?this.formatWithSystemDefault(t,E):g},f=g=>r?Ab(t,g):o({era:g},"era"),p=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return u();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return a("short",!0);case"LLLL":return a("long",!0);case"LLLLL":return a("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return a("short",!1);case"MMMM":return a("long",!1);case"MMMMM":return a("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(g)}};return Kd($t.parseFormat(n),p)}formatDurationFromString(t,n){const r=this.opts.signMode==="negativeLargestOnly"?-1:1,i=c=>{switch(c[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(c,f)=>p=>{const g=i(p);if(g){const E=f.isNegativeDuration&&g!==f.largestUnit?r:1;let D;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?D="never":this.opts.signMode==="all"?D="always":D="auto",this.num(c.get(g)*E,p.length,D)}else return p},s=$t.parseFormat(n),u=s.reduce((c,{literal:f,val:p})=>f?c:c.concat(p),[]),a=t.shiftTo(...u.map(i).filter(c=>c)),l={isNegativeDuration:a<0,largestUnit:Object.keys(a.values)[0]};return Kd(s,o(a,l))}}const mp=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ao(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Fo(...e){return t=>e.reduce(([n,r,i],o)=>{const[s,u,a]=o(t,i);return[{...n,...s},u||r,a]},[{},null,1]).slice(0,2)}function ko(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function hp(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Pr(t[n+i]);return[r,null,n+i]}}const pp=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Sb=`(?:${pp.source}?(?:\\[(${mp.source})\\])?)?`,Xc=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,gp=RegExp(`${Xc.source}${Sb}`),Qc=RegExp(`(?:[Tt]${gp.source})?`),Nb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ib=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Tb=/(\d{4})-?(\d{3})/,Mb=hp("weekYear","weekNumber","weekDay"),Pb=hp("year","ordinal"),Ob=/(\d{4})-(\d\d)-(\d\d)/,yp=RegExp(`${Xc.source} ?(?:${pp.source}|(${mp.source}))?`),Bb=RegExp(`(?: ${yp.source})?`);function Xi(e,t,n){const r=e[t];return W(r)?n:Pr(r)}function Rb(e,t){return[{year:Xi(e,t),month:Xi(e,t+1,1),day:Xi(e,t+2,1)},null,t+3]}function So(e,t){return[{hours:Xi(e,t,0),minutes:Xi(e,t+1,0),seconds:Xi(e,t+2,0),milliseconds:Jc(e[t+3])},null,t+4]}function js(e,t){const n=!e[t]&&!e[t+1],r=ba(e[t+1],e[t+2]),i=n?null:It.instance(r);return[{},i,t+3]}function _s(e,t){const n=e[t]?vr.create(e[t]):null;return[{},n,t+1]}const Lb=RegExp(`^T?${Xc.source}$`),Ub=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function jb(e){const[t,n,r,i,o,s,u,a,l]=e,c=t[0]==="-",f=a&&a[0]==="-",p=(g,E=!1)=>g!==void 0&&(E||g&&c)?-g:g;return[{years:p(ai(n)),months:p(ai(r)),weeks:p(ai(i)),days:p(ai(o)),hours:p(ai(s)),minutes:p(ai(u)),seconds:p(ai(a),a==="-0"),milliseconds:p(Jc(l),f)}]}const _b={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ef(e,t,n,r,i,o,s){const u={year:t.length===2?uc(Pr(t)):Pr(t),month:sp.indexOf(n)+1,day:Pr(r),hour:Pr(i),minute:Pr(o)};return s&&(u.second=Pr(s)),e&&(u.weekday=e.length>3?ap.indexOf(e)+1:lp.indexOf(e)+1),u}const Vb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function qb(e){const[,t,n,r,i,o,s,u,a,l,c,f]=e,p=ef(t,i,r,n,o,s,u);let g;return a?g=_b[a]:l?g=0:g=ba(c,f),[p,new It(g)]}function Wb(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const zb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Kb=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Zb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Zd(e){const[,t,n,r,i,o,s,u]=e;return[ef(t,i,r,n,o,s,u),It.utcInstance]}function Gb(e){const[,t,n,r,i,o,s,u]=e;return[ef(t,u,n,r,i,o,s),It.utcInstance]}const Yb=Ao(Nb,Qc),Jb=Ao(Ib,Qc),Hb=Ao(Tb,Qc),Xb=Ao(gp),wp=Fo(Rb,So,js,_s),Qb=Fo(Mb,So,js,_s),e2=Fo(Pb,So,js,_s),t2=Fo(So,js,_s);function n2(e){return ko(e,[Yb,wp],[Jb,Qb],[Hb,e2],[Xb,t2])}function r2(e){return ko(Wb(e),[Vb,qb])}function i2(e){return ko(e,[zb,Zd],[Kb,Zd],[Zb,Gb])}function o2(e){return ko(e,[Ub,jb])}const s2=Fo(So);function u2(e){return ko(e,[Lb,s2])}const a2=Ao(Ob,Bb),l2=Ao(yp),c2=Fo(So,js,_s);function f2(e){return ko(e,[a2,wp],[l2,c2])}const Gd="Invalid Duration",bp={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},d2={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...bp},bn=146097/400,Li=146097/4800,m2={years:{quarters:4,months:12,weeks:bn/7,days:bn,hours:bn*24,minutes:bn*24*60,seconds:bn*24*60*60,milliseconds:bn*24*60*60*1e3},quarters:{months:3,weeks:bn/28,days:bn/4,hours:bn*24/4,minutes:bn*24*60/4,seconds:bn*24*60*60/4,milliseconds:bn*24*60*60*1e3/4},months:{weeks:Li/7,days:Li,hours:Li*24,minutes:Li*24*60,seconds:Li*24*60*60,milliseconds:Li*24*60*60*1e3},...bp},gi=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],h2=gi.slice(0).reverse();function or(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new ie(r)}function $p(e,t){let n=t.milliseconds??0;for(const r of h2.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Yd(e,t){const n=$p(e,t)<0?-1:1;gi.reduceRight((r,i)=>{if(W(t[i]))return r;if(r){const o=t[r]*n,s=e[i][r],u=Math.floor(o/s);t[i]+=u*n,t[r]-=u*s*n}return i},null),gi.reduce((r,i)=>{if(W(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function Jd(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class ie{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?m2:d2;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||me.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return ie.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new wt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new ie({values:Yu(t,ie.normalizeUnit),loc:me.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(jr(t))return ie.fromMillis(t);if(ie.isDuration(t))return t;if(typeof t=="object")return ie.fromObject(t);throw new wt(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=o2(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=u2(t);return r?ie.fromObject(r,n):ie.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new wt("need to specify a reason the Duration is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new jw(r);return new ie({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new k0(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?$t.create(this.loc,r).formatDurationFromString(this,t):Gd}toHuman(t={}){if(!this.isValid)return Gd;const n=t.showZeros!==!1,r=gi.map(i=>{const o=this.values[i];return W(o)||o===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Hc(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},K.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?$p(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t),r={};for(const i of gi)(oo(n.values,i)||oo(this.values,i))&&(r[i]=n.get(i)+this.get(i));return or(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=op(t(this.values[r],r));return or(this,{values:n},!0)}get(t){return this[ie.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Yu(t,ie.normalizeUnit)};return or(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return or(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Yd(this.matrix,t),or(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Jd(this.normalize().shiftToAll().toObject());return or(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>ie.normalizeUnit(s));const n={},r={},i=this.toObject();let o;for(const s of gi)if(t.indexOf(s)>=0){o=s;let u=0;for(const l in r)u+=this.matrix[l][s]*r[l],r[l]=0;jr(i[s])&&(u+=i[s]);const a=Math.trunc(u);n[s]=a,r[s]=(u*1e3-a*1e3)/1e3}else jr(i[s])&&(r[s]=i[s]);for(const s in r)r[s]!==0&&(n[o]+=s===o?r[s]:r[s]/this.matrix[o][s]);return Yd(this.matrix,n),or(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return or(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Jd(this.values);return or(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of gi)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Ui="Invalid Interval";function p2(e,t){return!e||!e.isValid?Me.invalid("missing or invalid start"):!t||!t.isValid?Me.invalid("missing or invalid end"):t<e?Me.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Me{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new wt("need to specify a reason the Interval is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new Uw(r);return new Me({invalid:r})}static fromDateTimes(t,n){const r=zo(t),i=zo(n),o=p2(r,i);return o??new Me({start:r,end:i})}static after(t,n){const r=ie.fromDurationLike(n),i=zo(t);return Me.fromDateTimes(i,i.plus(r))}static before(t,n){const r=ie.fromDurationLike(n),i=zo(t);return Me.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,s;try{o=K.fromISO(r,n),s=o.isValid}catch{s=!1}let u,a;try{u=K.fromISO(i,n),a=u.isValid}catch{a=!1}if(s&&a)return Me.fromDateTimes(o,u);if(s){const l=ie.fromISO(i,n);if(l.isValid)return Me.after(o,l)}else if(a){const l=ie.fromISO(r,n);if(l.isValid)return Me.before(u,l)}}return Me.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Me.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(zo).filter(s=>this.contains(s)).sort((s,u)=>s.toMillis()-u.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const s=n[o]||this.e,u=+s>+this.e?this.e:s;r.push(Me.fromDateTimes(i,u)),i=u,o+=1}return r}splitBy(t){const n=ie.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const s=[];for(;r<this.e;){const u=this.start.plus(n.mapUnits(a=>a*i));o=+u>+this.e?this.e:u,s.push(Me.fromDateTimes(r,o)),r=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Me.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Me.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(a=>[{time:a.s,type:"s"},{time:a.e,type:"e"}]),s=Array.prototype.concat(...o),u=s.sort((a,l)=>a.time-l.time);for(const a of u)r+=a.type==="s"?1:-1,r===1?n=a.time:(n&&+n!=+a.time&&i.push(Me.fromDateTimes(n,a.time)),n=null);return Me.merge(i)}difference(...t){return Me.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ui}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Ku,n={}){return this.isValid?$t.create(this.s.loc.clone(n),t).formatInterval(this):Ui}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ui}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ui}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ui}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Ui}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):ie.invalid(this.invalidReason)}mapEndpoints(t){return Me.fromDateTimes(t(this.s),t(this.e))}}class hu{static hasDST(t=Pe.defaultZone){const n=K.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return vr.isValidZone(t)}static normalizeZone(t){return Rr(t,Pe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||me.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||me.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||me.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||me.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||me.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return me.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return me.create(n,null,"gregory").eras(t)}static features(){return{relative:np(),localeWeek:rp()}}}function Hd(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(ie.fromMillis(r).as("days"))}function g2(e,t,n){const r=[["years",(a,l)=>l.year-a.year],["quarters",(a,l)=>l.quarter-a.quarter+(l.year-a.year)*4],["months",(a,l)=>l.month-a.month+(l.year-a.year)*12],["weeks",(a,l)=>{const c=Hd(a,l);return(c-c%7)/7}],["days",Hd]],i={},o=e;let s,u;for(const[a,l]of r)n.indexOf(a)>=0&&(s=a,i[a]=l(e,t),u=o.plus(i),u>t?(i[a]--,e=o.plus(i),e>t&&(u=e,i[a]--,e=o.plus(i))):e=u);return[e,i,u,s]}function y2(e,t,n,r){let[i,o,s,u]=g2(e,t,n);const a=t-i,l=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[u]:1})),s!==i&&(o[u]=(o[u]||0)+a/(s-i)));const c=ie.fromObject(o,r);return l.length>0?ie.fromMillis(a,r).shiftTo(...l).plus(c):c}const w2="missing Intl.DateTimeFormat.formatToParts support";function ae(e,t=n=>n){return{regex:e,deser:([n])=>t(ab(n))}}const b2=" ",Dp=`[ ${b2}]`,vp=new RegExp(Dp,"g");function $2(e){return e.replace(/\./g,"\\.?").replace(vp,Dp)}function Xd(e){return e.replace(/\./g,"").replace(vp," ").toLowerCase()}function On(e,t){return e===null?null:{regex:RegExp(e.map($2).join("|")),deser:([n])=>e.findIndex(r=>Xd(n)===Xd(r))+t}}function Qd(e,t){return{regex:e,deser:([,n,r])=>ba(n,r),groups:t}}function pu(e){return{regex:e,deser:([t])=>t}}function D2(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function v2(e,t){const n=Pn(t),r=Pn(t,"{2}"),i=Pn(t,"{3}"),o=Pn(t,"{4}"),s=Pn(t,"{6}"),u=Pn(t,"{1,2}"),a=Pn(t,"{1,3}"),l=Pn(t,"{1,6}"),c=Pn(t,"{1,9}"),f=Pn(t,"{2,4}"),p=Pn(t,"{4,6}"),g=S=>({regex:RegExp(D2(S.val)),deser:([A])=>A,literal:!0}),D=(S=>{if(e.literal)return g(S);switch(S.val){case"G":return On(t.eras("short"),0);case"GG":return On(t.eras("long"),0);case"y":return ae(l);case"yy":return ae(f,uc);case"yyyy":return ae(o);case"yyyyy":return ae(p);case"yyyyyy":return ae(s);case"M":return ae(u);case"MM":return ae(r);case"MMM":return On(t.months("short",!0),1);case"MMMM":return On(t.months("long",!0),1);case"L":return ae(u);case"LL":return ae(r);case"LLL":return On(t.months("short",!1),1);case"LLLL":return On(t.months("long",!1),1);case"d":return ae(u);case"dd":return ae(r);case"o":return ae(a);case"ooo":return ae(i);case"HH":return ae(r);case"H":return ae(u);case"hh":return ae(r);case"h":return ae(u);case"mm":return ae(r);case"m":return ae(u);case"q":return ae(u);case"qq":return ae(r);case"s":return ae(u);case"ss":return ae(r);case"S":return ae(a);case"SSS":return ae(i);case"u":return pu(c);case"uu":return pu(u);case"uuu":return ae(n);case"a":return On(t.meridiems(),0);case"kkkk":return ae(o);case"kk":return ae(f,uc);case"W":return ae(u);case"WW":return ae(r);case"E":case"c":return ae(n);case"EEE":return On(t.weekdays("short",!1),1);case"EEEE":return On(t.weekdays("long",!1),1);case"ccc":return On(t.weekdays("short",!0),1);case"cccc":return On(t.weekdays("long",!0),1);case"Z":case"ZZ":return Qd(new RegExp(`([+-]${u.source})(?::(${r.source}))?`),2);case"ZZZ":return Qd(new RegExp(`([+-]${u.source})(${r.source})?`),2);case"z":return pu(/[a-z_+-/]{1,256}?/i);case" ":return pu(/[^\S\n\r]/);default:return g(S)}})(e)||{invalidReason:w2};return D.token=e,D}const E2={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function C2(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const a=/^\s+$/.test(i);return{literal:!a,val:a?" ":i}}const o=t[r];let s=r;r==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=n.hour12?"hour12":"hour24");let u=E2[s];if(typeof u=="object"&&(u=u[o]),u)return{literal:!1,val:u}}function x2(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function A2(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const s in n)if(oo(n,s)){const u=n[s],a=u.groups?u.groups+1:1;!u.literal&&u.token&&(i[u.token.val[0]]=u.deser(r.slice(o,o+a))),o+=a}return[r,i]}else return[r,{}]}function F2(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return W(e.z)||(n=vr.create(e.z)),W(e.Z)||(n||(n=new It(e.Z)),r=e.Z),W(e.q)||(e.M=(e.q-1)*3+1),W(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),W(e.u)||(e.S=Jc(e.u)),[Object.keys(e).reduce((o,s)=>{const u=t(s);return u&&(o[u]=e[s]),o},{}),n,r]}let fl=null;function k2(){return fl||(fl=K.fromMillis(1555555555555)),fl}function S2(e,t){if(e.literal)return e;const n=$t.macroTokenToFormatOpts(e.val),r=Ap(n,t);return r==null||r.includes(void 0)?e:r}function Ep(e,t){return Array.prototype.concat(...e.map(n=>S2(n,t)))}class Cp{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=Ep($t.parseFormat(n),t),this.units=this.tokens.map(r=>v2(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=x2(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=A2(t,this.regex,this.handlers),[i,o,s]=r?F2(r):[null,null,void 0];if(oo(r,"a")&&oo(r,"H"))throw new Gi("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function xp(e,t,n){return new Cp(e,n).explainFromTokens(t)}function N2(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:s}=xp(e,t,n);return[r,i,o,s]}function Ap(e,t){if(!e)return null;const r=$t.create(t,e).dtFormatter(k2()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(s=>C2(s,e,o))}const dl="Invalid DateTime",em=864e13;function ns(e){return new Un("unsupported zone",`the zone "${e.name}" is not supported`)}function ml(e){return e.weekData===null&&(e.weekData=Zu(e.c)),e.weekData}function hl(e){return e.localWeekData===null&&(e.localWeekData=Zu(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function li(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new K({...n,...t,old:n})}function Fp(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function gu(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Pu(e,t,n){return Fp(wa(e),t,n)}function tm(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,Gu(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=ie.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=wa(o);let[a,l]=Fp(u,n,e.zone);return s!==0&&(a+=s,l=e.zone.offset(a)),{ts:a,o:l}}function ji(e,t,n,r,i,o){const{setZone:s,zone:u}=n;if(e&&Object.keys(e).length!==0||t){const a=t||u,l=K.fromObject(e,{...n,zone:a,specificOffset:o});return s?l:l.setZone(u)}else return K.invalid(new Un("unparsable",`the input "${i}" can't be parsed as ${r}`))}function yu(e,t,n=!0){return e.isValid?$t.create(me.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function pl(e,t,n){const r=e.c.year>9999||e.c.year<0;let i="";if(r&&e.c.year>=0&&(i+="+"),i+=Ve(e.c.year,r?6:4),n==="year")return i;if(t){if(i+="-",i+=Ve(e.c.month),n==="month")return i;i+="-"}else if(i+=Ve(e.c.month),n==="month")return i;return i+=Ve(e.c.day),i}function nm(e,t,n,r,i,o,s){let u=!n||e.c.millisecond!==0||e.c.second!==0,a="";switch(s){case"day":case"month":case"year":break;default:if(a+=Ve(e.c.hour),s==="hour")break;if(t){if(a+=":",a+=Ve(e.c.minute),s==="minute")break;u&&(a+=":",a+=Ve(e.c.second))}else{if(a+=Ve(e.c.minute),s==="minute")break;u&&(a+=Ve(e.c.second))}if(s==="second")break;u&&(!r||e.c.millisecond!==0)&&(a+=".",a+=Ve(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?a+="Z":e.o<0?(a+="-",a+=Ve(Math.trunc(-e.o/60)),a+=":",a+=Ve(Math.trunc(-e.o%60))):(a+="+",a+=Ve(Math.trunc(e.o/60)),a+=":",a+=Ve(Math.trunc(e.o%60)))),o&&(a+="["+e.zone.ianaName+"]"),a}const kp={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},I2={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},T2={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ou=["year","month","day","hour","minute","second","millisecond"],M2=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],P2=["year","ordinal","hour","minute","second","millisecond"];function Bu(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new k0(e);return t}function rm(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Bu(e)}}function O2(e){if(rs===void 0&&(rs=Pe.now()),e.type!=="iana")return e.offset(rs);const t=e.name;let n=ac.get(t);return n===void 0&&(n=e.offset(rs),ac.set(t,n)),n}function im(e,t){const n=Rr(t.zone,Pe.defaultZone);if(!n.isValid)return K.invalid(ns(n));const r=me.fromObject(t);let i,o;if(W(e.year))i=Pe.now();else{for(const a of Ou)W(e[a])&&(e[a]=kp[a]);const s=ep(e)||tp(e);if(s)return K.invalid(s);const u=O2(n);[i,o]=Pu(e,u,n)}return new K({ts:i,zone:n,loc:r,o})}function om(e,t,n){const r=W(n.round)?!0:n.round,i=W(n.rounding)?"trunc":n.rounding,o=(u,a)=>(u=Hc(u,r||n.calendary?0:2,n.calendary?"round":i),t.loc.clone(n).relFormatter(n).format(u,a)),s=u=>n.calendary?t.hasSame(e,u)?0:t.startOf(u).diff(e.startOf(u),u).get(u):t.diff(e,u).get(u);if(n.unit)return o(s(n.unit),n.unit);for(const u of n.units){const a=s(u);if(Math.abs(a)>=1)return o(a,u)}return o(e>t?-0:0,n.units[n.units.length-1])}function sm(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let rs;const ac=new Map;class K{constructor(t){const n=t.zone||Pe.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Un("invalid input"):null)||(n.isValid?null:ns(n));this.ts=W(t.ts)?Pe.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const u=jr(t.o)&&!t.old?t.o:n.offset(this.ts);i=gu(this.ts,u),r=Number.isNaN(i.year)?new Un("invalid input"):null,i=r?null:i,o=r?null:u}this._zone=n,this.loc=t.loc||me.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new K({})}static local(){const[t,n]=sm(arguments),[r,i,o,s,u,a,l]=n;return im({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static utc(){const[t,n]=sm(arguments),[r,i,o,s,u,a,l]=n;return t.zone=It.utcInstance,im({year:r,month:i,day:o,hour:s,minute:u,second:a,millisecond:l},t)}static fromJSDate(t,n={}){const r=mb(t)?t.valueOf():NaN;if(Number.isNaN(r))return K.invalid("invalid input");const i=Rr(n.zone,Pe.defaultZone);return i.isValid?new K({ts:r,zone:i,loc:me.fromObject(n)}):K.invalid(ns(i))}static fromMillis(t,n={}){if(jr(t))return t<-em||t>em?K.invalid("Timestamp out of range"):new K({ts:t,zone:Rr(n.zone,Pe.defaultZone),loc:me.fromObject(n)});throw new wt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(jr(t))return new K({ts:t*1e3,zone:Rr(n.zone,Pe.defaultZone),loc:me.fromObject(n)});throw new wt("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Rr(n.zone,Pe.defaultZone);if(!r.isValid)return K.invalid(ns(r));const i=me.fromObject(n),o=Yu(t,rm),{minDaysInFirstWeek:s,startOfWeek:u}=qd(o,i),a=Pe.now(),l=W(n.specificOffset)?r.offset(a):n.specificOffset,c=!W(o.ordinal),f=!W(o.year),p=!W(o.month)||!W(o.day),g=f||p,E=o.weekYear||o.weekNumber;if((g||c)&&E)throw new Gi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&c)throw new Gi("Can't mix ordinal dates with month/day");const D=E||o.weekday&&!g;let S,A,T=gu(a,l);D?(S=M2,A=I2,T=Zu(T,s,u)):c?(S=P2,A=T2,T=cl(T)):(S=Ou,A=kp);let _=!1;for(const yn of S){const In=o[yn];W(In)?_?o[yn]=A[yn]:o[yn]=T[yn]:_=!0}const z=D?cb(o,s,u):c?fb(o):ep(o),ee=z||tp(o);if(ee)return K.invalid(ee);const at=D?_d(o,s,u):c?Vd(o):o,[Ht,yt]=Pu(at,l,r),At=new K({ts:Ht,zone:r,o:yt,loc:i});return o.weekday&&g&&t.weekday!==At.weekday?K.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${At.toISO()}`):At.isValid?At:K.invalid(At.invalid)}static fromISO(t,n={}){const[r,i]=n2(t);return ji(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=r2(t);return ji(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=i2(t);return ji(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(W(t)||W(n))throw new wt("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[u,a,l,c]=N2(s,t,n);return c?K.invalid(c):ji(u,a,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return K.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=f2(t);return ji(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new wt("need to specify a reason the DateTime is invalid");const r=t instanceof Un?t:new Un(t,n);if(Pe.throwOnInvalid)throw new Lw(r);return new K({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Ap(t,me.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Ep($t.parseFormat(t),me.fromObject(n)).map(i=>i.val).join("")}static resetCache(){rs=void 0,ac.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ml(this).weekYear:NaN}get weekNumber(){return this.isValid?ml(this).weekNumber:NaN}get weekday(){return this.isValid?ml(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?hl(this).weekday:NaN}get localWeekNumber(){return this.isValid?hl(this).weekNumber:NaN}get localWeekYear(){return this.isValid?hl(this).weekYear:NaN}get ordinal(){return this.isValid?cl(this.c).ordinal:NaN}get monthShort(){return this.isValid?hu.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?hu.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?hu.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?hu.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=wa(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),s=this.zone.offset(r-i*n),u=this.zone.offset(r-o*n);if(s===u)return[this];const a=r-s*n,l=r-u*n,c=gu(a,s),f=gu(l,u);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[li(this,{ts:a}),li(this,{ts:l})]:[this]}get isInLeapYear(){return Us(this.year)}get daysInMonth(){return Gu(this.year,this.month)}get daysInYear(){return this.isValid?Hi(this.year):NaN}get weeksInWeekYear(){return this.isValid?ws(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?ws(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=$t.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(It.instance(t),n)}toLocal(){return this.setZone(Pe.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Rr(t,Pe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),s=this.toObject();[i]=Pu(s,o,t)}return li(this,{ts:i,zone:t})}else return K.invalid(ns(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return li(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Yu(t,rm),{minDaysInFirstWeek:r,startOfWeek:i}=qd(n,this.loc),o=!W(n.weekYear)||!W(n.weekNumber)||!W(n.weekday),s=!W(n.ordinal),u=!W(n.year),a=!W(n.month)||!W(n.day),l=u||a,c=n.weekYear||n.weekNumber;if((l||s)&&c)throw new Gi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&s)throw new Gi("Can't mix ordinal dates with month/day");let f;o?f=_d({...Zu(this.c,r,i),...n},r,i):W(n.ordinal)?(f={...this.toObject(),...n},W(n.day)&&(f.day=Math.min(Gu(f.year,f.month),f.day))):f=Vd({...cl(this.c),...n});const[p,g]=Pu(f,this.o,this.zone);return li(this,{ts:p,o:g})}plus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t);return li(this,tm(this,n))}minus(t){if(!this.isValid)return this;const n=ie.fromDurationLike(t).negate();return li(this,tm(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=ie.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?$t.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):dl}toLocaleString(t=Ku,n={}){return this.isValid?$t.create(this.loc.clone(n),t).formatDateTime(this):dl}toLocaleParts(t={}){return this.isValid?$t.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Bu(s);const u=t==="extended";let a=pl(this,u,s);return Ou.indexOf(s)>=3&&(a+="T"),a+=nm(this,u,n,r,i,o,s),a}toISODate({format:t="extended",precision:n="day"}={}){return this.isValid?pl(this,t==="extended",Bu(n)):null}toISOWeekDate(){return yu(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:u="milliseconds"}={}){return this.isValid?(u=Bu(u),(i&&Ou.indexOf(u)>=3?"T":"")+nm(this,s==="extended",n,t,r,o,u)):null}toRFC2822(){return yu(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return yu(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?pl(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),yu(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():dl}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return ie.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=hb(n).map(ie.normalizeUnit),s=t.valueOf()>this.valueOf(),u=s?this:t,a=s?t:this,l=y2(u,a,o,i);return s?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(K.now(),t,n)}until(t){return this.isValid?Me.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||K.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),om(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?om(t.base||K.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(K.isDateTime))throw new wt("min requires all arguments be DateTimes");return Wd(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(K.isDateTime))throw new wt("max requires all arguments be DateTimes");return Wd(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return xp(s,t,n)}static fromStringExplain(t,n,r={}){return K.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,o=me.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new Cp(o,t)}static fromFormatParser(t,n,r={}){if(W(t)||W(n))throw new wt("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=r,s=me.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(n.locale))throw new wt(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`);const{result:u,zone:a,specificOffset:l,invalidReason:c}=n.explainFromTokens(t);return c?K.invalid(c):ji(u,a,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Ku}static get DATE_MED(){return S0}static get DATE_MED_WITH_WEEKDAY(){return _w}static get DATE_FULL(){return N0}static get DATE_HUGE(){return I0}static get TIME_SIMPLE(){return T0}static get TIME_WITH_SECONDS(){return M0}static get TIME_WITH_SHORT_OFFSET(){return P0}static get TIME_WITH_LONG_OFFSET(){return O0}static get TIME_24_SIMPLE(){return B0}static get TIME_24_WITH_SECONDS(){return R0}static get TIME_24_WITH_SHORT_OFFSET(){return L0}static get TIME_24_WITH_LONG_OFFSET(){return U0}static get DATETIME_SHORT(){return j0}static get DATETIME_SHORT_WITH_SECONDS(){return _0}static get DATETIME_MED(){return V0}static get DATETIME_MED_WITH_SECONDS(){return q0}static get DATETIME_MED_WITH_WEEKDAY(){return Vw}static get DATETIME_FULL(){return W0}static get DATETIME_FULL_WITH_SECONDS(){return z0}static get DATETIME_HUGE(){return K0}static get DATETIME_HUGE_WITH_SECONDS(){return Z0}}function zo(e){if(K.isDateTime(e))return e;if(e&&e.valueOf&&jr(e.valueOf()))return K.fromJSDate(e);if(e&&typeof e=="object")return K.fromObject(e);throw new wt(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var G;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(G||(G={}));G.Years+"",G.Quarters+"",G.Months+"",G.Weeks+"",G.Days+"",G.Hours+"",G.Minutes+"",G.Seconds+"",G.Milliseconds+"";G.Years+"",G.Quarters+"",G.Months+"",G.Weeks+"",G.Days+"",G.Hours+"",G.Minutes+"",G.Seconds+"",G.Milliseconds+"";const Sp=[G.Milliseconds,G.Seconds,G.Minutes,G.Hours,G.Days,G.Weeks,G.Months,G.Quarters,G.Years];G.Milliseconds+"",G.Seconds+"",G.Minutes+"",G.Hours+"",G.Days+"",G.Weeks+"",G.Months+"",G.Quarters+"",G.Years+"";function B2(e){return Sp.filter(t=>e[t])}function lc(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function R2(e){return lc(Math.max(e-.4,0),{roundToDigits:0})}function um(e){return e===0?0:Math.sign(e)}function so(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),u=B2(t).reverse();if(o||s)return u.forEach(g=>{r[g]=o?1/0:-1/0}),r;let a=ie.fromObject(e).as(G.Milliseconds);const l=um(a);u.forEach((g,E)=>{const D=E===u.length-1;if(g===G.Milliseconds)r.milliseconds=lc(a,i);else{const S=ie.fromObject({milliseconds:a}).as(g),A=Math.sign(S),T=Math.abs(S),_=D?lc(T,i):Math.floor(i.roundToDigits==null?T:R2(T)),z=_===0?0:_*A;r[g]=z,a-=ie.fromObject({[g]:z}).as(G.Milliseconds),l!==um(a)&&(a=0)}});let c=!1;const f=[],p=Sp.toReversed().filter(g=>r[g]?(c=!0,!0):c?(f.push(g),!1):!0);if(p.length<u.length){const g={};p.forEach(D=>g[D]=!0);const E=so(e,g,i);return f.forEach(D=>E[D]=0),E}return r}var qe;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(qe||(qe={}));qe.Year,qe.Hour,qe.Minute,qe.Second,qe.Millisecond;qe.Quarter,qe.Month,qe.Week,qe.Day;qe.Millisecond,qe.Second,qe.Minute,qe.Hour,qe.Day,qe.Week,qe.Month,qe.Quarter,qe.Year;var bt;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(bt||(bt={}));bt.Sunday+"",bt.Monday+"",bt.Tuesday+"",bt.Wednesday+"",bt.Thursday+"",bt.Friday+"",bt.Saturday+"";bt.Sunday,bt.Monday,bt.Tuesday,bt.Wednesday,bt.Thursday,bt.Friday,bt.Saturday;var Lt;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Lt||(Lt={}));Lt.January,Lt.February,Lt.March,Lt.April,Lt.May,Lt.June,Lt.July,Lt.August,Lt.September,Lt.October,Lt.November,Lt.December;function bs(e){const t=new F0,r=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:so(e,{milliseconds:!0}).milliseconds;return r!==1/0&&r!==-1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}function Np(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}var L2=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Er;(function(e){e.Node="node",e.Web="web"})(Er||(Er={}));function U2(){return L2?Er.Node:Er.Web}const Ip=U2();function j2(e){return Ip===e}function Tp(e){return e[Ip]()}function Mp(e,t){return!!t&&!!new RegExp(Np(t),"i").exec(e)}class d extends Error{name="AssertionError";constructor(t,n){super(pa(n,t)||"Assertion failed.")}}const am={interval:{milliseconds:100},timeout:{seconds:10}},gl=Symbol("not set");async function _2(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:o,options:s}=V2(t),u=so(s.timeout,{milliseconds:!0}).milliseconds,a=so(s.interval,{milliseconds:!0});let l=gl,c;async function f(){try{l=n?r():await r(),e(l,...i)}catch(g){l=gl,c=Wt(g)}}const p=Date.now();for(;l===gl;)if(await f(),await bs(a),Date.now()-p>=u){const E=`${o?`${o}: `:""}Timeout of '${u}' milliseconds exceeded waiting for callback value to match expectations`;throw Kc(c,E)}return l}function N(e,t=!1){return((...n)=>_2(e,n,t))}function V2(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Pp(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Pp(e){return{interval:e?.interval||am.interval,timeout:e?.timeout||am.timeout}}const Ko={isFalse(e,t){if(e!==!1)throw new d(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new d(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new d(`'${m(e)}' is not truthy.`,t)}},Op={assert:Ko,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new d(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new d(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new d(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:N(Ko.isFalse),isFalsy:N(Ko.isFalsy),isTrue:N(Ko.isTrue),isTruthy:N(Ko.isTruthy)}};function q2(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new d(`${m(e)} does not end with ${m(t)}}`,n)}function W2(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new d(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new d(`${m(e)} ends with ${m(t)}}`,n)}function z2(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new d(`${m(e)} does not start with ${m(t)}}`,n)}function K2(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new d(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new d(`${m(e)} starts with ${m(t)}}`,n)}const Zo={endsWith:q2,endsWithout:W2,startsWith:z2,startsWithout:K2},Bp={assert:Zo,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new d(`${m(e)} does not end with ${m(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new d(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new d(`${m(e)} ends with ${m(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new d(`${m(e)} does not start with ${m(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new d(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new d(`${m(e)} starts with ${m(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:N(Zo.endsWith),endsWithout:N(Zo.endsWithout),startsWith:N(Zo.startsWith),startsWithout:N(Zo.startsWithout)}};function Z2(e,t,n){const r=Rn(t);if(!r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function lr(e,t){return Rn(t).includes(e)}const yl={isEnumValue(e,t,n){Z2(e,t,n)},isNotEnumValue(e,t,n){const r=Rn(t);if(r.includes(e))throw new d(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},Rp={assert:yl,check:{isEnumValue:lr,isNotEnumValue(e,t){return!Rn(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=Rn(t);if(!r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=Rn(t);if(r.includes(e))throw new d(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Rn(t).includes(e))return e},isNotEnumValue(e,t){if(!Rn(t).includes(e))return e}},waitUntil:{isEnumValue:N(yl.isEnumValue),isNotEnumValue:N(yl.isNotEnumValue)}},wl={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new d(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new d(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new d(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))throw new d("Entries are equal.",n)}},Lp={assert:wl,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],o=t[r];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],o=t[r];return i!==o})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new d(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new d(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new d(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],u=t[o];return s!==u}))return e;throw new d("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:N(wl.entriesEqual),notEntriesEqual:N(wl.notEntriesEqual)}};function Ju(e,t){return JSON.stringify(e)===JSON.stringify(t)}function $s(e,t){if(!(e===t||Ju(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!Ju(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{$s(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${Kt(s)}`)}})}throw new Error("Values are not JSON equal.")}}function is(e,t){if(e===t||Ju(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Ju(n,r)?!1:Object.keys(e).every(o=>is(e[o],t[o]))}return!1}const bl={jsonEquals(e,t,n){try{$s(e,t)}catch(r){throw new d(Kt(r),n)}},notJsonEquals(e,t,n){try{$s(e,t)}catch{return}throw new d("Values are JSON equal.",n)}},Up={assert:bl,check:{jsonEquals(e,t){return is(e,t)},notJsonEquals(e,t){return!is(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return $s(e,t),e}catch(r){throw new d(Kt(r),n)}},notJsonEquals(e,t,n){try{$s(e,t)}catch{return e}throw new d("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(is(e,t))return e},notJsonEquals(e,t){if(!is(e,t))return e}},waitUntil:{jsonEquals:N(bl.jsonEquals),notJsonEquals:N(bl.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function lm(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function jp(){this._key="chai/deep-eql__"+Math.random()+Date.now()}jp.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var _p=typeof WeakMap=="function"?WeakMap:jp;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function cm(e,t,n){if(!n||uo(e)||uo(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function wu(e,t,n,r){if(!(!n||uo(e)||uo(t))){var i=n.get(e);i?i.set(t,r):(i=new _p,i.set(t,r),n.set(e,i))}}function Bn(e,t,n){if(n&&n.comparator)return fm(e,t,n);var r=Vp(e,t);return r!==null?r:fm(e,t,n)}function Vp(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:uo(e)||uo(t)?!1:null}/*!
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
*/function fm(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new _p;var r=n&&n.comparator,i=cm(e,t,n.memoize);if(i!==null)return i;var o=cm(t,e,n.memoize);if(o!==null)return o;if(r){var s=r(e,t);if(s===!1||s===!0)return wu(e,t,n.memoize,s),s;var u=Vp(e,t);if(u!==null)return u}var a=lm(e);if(a!==lm(t))return wu(e,t,n.memoize,!1),!1;wu(e,t,n.memoize,!0);var l=G2(e,t,a,n);return wu(e,t,n.memoize,l),l}function G2(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Bn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return qp(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return bi(e,t,r);case"RegExp":return Y2(e,t);case"Generator":return J2(e,t,r);case"DataView":return bi(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return bi(new Uint8Array(e),new Uint8Array(t),r);case"Set":return dm(e,t,r);case"Map":return dm(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return X2(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function Y2(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function dm(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(s,u){r.push([s,u])}),t.forEach(function(s,u){i.push([s,u])}),bi(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function bi(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Bn(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function J2(e,t,n){return bi(cc(e),cc(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function H2(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function mm(e){if(H2(e))try{return cc(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function cc(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function hm(e){var t=[];for(var n in e)t.push(n);return t}function pm(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function qp(e,t,n,r){var i=n.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Bn(e[n[o]],t[n[o]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function X2(e,t,n){var r=hm(e),i=hm(t),o=pm(e),s=pm(t);if(r=r.concat(o),i=i.concat(s),r.length&&r.length===i.length)return bi(gm(r).sort(),gm(i).sort())===!1?!1:qp(e,t,r,n);var u=mm(e),a=mm(t);return u.length&&u.length===a.length?(u.sort(),a.sort(),bi(u,a,n)):r.length===0&&u.length===0&&i.length===0&&a.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function uo(e){return e===null||typeof e!="object"}function gm(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}function Or(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const Mr={strictEquals(e,t,n){if(e!==t)throw new d(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new d(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new d(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new d(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!Bn(e,t,{comparator:Or}))throw new d(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Bn(e,t,{comparator:Or}))throw new d(`

${m(e)}

deeply equals

${m(t)}

`,n)}},Wp=Mr.deepEquals,zp={assert:Mr,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Bn(e,t,{comparator:Or})},notDeepEquals(e,t){return!Bn(e,t,{comparator:Or})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new d(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new d(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new d(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new d(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(Bn(e,t,{comparator:Or}))return e;throw new d(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Bn(e,t,{comparator:Or}))throw new d(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Bn(e,t,{comparator:Or}))return e},notDeepEquals(e,t){if(!Bn(e,t,{comparator:Or}))return e}},waitUntil:{strictEquals:N(Mr.strictEquals),notStrictEquals:N(Mr.notStrictEquals),looseEquals:N(Mr.looseEquals),notLooseEquals:N(Mr.notLooseEquals),deepEquals:N(Mr.deepEquals),notDeepEquals:N(Mr.notDeepEquals)}};function en(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Dn(e,t){return typeof t=="string"?t.includes(e):en(t,e)}const sr={hasValue(e,t,n){if(!en(e,t))throw new d(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(en(e,t))throw new d(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new d(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new d(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new d(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!Dn(e,t))throw new d(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(Dn(e,t))throw new d(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new d(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new d(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${m(e)}' is not empty.`,t)}}},Kp={assert:sr,check:{hasValue(e,t){return en(e,t)},lacksValue(e,t){return!en(e,t)},hasValues(e,t){return t.every(n=>en(e,n))},lacksValues(e,t){return t.every(n=>!en(e,n))},isIn(e,t){return Dn(e,t)},isNotIn(e,t){return!Dn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!en(e,t))throw new d(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(en(e,t))throw new d(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>!i.includes(o))}catch{throw new d(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new d(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);r=t.filter(o=>i.includes(o))}catch{}if(r.length)throw new d(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!Dn(e,t))throw new d(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(Dn(e,t))throw new d(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new d(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new d(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(en(e,t))return e},lacksValue(e,t){if(!en(e,t))return e},hasValues(e,t){if(t.every(n=>en(e,n)))return e},lacksValues(e,t){if(!t.every(n=>en(e,n)))return e},isIn(e,t){if(Dn(e,t))return e},isNotIn(e,t){if(!Dn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:N(sr.hasValue),lacksValue:N(sr.lacksValue),hasValues:N(sr.hasValues),lacksValues:N(sr.lacksValues),isIn:N(sr.isIn),isNotIn:N(sr.isNotIn),isEmpty:N(sr.isEmpty),isNotEmpty:N(sr.isNotEmpty)}},$l={isHttpStatus(e,t){if(!lr(e,$))throw new d(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(lr(e,$)){if(!Dn(e,Mu[t]))throw new d(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new d(`${m(e)} is not a valid HTTP status.`,n)}},Zp={assert:$l,check:{isHttpStatus(e){return lr(e,$)},isHttpStatusCategory(e,t){return lr(e,$)&&Dn(e,Mu[t])}},assertWrap:{isHttpStatus(e,t){if(!lr(e,$))throw new d(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(lr(e,$)){if(!Dn(e,Mu[t]))throw new d(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new d(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(lr(e,$))return e},isHttpStatusCategory(e,t){if(lr(e,$)&&Dn(e,Mu[t]))return e}},waitUntil:{isHttpStatus:N($l.isHttpStatus),isHttpStatusCategory:N($l.isHttpStatusCategory)}},Dl={instanceOf(e,t,n){if(!(e instanceof t))throw new d(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new d(`'${m(e)}' is an instance of '${t.name}'`,n)}},Gp={assert:Dl,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new d(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new d(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:N(Dl.instanceOf),notInstanceOf:N(Dl.notInstanceOf)}},Q2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ee(e,t){return Q2.some(n=>{try{return n(e,t)}catch{return!1}})}const ci={isKeyOf(e,t,n){if(!Ee(t,e))throw new d(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(Ee(t,e))throw new d(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!Ee(e,t))throw new d(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Ee(e,t))throw new d(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!Ee(e,i));if(r.length)throw new d(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>Ee(e,i));if(r.length)throw new d(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},Yp={assert:ci,check:{isKeyOf(e,t){return Ee(t,e)},isNotKeyOf(e,t){return!Ee(t,e)},hasKey:Ee,lacksKey(e,t){return!Ee(e,t)},hasKeys(e,t){return t.every(n=>Ee(e,n))},lacksKeys(e,t){return t.every(n=>!Ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!Ee(t,e))throw new d(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Ee(t,e))throw new d(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!Ee(e,t))throw new d(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Ee(e,t))throw new d(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!Ee(e,i));if(r.length)throw new d(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>Ee(e,i));if(r.length)throw new d(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Ee(t,e))return e},isNotKeyOf(e,t){if(!Ee(t,e))return e},hasKey(e,t){if(Ee(e,t))return e},lacksKey(e,t){if(!Ee(e,t))return e},hasKeys(e,t){if(t.every(n=>Ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!Ee(e,n)))return e}},waitUntil:{isKeyOf:N(ci.isKeyOf),isNotKeyOf:N(ci.isNotKeyOf),hasKey:N(ci.hasKey),lacksKey:N(ci.lacksKey),hasKeys:N(ci.hasKeys),lacksKeys:N(ci.lacksKeys)}};function e$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,n)}function t$(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,n)}const vl={isLengthAtLeast:e$,isLengthExactly:t$},Jp={assert:vl,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:ke(e).length)===t)return e})},waitUntil:{isLengthAtLeast:N(vl.isLengthAtLeast),isLengthExactly:N(vl.isLengthExactly)}},n$={never(e){throw new d("This code should not have executed.",e)}},Hp={assert:n$,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},El={isDefined(e,t){if(e==null)throw new d(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new d(`'${m(e)}' is not a nullish.`,t)}},Xp={assert:El,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new d(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new d(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:N(El.isDefined),isNullish:N(El.isNullish)}},Bt={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new d(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new d(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new d(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new d(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new d(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new d(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new d(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new d(`${e} is within ±${n} of ${t}`,r)}},Qp={assert:Bt,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new d(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new d(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new d(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new d(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new d(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new d(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new d(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new d(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:N(Bt.isInBounds),isOutBounds:N(Bt.isOutBounds),isInteger:N(Bt.isInteger),isNotInteger:N(Bt.isNotInteger),isAbove:N(Bt.isAbove),isAtLeast:N(Bt.isAtLeast),isBelow:N(Bt.isBelow),isAtMost:N(Bt.isAtMost),isNaN:N(Bt.isNaN),isFinite:N(Bt.isFinite),isInfinite:N(Bt.isInfinite),isApproximately:N(Bt.isApproximately),isNotApproximately:N(Bt.isNotApproximately)}};function r$(e,t,n,r,i){return Vs(...Da(e,t,n,r,i),!1)}function Da(e,t,n,r,i){const o=Array.isArray(n);return[o?e:Wp,o?t:e,o?n:t,o?r:n,o?i:r]}function Vs(e,t,n,r,i,o){const s=t(...n);if(s instanceof Promise)return new Promise(async(u,a)=>{try{const l=await s;e(l,r),o?u(l):u()}catch(l){a(new d(`Output from '${t.name}' did not produce expected output. ${Kt(l)}`,i))}});try{return e(s,r),o?s:void 0}catch(u){throw new d(`Output from '${t.name}' did not produce expected output. ${Kt(u)}`,i)}}function i$(e,t,n,r,i){try{const o=Vs(...Da(e,t,n,r,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function o$(e,t,n,r,i){return Vs(...Da(e,t,n,r,i),!0)}function s$(e,t,n,r,i){try{const o=Vs(...Da(e,t,n,r,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Cl=Symbol("not set");async function u$(e,t,n,r,i,o){const s=Array.isArray(n),u=s?e:Wp,a=s?t:e,l=s?n:t,c=s?r:n,f=Pp(s?i:r),p=s?o:i,g=so(f.timeout,{milliseconds:!0}).milliseconds,E=so(f.interval,{milliseconds:!0});let D=Cl,S;async function A(){try{D=await Vs(u,a,l,c,void 0,!0)}catch(_){D=Cl,S=Wt(_)}}const T=Date.now();for(;D===Cl;)if(await A(),await bs(E),Date.now()-T>=g)throw Kc(S,pa(p,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return D}const a$={output:r$},eg={assert:a$,check:{output:i$},assertWrap:{output:o$},checkWrap:{output:s$},waitUntil:{output:u$}},Go={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${m(e)}' is not a Primitive.`,t)}},tg={assert:Go,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:N(Go.isNotPrimitive),isNotPropertyKey:N(Go.isNotPropertyKey),isPrimitive:N(Go.isPrimitive),isPropertyKey:N(Go.isPropertyKey)}},Yo={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${m(e)}' is a Promise.`,t)}},ng={assert:Yo,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:N(Yo.isPromiseLike,!0),isNotPromiseLike:N(Yo.isNotPromiseLike,!0),isPromise:N(Yo.isPromise,!0),isNotPromise:N(Yo.isNotPromise,!0)}},xl={matches(e,t,n){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new d(`'${e}' matches ${t}`,n)}},rg={assert:xl,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new d(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:N(xl.matches,!0),mismatches:N(xl.mismatches,!0)}},Oe={isArray(e,t){if(!Array.isArray(e))throw new d(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new d(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new d(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new d(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new d(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new d(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new d(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${m(e)}' is a undefined.`,t)}},ig={assert:Oe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new d(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new d(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new d(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new d(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new d(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new d(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new d(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:N(Oe.isArray),isBigInt:N(Oe.isBigInt),isBoolean:N(Oe.isBoolean),isFunction:N(Oe.isFunction),isNull:N(Oe.isNull),isNumber:N(Oe.isNumber),isObject:N(Oe.isObject),isString:N(Oe.isString),isSymbol:N(Oe.isSymbol),isUndefined:N(Oe.isUndefined),isNotArray:N(Oe.isNotArray),isNotBigInt:N(Oe.isNotBigInt),isNotBoolean:N(Oe.isNotBoolean),isNotFunction:N(Oe.isNotFunction),isNotNull:N(Oe.isNotNull),isNotNumber:N(Oe.isNotNumber),isNotObject:N(Oe.isNotObject),isNotString:N(Oe.isNotString),isNotSymbol:N(Oe.isNotSymbol),isNotUndefined:N(Oe.isNotUndefined)}};var Ut;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ut||(Ut={}));function tf(e,t,n){nf(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}function ym(e,t,n){nf(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}function nf(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new d(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Kt(e);if(typeof n.matchMessage=="string"){if(!Mp(i,n.matchMessage))throw new d(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new d(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new d(t.notInstance,r);else throw new d(t.noError,r)}function wm(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=Kt(e);if(typeof t.matchMessage=="string"){if(!Mp(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function va(e,t,n,r){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,u)=>{try{await o}catch(a){i=Wt(a)}try{ym(i,n,r),e===Ut.Assert?s():e===Ut.Check?s(!0):s(i)}catch(a){e===Ut.CheckWrap?s(void 0):e===Ut.Check?s(!1):u(Wt(a))}})}catch(o){i=Wt(o)}try{return ym(i,n,r),e===Ut.Check?!0:e!==Ut.Assert?i:void 0}catch(o){if(e===Ut.CheckWrap)return;if(e===Ut.Check)return!1;throw o}}function l$(e,t,n){return va(Ut.Assert,e,t,n)}function c$(e,t){return va(Ut.Check,e,t)}function f$(e,t,n){return va(Ut.AssertWrap,e,t,n)}function d$(e,t,n){return va(Ut.CheckWrap,e,t,n)}const m$=N(tf);function h$(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof n=="object"?r:n,u=typeof n=="object"?n:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${m(o)}'`);return m$(i,async()=>{try{await o();return}catch(a){return Wt(a)}},u,s)}const p$={throws:l$,isError:tf},og={assert:p$,check:{throws:c$,isError(e,t){return wm(e,t)}},assertWrap:{throws:f$,isError(e,t,n){return nf(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:d$,isError(e,t){if(wm(e,t))return e}},waitUntil:{throws:h$,isError:N(tf)}},Br=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Al={isUuid(e,t){if(!String(e).match(Br))throw new d(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Br))throw new d(`'${String(e)}' is a UUID.`,t)}},sg={assert:Al,check:{isUuid(e){return!!String(e).match(Br)},isNotUuid(e){return!String(e).match(Br)}},assertWrap:{isUuid(e,t){if(!String(e).match(Br))throw new d(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Br))throw new d(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Br))return e},isNotUuid(e){if(!String(e).match(Br))return e}},waitUntil:{isUuid:N(Al.isUuid),isNotUuid:N(Al.isNotUuid)}},g$={...Hp.assert,...Op.assert,...Bp.assert,...Lp.assert,...Rp.assert,...Zp.assert,...Gp.assert,...Up.assert,...Yp.assert,...Jp.assert,...Xp.assert,...Qp.assert,...eg.assert,...tg.assert,...ng.assert,...rg.assert,...ig.assert,...zp.assert,...og.assert,...sg.assert,...Kp.assert},rf=[Op,Bp,Lp,Rp,Zp,Gp,Up,Yp,Jp,Hp,Xp,Qp,eg,tg,ng,rg,ig,zp,og,sg,Kp],y$=Object.assign({},...rf.map(e=>e.check)),F=Object.assign(function(t){return!!t},y$);function w$(e,t,n){return Ru(e,t,n,new Set)}function Ru(e,t,n,r){if(e=bm(e),t=bm(t),F.isObject(e)&&F.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ru(ke(e).sort(),ke(t).sort(),n,r))return!1;let i=!1;const o=ke(e).map(s=>{const u=Ru(e[s],t[s],n,r);return F.isPromise(u)&&(i=!0),u});return $m(i,o)}else if(F.isArray(e)&&F.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,u)=>{const a=Ru(s,t[u],n,r);return F.isPromise(a)&&(i=!0),a});return $m(i,o)}else return n(e,t)}function bm(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function $m(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(F.isTrue))}catch(i){r(Wt(i))}}):t.every(F.isTrue)}const b$=Object.assign({},...rf.map(e=>e.assertWrap)),Ds=Object.assign(function(t,n){if(!t)throw new d("Assertion failed.",n);return t},b$);function $$(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const D$={tsType:$$},v$={assert:D$},E$={fail:e=>{throw new d("Failure triggered.",e)}},C$={...v$.assert,...g$,...E$},er=Object.assign(function(t,n){if(!t)throw new d("Assertion failed.",n)},C$),x$=Object.assign({},...rf.map(e=>e.checkWrap)),A$=Object.assign(function(t){if(t)return t},x$);function F$(e,t){return F.hasKey(e,"entryType")&&e.entryType===t}function _i(e,t){return e.controlType===t}var ue=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(ue||{});const ug=Symbol("any-type"),k$={checkbox:!1,color:"",dropdown:"",hidden:ug,number:0,text:""};function S$(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const o=k$[i.controlType];o!==ug&&(typeof o!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function N$(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return F.isPromise(i)?new Promise(async(o,s)=>{try{const u=await i;e.set(r,u),o(u)}catch(u){s(Wt(u))}}):(e.set(r,i),i)}}function qs(e,t,n){if(t in e)return e[t];{const r=n();return F.isPromise(r)?new Promise(async(i,o)=>{try{const s=await r;e[t]=s,i(s)}catch(s){o(Wt(s))}}):(e[t]=r,r)}}function of(e){return ke(e).map(t=>[t,e[t]])}function fc(e){return Object.fromEntries(e)}function No(e,t,n){return e.reduce((r,i,o,s)=>{const u=t(i,o,s);return n(u,i,o,s)&&r.push(u),r},[])}function I$(e){return Array.isArray(e)?e:[e]}function ag(e,t=n=>n){const n=new Map;return e.filter(r=>{const i=t(r);return n.get(i)?!1:(n.set(i,r),!0)})}function T$({min:e,max:t}){const{min:n,max:r}=A0({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const u=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do crypto.getRandomValues(a),l=a.reduce((c,f,p)=>c+f*256**p,0);while(l>=u);return n+l%i}const Dm=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function lg(e=16){let t="";for(let n=0;n<e;n++){const r=T$({min:0,max:Dm.length-1});t+=Dm[r]}return t}function cg(e){if(F.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Kt(t).trim()).join(`
`))}function M$(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const P$="modulepreload",O$=function(e){return"/element-vir/vira/"+e},vm={},fg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=s?.nonce||s?.getAttribute("nonce");i=a(n.map(l=>{if(l=O$(l),l in vm)return;vm[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":P$,c||(p.as="script"),p.crossOrigin="",p.href=l,u&&p.setAttribute("nonce",u),document.head.appendChild(p),c)return new Promise((g,E)=>{p.addEventListener("load",g),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return i.then(s=>{for(const u of s||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};var Qe;(function(e){e.Standard="stdout",e.Error="stderr"})(Qe||(Qe={}));var X;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(X||(X={}));async function B$(){return await Tp({async[Er.Node](){const e=(await fg(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[X.Bold]:e.bold.open,[X.Debug]:e.blueBright.open,[X.Error]:e.red.open,[X.Faint]:e.gray.open,[X.Info]:e.cyan.open,[X.Mutate]:e.magenta.open,[X.NormalWeight]:"\x1B[22m",[X.Plain]:"",[X.Reset]:e.reset.open,[X.Success]:e.green.open,[X.Warning]:e.yellow.open}},[Er.Web](){return Promise.resolve({[X.Bold]:"font-weight: bold",[X.Debug]:"color: blue",[X.Error]:"color: red",[X.Faint]:"color: grey",[X.Info]:"color: teal",[X.Mutate]:"color: magenta",[X.NormalWeight]:"",[X.Plain]:"",[X.Reset]:"",[X.Success]:"color: green",[X.Warning]:"color: orange"})}})}const Qt=await B$(),R$={[X.Bold]:{colors:[Qt.bold],logType:Qe.Standard},[X.Debug]:{colors:[Qt.debug],logType:Qe.Standard},[X.Faint]:{colors:[Qt.faint],logType:Qe.Standard},[X.Info]:{colors:[Qt.info],logType:Qe.Standard},[X.Mutate]:{colors:[Qt.mutate,Qt.bold],logType:Qe.Standard},[X.NormalWeight]:{colors:[Qt.normalWeight],logType:Qe.Standard},[X.Plain]:{colors:[],logType:Qe.Standard},[X.Reset]:{colors:[Qt.reset],logType:Qe.Standard},[X.Success]:{colors:[Qt.success,Qt.bold],logType:Qe.Standard},[X.Error]:{colors:[Qt.error,Qt.bold],logType:Qe.Error},[X.Warning]:{colors:[Qt.warning],logType:Qe.Error}};function zt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Qi({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function L$(e,t){try{let n=!1;const r=of(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(n=!0,s):s?[s.key,s.value]:void 0}).filter(F.isTruthy);return n?new Promise(async(i,o)=>{try{const s=No(await Promise.all(r),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},F.isTruthy);i(fc(s))}catch(s){o(Wt(s))}}):fc(r)}catch(n){throw Wt(n)}}function U$(e,t){return L$(e,(n,r)=>{const i=r,o=t(r,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function dg(e,...t){const n={...e};return t.forEach(r=>{r&&of(r).forEach(([i,o])=>{o!=null&&(n[i]=o)})}),n}const j$="px";function mg(e){return hg({value:e,suffix:j$})}function hg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function _$({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function V$(){return await Tp({async[Er.Node](){const{inspect:e}=await fg(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(u=>typeof u=="string"?u:e(u));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[X.Reset].colors.join("")].join(""),css:void 0}}},[Er.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:No(n.colorConfig[t].colors,s=>_$({value:s,suffix:";"}),F.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?Kt(s):m(s)).join(`
`),n.omitColors?"":n.colorConfig[X.Reset].colors.join("")].join(""),css:r}}}})}const q$=await V$(),W$={colorConfig:R$,omitColors:!1},z$=pg({[Qe.Error](){},[Qe.Standard](){}});function pg(e,t){const n=dg(W$,t);function r(o){e[n.colorConfig[o.colorKey].logType](q$({...o,options:n}))}const i=U$(X,o=>(...s)=>r({args:s,colorKey:o}));return{...i,if(o){return o?i:z$}}}const K$=j2(Er.Node)?{[Qe.Error]({text:e}){process.stderr.write(e+`
`)},[Qe.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Qe.Error]({text:e,css:t}){console.error(zt({value:e,prefix:"%c"}),t)},[Qe.Standard]({text:e,css:t}){console.log(zt({value:e,prefix:"%c"}),t)}},Z$=pg(K$);function G$(e,{min:t,max:n}){return Math.min(Math.max(e,t),n)}function gg(...e){const t=e.join(""),n=ag(Array.from(t));return Array.from(n).join("")}function yg(e,t){const n=gg([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Y$(e,n)}function Y$(e,t){const n=gg(t);return typeof e=="string"?new RegExp(Np(e),n):new RegExp(e.source,n)}function wg(e,{caseSensitive:t}){return yg(e,"")}function J$({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){const i=yg(wg(t,{caseSensitive:n}),"g"),o=[];return e.replace(i,(...s)=>{const u=s[s.length-2];if(typeof u!="number")throw new TypeError(`Match index "${u}" is not a number. Searching for "${t}" in "${e}".`);const a=s[0];if(typeof a!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof a}!`);o.push({index:u,length:a.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${u} is not a string.`);return l}),o}function H$(e,t,{caseSensitive:n}){const r=J$({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=wg(t,{caseSensitive:n});return e.split(i).reduce((s,u,a)=>{const l=r[a],c=s.concat(u);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function X$(e,t){return e.split(t)}function Em(e,t){const{min:n,max:r}=A0(t);if(t.takeOverflow){const i=r-n+1,o=(e-n)%i;return o<0?n+i+o:n+o}else return e>r?n:e<n?r:e}function an(e,t){let n=!1;const r=ke(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(n=!0),i[o]=s,i},{});return n?new Promise(async(i,o)=>{try{await Promise.all(ke(r).map(async s=>{const u=await r[s];r[s]=u})),i(r)}catch(s){o(Wt(s))}}):r}function sf(e,t){const n=of(e).filter(([r,i])=>t(r,i,e));return fc(n)}function Q$(e,t){return sf(e,n=>!t.includes(n))}function Cm(e){return ke(e).map(t=>e[t])}function eD(e,t){return t.capitalizeFirstLetter?tD(e):e}function tD(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const nD={capitalizeFirstLetter:!1};var ao;(function(e){e.Upper="upper",e.Lower="lower"})(ao||(ao={}));function rD(e){return e.toLowerCase()!==e.toUpperCase()}function xm(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(rD(r)){if(t===ao.Upper&&r!==r.toUpperCase()||t===ao.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function iD(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return eD(r,dg(nD,t))}function oD(e){return e.split("").reduce((n,r,i,o)=>{const s=i>0&&o[i-1]||"",u=i<o.length-1&&o[i+1]||"",a=xm(s,ao.Lower,{rejectNoCaseCharacters:!0})||xm(u,ao.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function bg(e,t=1){return e.split(`
`).map(n=>["    ".repeat(Math.round(t)),n].join("")).join(`
`)}function sD(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function $g(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function uD({value:e,wrapper:t}){return zt({value:hg({value:e,suffix:t}),prefix:t})}function Yr(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function Dg(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}class aD{listeners={};universalListeners=new Map;getListenerCount(){return Cm(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)+this.universalListeners.size}listenToAll(t,n={}){const r=()=>this.universalListeners.delete(t)||!1;function i(o,s){n.once&&r(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:r}),r}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,n,r={}){const i=F.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(n)||!1;function s(u,a){r.once&&o(),n(u,a)}return qs(this.listeners,i,()=>new Map).set(n,{listener:s,removeListener:o}),o}removeListener(t,n){const r=F.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const o=i.get(n);return o?o.removeListener():!1}dispatch(t){const n=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),r+this.universalListeners.size}removeAllListeners(){const n=Cm(this.listeners).reduce((r,i)=>{const o=i.size||0;return i.clear(),r+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),n}destroy(){this.removeAllListeners()}}class uf extends aD{}function vg(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Am(e,t,n){return vg(globalThis,e,t,n)}function af(e,t){return Hu(e.title),e.parent?[...af(e.parent),Hu(e.parent.title)].concat([]):[]}function Hu(e){return $g(e).toLowerCase().replaceAll(/\s/g,"-")}function lD({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const cD={[Dt.ElementExample]:()=>[],[Dt.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...S$(e.controls,e.title)].filter(F.isTruthy),[Dt.Root]:()=>[]},Xu="_isBookTreeNode",Eg=new Map;function fD(e){return Eg.get(e)}function dD(e,t){N$(Eg,e,()=>t)}function eo(e,t){return Cg(e)&&e.entry.entryType===t}function Cg(e){return!!(F.hasKeys(e,[Xu,"entry"])&&e[Xu])}function mD(){return{[Xu]:!0,entry:{entryType:Dt.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function hD({entries:e,debug:t}){const n=fD(e);if(n)return n;const r=mD();e.forEach(s=>lf({tree:r,newEntry:s,debug:t,manuallyAdded:!0}));const i=xg(r),o={tree:r,flattenedNodes:i};return dD(e,o),t&&console.info("element-book tree:",r),o}function pD(e,t,n){if(!t.parent)return e;const r=dc(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),lf({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=dc(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${af(t).join(" > ")}`);return i}function lf({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=cD[t.entryType](t);t.errors.push(...i);const o=pD(e,t,n),s=Hu(t.title),u=o.children[s];if(u){if(r){if(u.manuallyAdded){u.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}u.manuallyAdded=!0}return}const a={[Xu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=a,F$(t,Dt.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>lf({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function dc(e,t){const n=Cg(e)?e.fullUrlBreadcrumbs.slice(0,-1):af(e);return n.length?n.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function xg(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>xg(i));return[e,...n].flat()}function cf(e,t){return ff(e,["",...t],void 0)}function ff(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const o=e.children[i||""],s=o&&ff(o,r,n);return{...e.controls,...s}}function gD(e,t,n){const r={...e};return ff(r,["",...t],n),r}function Ag(e,t){const n=t?.controls||(eo(e,Dt.Page)?an(e.entry.controls,(i,o)=>o.initValue):{});return{children:an(e.children,(i,o)=>Ag(o,t?.children?.[o.urlBreadcrumb])),controls:n}}function mt(e){const t={...e,entryType:Dt.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:Dt.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(F.isTruthy)};n.add(r.title),t.elementExamples[Hu(i.title)]=i}}),t}var Ln=(e=>(e.Search="search",e.Book="book",e))(Ln||{});function mc(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const lo={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lu=globalThis,df=Lu.ShadowRoot&&(Lu.ShadyCSS===void 0||Lu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mf=Symbol(),Fm=new WeakMap;let Fg=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==mf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(df&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Fm.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fm.set(n,t))}return t}toString(){return this.cssText}};const Ke=e=>new Fg(typeof e=="string"?e:e+"",void 0,mf),Uu=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new Fg(n,e,mf)},yD=(e,t)=>{if(df)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),i=Lu.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},km=df?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Ke(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wD,defineProperty:bD,getOwnPropertyDescriptor:$D,getOwnPropertyNames:DD,getOwnPropertySymbols:vD,getPrototypeOf:ED}=Object,Ea=globalThis,Sm=Ea.trustedTypes,CD=Sm?Sm.emptyScript:"",xD=Ea.reactiveElementPolyfillSupport,cs=(e,t)=>e,Qu={toAttribute(e,t){switch(t){case Boolean:e=e?CD:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},hf=(e,t)=>!wD(e,t),Nm={attribute:!0,type:String,converter:Qu,reflect:!1,useDefault:!1,hasChanged:hf};Symbol.metadata??=Symbol("metadata"),Ea.litPropertyMetadata??=new WeakMap;let Zi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Nm){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&bD(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=$D(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){const u=i?.call(this);o?.call(this,s),this.requestUpdate(t,u,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nm}static _$Ei(){if(this.hasOwnProperty(cs("elementProperties")))return;const t=ED(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(cs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cs("properties"))){const n=this.properties,r=[...DD(n),...vD(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(km(i))}else t!==void 0&&n.push(km(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yD(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:Qu).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Qu;this._$Em=i;const u=s.fromAttribute(n,o.type);this[i]=u??this._$Ej?.get(i)??u,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??hf)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,u=this[i];s!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,o,u)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};Zi.elementStyles=[],Zi.shadowRootOptions={mode:"open"},Zi[cs("elementProperties")]=new Map,Zi[cs("finalized")]=new Map,xD?.({ReactiveElement:Zi}),(Ea.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pf=globalThis,ea=pf.trustedTypes,Im=ea?ea.createPolicy("lit-html",{createHTML:e=>e}):void 0,kg="$lit$",Lr=`lit$${Math.random().toFixed(9).slice(2)}$`,Sg="?"+Lr,AD=`<${Sg}>`,Di=document,vs=()=>Di.createComment(""),Es=e=>e===null||typeof e!="object"&&typeof e!="function",gf=Array.isArray,FD=e=>gf(e)||typeof e?.[Symbol.iterator]=="function",Fl=`[ 	
\f\r]`,Jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tm=/-->/g,Mm=/>/g,fi=RegExp(`>|${Fl}(?:([^\\s"'>=/]+)(${Fl}*=${Fl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pm=/'/g,Om=/"/g,Ng=/^(?:script|style|textarea|title)$/i,kD=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),SD=kD(1),ln=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),Bm=new WeakMap,yi=Di.createTreeWalker(Di,129);function Ig(e,t){if(!gf(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Im!==void 0?Im.createHTML(t):t}const ND=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=Jo;for(let u=0;u<n;u++){const a=e[u];let l,c,f=-1,p=0;for(;p<a.length&&(s.lastIndex=p,c=s.exec(a),c!==null);)p=s.lastIndex,s===Jo?c[1]==="!--"?s=Tm:c[1]!==void 0?s=Mm:c[2]!==void 0?(Ng.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=fi):c[3]!==void 0&&(s=fi):s===fi?c[0]===">"?(s=i??Jo,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,l=c[1],s=c[3]===void 0?fi:c[3]==='"'?Om:Pm):s===Om||s===Pm?s=fi:s===Tm||s===Mm?s=Jo:(s=fi,i=void 0);const g=s===fi&&e[u+1].startsWith("/>")?" ":"";o+=s===Jo?a+AD:f>=0?(r.push(l),a.slice(0,f)+kg+a.slice(f)+Lr+g):a+Lr+(f===-2?u:g)}return[Ig(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Cs{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const u=t.length-1,a=this.parts,[l,c]=ND(t,n);if(this.el=Cs.createElement(l,r),yi.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=yi.nextNode())!==null&&a.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(kg)){const p=c[s++],g=i.getAttribute(f).split(Lr),E=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:E[2],strings:g,ctor:E[1]==="."?TD:E[1]==="?"?MD:E[1]==="@"?PD:Ca}),i.removeAttribute(f)}else f.startsWith(Lr)&&(a.push({type:6,index:o}),i.removeAttribute(f));if(Ng.test(i.tagName)){const f=i.textContent.split(Lr),p=f.length-1;if(p>0){i.textContent=ea?ea.emptyScript:"";for(let g=0;g<p;g++)i.append(f[g],vs()),yi.nextNode(),a.push({type:2,index:++o});i.append(f[p],vs())}}}else if(i.nodeType===8)if(i.data===Sg)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Lr,f+1))!==-1;)a.push({type:7,index:o}),f+=Lr.length-1}o++}}static createElement(t,n){const r=Di.createElement("template");return r.innerHTML=t,r}}function co(e,t,n=e,r){if(t===ln)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const o=Es(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=co(e,i._$AS(e,t.values),i,r)),t}let ID=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??Di).importNode(n,!0);yi.currentNode=i;let o=yi.nextNode(),s=0,u=0,a=r[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Io(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new OD(o,this,t)),this._$AV.push(l),a=r[++u]}s!==a?.index&&(o=yi.nextNode(),s++)}return yi.currentNode=Di,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class Io{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=co(this,t,n),Es(t)?t===fe||t==null||t===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):FD(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&Es(this._$AH)?this._$AA.nextSibling.data=t:this.T(Di.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Cs.createElement(Ig(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new ID(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(t){let n=Bm.get(t.strings);return n===void 0&&Bm.set(t.strings,n=new Cs(t)),n}k(t){gf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Io(this.O(vs()),this.O(vs()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ca{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=fe}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=co(this,t,n,0),s=!Es(t)||t!==this._$AH&&t!==ln,s&&(this._$AH=t);else{const u=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=co(this,u[r+a],n,a),l===ln&&(l=this._$AH[a]),s||=!Es(l)||l!==this._$AH[a],l===fe?t=fe:t!==fe&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class TD extends Ca{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}}class MD extends Ca{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}}class PD extends Ca{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=co(this,t,n,0)??fe)===ln)return;const r=this._$AH,i=t===fe&&r!==fe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==fe&&(r===fe||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class OD{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){co(this,t)}}const BD={I:Io},RD=pf.litHtmlPolyfillSupport;RD?.(Cs,Io),(pf.litHtmlVersions??=[]).push("3.3.1");const LD=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const o=n?.renderBefore??null;r._$litPart$=i=new Io(t.insertBefore(vs(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yf=globalThis;let fs=class extends Zi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=LD(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ln}};fs._$litElement$=!0,fs.finalized=!0,yf.litElementHydrateSupport?.({LitElement:fs});const UD=yf.litElementPolyfillSupport;UD?.({LitElement:fs});(yf.litElementVersions??=[]).push("4.2.1");function Jr(e){if(F.isObject(e))return an(e,(n,r)=>{if(!F.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(oD(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,s=n.startsWith("--")?Ke(n):n.startsWith("-")?Uu`-${Ke(n)}`:Uu`--${Ke(n)}`;return{name:s,value:Uu`var(${s}, ${Ke(o)})`,default:String(o)}});throw new TypeError(`Invalid setup input for '${Jr.name}' function.`)}function jD({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const le=Jr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),_D={nav:{hover:{background:le["element-book-nav-hover-background-color"],foreground:le["element-book-nav-hover-foreground-color"]},active:{background:le["element-book-nav-active-background-color"],foreground:le["element-book-nav-active-foreground-color"]},selected:{background:le["element-book-nav-selected-background-color"],foreground:le["element-book-nav-selected-foreground-color"]}},accent:{icon:le["element-book-accent-icon-color"]},page:{background:le["element-book-page-background-color"],backgroundFaint1:le["element-book-page-background-faint-level-1-color"],backgroundFaint2:le["element-book-page-background-faint-level-2-color"],foreground:le["element-book-page-foreground-color"],foregroundFaint1:le["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:le["element-book-page-foreground-faint-level-2-color"]}};function VD(e,t){Tg(e,t,_D)}function hc(e){return F.hasKey(e,"_$cssResult$")}function Rm(e){return F.hasKeys(e,["name","value","default"])&&F.isString(e.default)&&hc(e.name)&&hc(e.value)}function Tg(e,t,n){Object.entries(t).forEach(([r,i])=>{const o=n[r];if(!o)throw new Error(`no nestedCssVar at key '${r}'`);if(hc(i)){if(!Rm(o))throw new Error(`got a CSS result at '${r}' but no CSS var`);jD({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Rm(o))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);Tg(e,i,o)}})}function xe(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let r=t[0].length,i=t[0].map((s,u)=>t.map(a=>a[u])),o=e.map(s=>i.map(u=>{let a=0;if(!Array.isArray(s)){for(let l of u)a+=s*l;return a}for(let l=0;l<s.length;l++)a+=s[l]*(u[l]||0);return a}));return n===1&&(o=o[0]),r===1?o.map(s=>s[0]):o}function Ws(e){return _r(e)==="string"}function _r(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ta(e,{precision:t,unit:n}){return Wr(e)?"none":Mg(e,t)+(n??"")}function Wr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function We(e){return Wr(e)?0:e}function Mg(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const qD={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Pg(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let o=e.match(t);if(o){let s=[];return o[2].replace(i,(u,a)=>{let l=a.match(r),c=a;if(l){let f=l[0],p=c.slice(0,-f.length);f==="%"?(c=new Number(p/100),c.type="<percentage>"):(c=new Number(p*qD[f]),c.type="<angle>",c.unit=f)}else n.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);u.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=a),s.push(c)}),{name:o[1].toLowerCase(),rawName:o[1],rawArgs:o[2],args:s}}}function Og(e){return e[e.length-1]}function xs(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Bg(e,t,n){return(n-e)/(t-e)}function wf(e,t,n){return xs(t[0],t[1],Bg(e[0],e[1],n))}function Rg(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function Lg(e,t,n){return Math.max(Math.min(n,t),e)}function xa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Hn(e,t){return xa(Math.abs(e)**t,e)}function bf(e,t){return t===0?0:e/t}function Ug(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var WD=Object.freeze({__proto__:null,bisectLeft:Ug,clamp:Lg,copySign:xa,interpolate:xs,interpolateInv:Bg,isNone:Wr,isString:Ws,last:Og,mapRange:wf,multiplyMatrices:xe,parseCoordGrammar:Rg,parseFunction:Pg,serializeNumber:ta,skipNone:We,spow:Hn,toPrecision:Mg,type:_r,zdiv:bf});class zD{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const zr=new zD;var cn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Tt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function pc(e){return Array.isArray(e)?e:Tt[e]}function na(e,t,n,r={}){if(e=pc(e),t=pc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(zr.run("chromatic-adaptation-start",i),i.M||(i.W1===Tt.D65&&i.W2===Tt.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Tt.D50&&i.W2===Tt.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),zr.run("chromatic-adaptation-end",i),i.M)return xe(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const KD=new Set(["<number>","<percentage>","<angle>"]);function Lm(e,t,n,r){return Object.entries(e.coords).map(([o,s],u)=>{let a=t.coordGrammar[u],l=r[u],c=l?.type,f;if(l.none?f=a.find(E=>KD.has(E)):f=a.find(E=>E==c),!f){let E=s.name||o;throw new TypeError(`${c??l.raw} not allowed for ${E} in ${n}()`)}let p=f.range;c==="<percentage>"&&(p||=[0,1]);let g=s.range||s.refRange;return p&&g&&(r[u]=wf(p,g,r[u])),f})}function jg(e,{meta:t}={}){let n={str:String(e)?.trim()};if(zr.run("parse-start",n),n.color)return n.color;if(n.parsed=Pg(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),o=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,o],u=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let c of L.all){let f=c.getFormat("color");if(f&&(s.includes(f.id)||f.ids?.filter(p=>s.includes(p)).length)){const p=Object.keys(c.coords).map((E,D)=>n.parsed.args[D]||0);let g;return f.coordGrammar&&(g=Lm(c,f,"color",p)),t&&Object.assign(t,{formatId:"color",types:g}),f.id.startsWith("--")&&!i.startsWith("--")&&cn.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&cn.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:p,alpha:u}}}let a="",l=i in L.registry?i:o;if(l in L.registry){let c=L.registry[l].formats?.color?.id;c&&(a=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(a||"Missing a plugin?"))}else for(let i of L.all){let o=i.getFormat(r);if(o&&o.type==="function"){let s=1;(o.lastAlpha||Og(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let u=n.parsed.args,a;return o.coordGrammar&&(a=Lm(i,o,r,u)),t&&Object.assign(t,{formatId:o.name,types:a}),{spaceId:i.id,coords:u,alpha:s}}}}else for(let r of L.all)for(let i in r.formats){let o=r.formats[i];if(o.type!=="custom"||o.test&&!o.test(n.str))continue;let s=o.parse(n.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function Y(e){if(Array.isArray(e))return e.map(Y);if(!e)throw new TypeError("Empty color reference");Ws(e)&&(e=jg(e));let t=e.space||e.spaceId;return t instanceof L||(e.space=L.get(t)),e.alpha===void 0&&(e.alpha=1),e}const ZD=75e-6;class L{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?L.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=pc(r),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:L.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:GD(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),zr.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=ZD}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,o)=>{let s=r[o];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[u,a]=s.range;return(u===void 0||i>=u-n)&&(a===void 0||i<=a+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Um(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=Um(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const u=Y(t);[t,n]=[u.space,u.coords]}if(t=L.get(t),this.equals(t))return n;n=n.map(u=>Number.isNaN(u)?0:u);let r=this.path,i=t.path,o,s;for(let u=0;u<r.length&&r[u].equals(i[u]);u++)o=r[u],s=u;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=r.length-1;u>s;u--)n=r[u].toBase(n);for(let u=s+1;u<i.length;u++)n=i[u].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=Y(t);[t,n]=[r.space,r.coords]}return t=L.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(L.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof L)return t;if(_r(t)==="string"){let i=L.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return L.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=_r(t),i,o;if(r==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=L.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=_r(o),r==="number"||r==="string"&&o>=0){let a=Object.entries(i.coords)[o];if(a)return{space:i,id:a[0],index:o,...a[1]}}i=L.get(i);let s=o.toLowerCase(),u=0;for(let a in i.coords){let l=i.coords[a];if(a.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:a,index:u,...l};u++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function GD(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function Um(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=Rg(e.coords);let n=Object.entries(t).map(([r,i],o)=>{let s=e.coordGrammar[o][0],u=i.range||i.refRange,a=s.range,l="";return s=="<percentage>"?(a=[0,100],l="%"):s=="<angle>"&&(l="deg"),{fromRange:u,toRange:a,suffix:l}});e.serializeCoords=(r,i)=>r.map((o,s)=>{let{fromRange:u,toRange:a,suffix:l}=n[s];return u&&a&&(o=wf(u,a,o)),o=ta(o,{precision:i,unit:l}),o})}return e}var ct=new L({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Yt extends L{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ct),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=xe(t.toXYZ_M,n);return this.white!==this.base.white&&(r=na(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=na(this.base.white,this.white,n),xe(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function zs(e,t){return e=Y(e),!t||e.space.equals(t)?e.coords.slice():(t=L.get(t),t.from(e))}function rn(e,t){e=Y(e);let{space:n,index:r}=L.resolveCoord(t,e.space);return zs(e,n)[r]}function $f(e,t,n){return e=Y(e),t=L.get(t),e.coords=t.to(e.space,n),e}$f.returns="color";function Cr(e,t,n){if(e=Y(e),arguments.length===2&&_r(arguments[1])==="object"){let r=arguments[1];for(let i in r)Cr(e,i,r[i])}else{typeof n=="function"&&(n=n(rn(e,t)));let{space:r,index:i}=L.resolveCoord(t,e.space),o=zs(e,r);o[i]=n,$f(e,r,o)}return e}Cr.returns="color";var Df=new L({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ct,fromBase:e=>na(ct.white,"D50",e),toBase:e=>na("D50",ct.white,e)});const YD=216/24389,jm=24/116,bu=24389/27;let kl=Tt.D50;var on=new L({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:kl,base:Df,fromBase(e){let n=e.map((r,i)=>r/kl[i]).map(r=>r>YD?Math.cbrt(r):(bu*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>jm?Math.pow(t[0],3):(116*t[0]-16)/bu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/bu,t[2]>jm?Math.pow(t[2],3):(116*t[2]-16)/bu].map((r,i)=>r*kl[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function nr(e){return(e%360+360)%360}function JD(e,t){if(e==="raw")return t;let[n,r]=t.map(nr),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var As=new L({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:on,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),nr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const _m=25**7,ra=Math.PI,Vm=180/ra,Vi=ra/180;function qm(e){const t=e*e;return t*t*t*e}function _g(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=Y([e,t]);let[o,s,u]=on.from(e),a=As.from(on,[o,s,u])[1],[l,c,f]=on.from(t),p=As.from(on,[l,c,f])[1];a<0&&(a=0),p<0&&(p=0);let g=(a+p)/2,E=qm(g),D=.5*(1-Math.sqrt(E/(E+_m))),S=(1+D)*s,A=(1+D)*c,T=Math.sqrt(S**2+u**2),_=Math.sqrt(A**2+f**2),z=S===0&&u===0?0:Math.atan2(u,S),ee=A===0&&f===0?0:Math.atan2(f,A);z<0&&(z+=2*ra),ee<0&&(ee+=2*ra),z*=Vm,ee*=Vm;let at=l-o,Ht=_-T,yt=ee-z,At=z+ee,yn=Math.abs(yt),In;T*_===0?In=0:yn<=180?In=yt:yt>180?In=yt-360:yt<-180?In=yt+360:cn.warn("the unthinkable has happened");let Bi=2*Math.sqrt(_*T)*Math.sin(In*Vi/2),rl=(o+l)/2,Wo=(T+_)/2,uu=qm(Wo),Tn;T*_===0?Tn=At:yn<=180?Tn=At/2:At<360?Tn=(At+360)/2:Tn=(At-360)/2;let au=(rl-50)**2,il=1+.015*au/Math.sqrt(20+au),lu=1+.045*Wo,wn=1;wn-=.17*Math.cos((Tn-30)*Vi),wn+=.24*Math.cos(2*Tn*Vi),wn+=.32*Math.cos((3*Tn+6)*Vi),wn-=.2*Math.cos((4*Tn-63)*Vi);let _e=1+.015*Wo*wn,Xt=30*Math.exp(-1*((Tn-275)/25)**2),Ri=2*Math.sqrt(uu/(uu+_m)),Nr=-1*Math.sin(2*Xt*Vi)*Ri,oi=(at/(n*il))**2;return oi+=(Ht/(r*lu))**2,oi+=(Bi/(i*_e))**2,oi+=Nr*(Ht/(r*lu))*(Bi/(i*_e)),Math.sqrt(oi)}const HD=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],XD=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],QD=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],e5=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var fo=new L({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ct,fromBase(e){let n=xe(HD,e).map(r=>Math.cbrt(r));return xe(QD,n)},toBase(e){let n=xe(e5,e).map(r=>r**3);return xe(XD,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function gc(e,t){[e,t]=Y([e,t]);let[n,r,i]=fo.from(e),[o,s,u]=fo.from(t),a=n-o,l=r-s,c=i-u;return Math.sqrt(a**2+l**2+c**2)}const t5=75e-6;function $i(e,t,{epsilon:n=t5}={}){e=Y(e),t||(t=e.space),t=L.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function mo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Vg(e,t,n="lab"){n=L.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((o,s,u)=>{let a=i[u];return isNaN(s)||isNaN(a)?o:o+(a-s)**2},0))}function n5(e,t){return Vg(e,t,"lab")}const r5=Math.PI,Wm=r5/180;function i5(e,t,{l:n=2,c:r=1}={}){[e,t]=Y([e,t]);let[i,o,s]=on.from(e),[,u,a]=As.from(on,[i,o,s]),[l,c,f]=on.from(t),p=As.from(on,[l,c,f])[1];u<0&&(u=0),p<0&&(p=0);let g=i-l,E=u-p,D=o-c,S=s-f,A=D**2+S**2-E**2,T=.511;i>=16&&(T=.040975*i/(1+.01765*i));let _=.0638*u/(1+.0131*u)+.638,z;Number.isNaN(a)&&(a=0),a>=164&&a<=345?z=.56+Math.abs(.2*Math.cos((a+168)*Wm)):z=.36+Math.abs(.4*Math.cos((a+35)*Wm));let ee=Math.pow(u,4),at=Math.sqrt(ee/(ee+1900)),Ht=_*(at*z+1-at),yt=(g/(n*T))**2;return yt+=(E/(r*_))**2,yt+=A/Ht**2,Math.sqrt(yt)}const zm=203;var vf=new L({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ct,fromBase(e){return e.map(t=>Math.max(t*zm,0))},toBase(e){return e.map(t=>Math.max(t/zm,0))}});const $u=1.15,Du=.66,Km=2610/2**14,o5=2**14/2610,Zm=3424/2**12,Gm=2413/2**7,Ym=2392/2**7,s5=1.7*2523/2**5,Jm=2**5/(1.7*2523),vu=-.56,Sl=16295499532821565e-27,u5=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],a5=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],l5=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],c5=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var qg=new L({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:vf,fromBase(e){let[t,n,r]=e,i=$u*t-($u-1)*r,o=Du*n-(Du-1)*t,u=xe(u5,[i,o,r]).map(function(p){let g=Zm+Gm*(p/1e4)**Km,E=1+Ym*(p/1e4)**Km;return(g/E)**s5}),[a,l,c]=xe(l5,u);return[(1+vu)*a/(1+vu*a)-Sl,l,c]},toBase(e){let[t,n,r]=e,i=(t+Sl)/(1+vu-vu*(t+Sl)),s=xe(c5,[i,n,r]).map(function(p){let g=Zm-p**Jm,E=Ym*p**Jm-Gm;return 1e4*(g/E)**o5}),[u,a,l]=xe(a5,s),c=(u+($u-1)*l)/$u,f=(a+(Du-1)*c)/Du;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),yc=new L({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:qg,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),nr(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function f5(e,t){[e,t]=Y([e,t]);let[n,r,i]=yc.from(e),[o,s,u]=yc.from(t),a=n-o,l=r-s;Number.isNaN(i)&&Number.isNaN(u)?(i=0,u=0):Number.isNaN(i)?i=u:Number.isNaN(u)&&(u=i);let c=i-u,f=2*Math.sqrt(r*s)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(a**2+l**2+f**2)}const Wg=3424/4096,zg=2413/128,Kg=2392/128,Hm=2610/16384,d5=2523/32,m5=16384/2610,Xm=32/2523,h5=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],p5=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],g5=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],y5=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var wc=new L({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:vf,fromBase(e){let t=xe(h5,e);return w5(t)},toBase(e){let t=b5(e);return xe(y5,t)}});function w5(e){let t=e.map(function(n){let r=Wg+zg*(n/1e4)**Hm,i=1+Kg*(n/1e4)**Hm;return(r/i)**d5});return xe(p5,t)}function b5(e){return xe(g5,e).map(function(r){let i=Math.max(r**Xm-Wg,0),o=zg-Kg*r**Xm;return 1e4*(i/o)**m5})}function $5(e,t){[e,t]=Y([e,t]);let[n,r,i]=wc.from(e),[o,s,u]=wc.from(t);return 720*Math.sqrt((n-o)**2+.25*(r-s)**2+(i-u)**2)}const D5=Tt.D65,Zg=.42,Qm=1/Zg,Nl=2*Math.PI,Gg=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],v5=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],E5=[[460,451,288],[460,-891,-261],[460,-220,-6300]],C5={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},mi={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},x5=180/Math.PI,eh=Math.PI/180;function Yg(e,t){return e.map(r=>{const i=Hn(t*Math.abs(r)*.01,Zg);return 400*xa(i,r)/(i+27.13)})}function A5(e,t){const n=100/t*27.13**Qm;return e.map(r=>{const i=Math.abs(r);return xa(n*Hn(i/(400-i),Qm),r)})}function F5(e){let t=nr(e);t<=mi.h[0]&&(t+=360);const n=Ug(mi.h,t)-1,[r,i]=mi.h.slice(n,n+2),[o,s]=mi.e.slice(n,n+2),u=mi.H[n],a=(t-r)/o;return u+100*a/(a+(i-t)/s)}function k5(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=mi.h.slice(n,n+2),[o,s]=mi.e.slice(n,n+2);return nr((t*(s*r-o*i)-100*r*s)/(t*(s-o)-100*s))}function Jg(e,t,n,r,i){const o={};o.discounting=i,o.refWhite=e,o.surround=r;const s=e.map(D=>D*100);o.la=t,o.yb=n;const u=s[1],a=xe(Gg,s);r=C5[o.surround];const l=r[0];o.c=r[1],o.nc=r[2];const f=(1/(5*o.la+1))**4;o.fl=f*o.la+.1*(1-f)*(1-f)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/u,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const p=Math.max(Math.min(l*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=a.map(D=>xs(1,u/D,p)),o.dRgbInv=o.dRgb.map(D=>1/D);const g=a.map((D,S)=>D*o.dRgb[S]),E=Yg(g,o.fl);return o.aW=o.nbb*(2*E[0]+E[1]+.05*E[2]),o}const th=Jg(D5,64/Math.PI*.2,20,"average",!1);function bc(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=nr(e.h)*eh:n=k5(e.H)*eh;const r=Math.cos(n),i=Math.sin(n);let o=0;e.J!==void 0?o=Hn(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const u=Hn(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),a=.25*(Math.cos(n+2)+3.8),l=t.aW*Hn(o,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*a,f=l/t.nbb,p=23*(f+.305)*bf(u,23*c+u*(11*r+108*i)),g=p*r,E=p*i,D=A5(xe(E5,[f,g,E]).map(S=>S*1/1403),t.fl);return xe(v5,D.map((S,A)=>S*t.dRgbInv[A])).map(S=>S/100)}function Hg(e,t){const n=e.map(_=>_*100),r=Yg(xe(Gg,n).map((_,z)=>_*t.dRgb[z]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,o=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(o,i)%Nl+Nl)%Nl,u=.25*(Math.cos(s+2)+3.8),a=5e4/13*t.nc*t.ncb*bf(u*Math.sqrt(i**2+o**2),r[0]+r[1]+1.05*r[2]+.305),l=Hn(a,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*r[0]+r[1]+.05*r[2]),f=Hn(c/t.aW,.5*t.c*t.z),p=100*Hn(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,E=l*f,D=E*t.flRoot,S=nr(s*x5),A=F5(S),T=50*Hn(t.c*l/(t.aW+4),1/2);return{J:p,C:E,h:S,s:T,Q:g,M:D,H:A}}var S5=new L({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ct,fromBase(e){const t=Hg(e,th);return[t.J,t.M,t.h]},toBase(e){return bc({J:e[0],M:e[1],h:e[2]},th)}});const N5=Tt.D65,I5=216/24389,Xg=24389/27;function T5(e){return 116*(e>I5?Math.cbrt(e):(Xg*e+16)/116)-16}function $c(e){return e>8?Math.pow((e+16)/116,3):e/Xg}function M5(e,t){let[n,r,i]=e,o=[],s=0;if(i===0)return[0,0,0];let u=$c(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const a=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){o=bc({J:s,C:r,h:n},t);const p=Math.abs(o[1]-u);if(p<f){if(p<=a)return o;f=p}s=s-(o[1]-u)*s/(2*o[1]),c+=1}return bc({J:s,C:r,h:n},t)}function P5(e,t){const n=T5(e[1]);if(n===0)return[0,0,0];const r=Hg(e,Ef);return[nr(r.h),r.C,n]}const Ef=Jg(N5,200/Math.PI*$c(50),$c(50)*100,"average",!1);var Fs=new L({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:ct,fromBase(e){return P5(e)},toBase(e){return M5(e,Ef)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const O5=Math.PI/180,nh=[1,.007,.0228];function rh(e){e[1]<0&&(e=Fs.fromBase(Fs.toBase(e)));const t=Math.log(Math.max(1+nh[2]*e[1]*Ef.flRoot,1))/nh[2],n=e[0]*O5,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function B5(e,t){[e,t]=Y([e,t]);let[n,r,i]=rh(Fs.from(e)),[o,s,u]=rh(Fs.from(t));return Math.sqrt((n-o)**2+(r-s)**2+(i-u)**2)}var ho={deltaE76:n5,deltaECMC:i5,deltaE2000:_g,deltaEJz:f5,deltaEITP:$5,deltaEOK:gc,deltaEHCT:B5};function R5(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const ih={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Kr(e,{method:t=cn.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:o={}}={}){if(e=Y(e),Ws(arguments[1])?n=arguments[1]:n||(n=e.space),n=L.get(n),$i(e,n,{epsilon:0}))return e;let s;if(t==="css")s=L5(e,{space:n});else{if(t!=="clip"&&!$i(e,n)){Object.prototype.hasOwnProperty.call(ih,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:o}=ih[t]);let u=_g;if(r!==""){for(let l in ho)if("deltae"+r.toLowerCase()===l.toLowerCase()){u=ho[l];break}}let a=Kr(Ce(e,n),{method:"clip",space:n});if(u(e,a)>i){if(Object.keys(o).length===3){let T=L.resolveCoord(o.channel),_=rn(Ce(e,T.space),T.id);if(Wr(_)&&(_=0),_>=o.max)return Ce({space:"xyz-d65",coords:Tt.D65},e.space);if(_<=o.min)return Ce({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=L.resolveCoord(t),c=l.space,f=l.id,p=Ce(e,c);p.coords.forEach((T,_)=>{Wr(T)&&(p.coords[_]=0)});let E=(l.range||l.refRange)[0],D=R5(i),S=E,A=rn(p,f);for(;A-S>D;){let T=mo(p);T=Kr(T,{space:n,method:"clip"}),u(p,T)-i<D?S=rn(p,f):A=rn(p,f),Cr(p,f,(S+A)/2)}s=Ce(p,n)}else s=a}else s=Ce(e,n);if(t==="clip"||!$i(s,n,{epsilon:0})){let u=Object.values(n.coords).map(a=>a.range||[]);s.coords=s.coords.map((a,l)=>{let[c,f]=u[l];return c!==void 0&&(a=Math.max(c,a)),f!==void 0&&(a=Math.min(a,f)),a})}}return n!==e.space&&(s=Ce(s,e.space)),e.coords=s.coords,e}Kr.returns="color";const oh={WHITE:{space:fo,coords:[1,0,0]},BLACK:{space:fo,coords:[0,0,0]}};function L5(e,{space:t}={}){e=Y(e),t||(t=e.space),t=L.get(t);const i=L.get("oklch");if(t.isUnbounded)return Ce(e,t);const o=Ce(e,i);let s=o.coords[0];if(s>=1){const E=Ce(oh.WHITE,t);return E.alpha=e.alpha,Ce(E,t)}if(s<=0){const E=Ce(oh.BLACK,t);return E.alpha=e.alpha,Ce(E,t)}if($i(o,t,{epsilon:0}))return Ce(o,t);function u(E){const D=Ce(E,t),S=Object.values(t.coords);return D.coords=D.coords.map((A,T)=>{if("range"in S[T]){const[_,z]=S[T].range;return Lg(_,A,z)}return A}),D}let a=0,l=o.coords[1],c=!0,f=mo(o),p=u(f),g=gc(p,f);if(g<.02)return p;for(;l-a>1e-4;){const E=(a+l)/2;if(f.coords[1]=E,c&&$i(f,t,{epsilon:0}))a=E;else if(p=u(f),g=gc(p,f),g<.02){if(.02-g<1e-4)break;c=!1,a=E}else l=E}return p}function Ce(e,t,{inGamut:n}={}){e=Y(e),t=L.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Kr(i,n===!0?void 0:n)),i}Ce.returns="color";function ds(e,{precision:t=cn.precision,format:n="default",inGamut:r=!0,...i}={}){let o;e=Y(e);let s=n;n=e.space.getFormat(n)??e.space.getFormat("default")??L.DEFAULT_FORMAT;let u=e.coords.slice();if(r||=n.toGamut,r&&!$i(e)&&(u=Kr(mo(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)o=n.serialize(u,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let a=n.name||"color";n.serializeCoords?u=n.serializeCoords(u,t):t!==null&&(u=u.map(p=>ta(p,{precision:t})));let l=[...u];if(a==="color"){let p=n.id||n.ids?.[0]||e.space.id;l.unshift(p)}let c=e.alpha;t!==null&&(c=ta(c,{precision:t}));let f=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${c}`;o=`${a}(${l.join(n.commas?", ":" ")}${f})`}return o}const U5=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],j5=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Aa=new Yt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:U5,fromXYZ_M:j5});const Eu=1.09929682680944,sh=.018053968510807;var Qg=new Yt({id:"rec2020",name:"REC.2020",base:Aa,toBase(e){return e.map(function(t){return t<sh*4.5?t/4.5:Math.pow((t+Eu-1)/Eu,1/.45)})},fromBase(e){return e.map(function(t){return t>=sh?Eu*Math.pow(t,.45)-(Eu-1):4.5*t})}});const _5=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],V5=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ey=new Yt({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:_5,fromXYZ_M:V5});const q5=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],nt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ty=new Yt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:q5,fromXYZ_M:nt}),uh={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ah=Array(3).fill("<percentage> | <number>[0, 255]"),lh=Array(3).fill("<number>[0, 255]");var po=new Yt({id:"srgb",name:"sRGB",base:ty,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:ah},rgb_number:{name:"rgb",commas:!0,coords:lh,noAlpha:!0},color:{},rgba:{coords:ah,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:lh},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(o=>Math.round(o*255));let r=n&&e.every(o=>o%17===0);return"#"+e.map(o=>r?(o/17).toString(16):o.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=uh.black,t.alpha=0):t.coords=uh[e],t.coords)return t}}}}),ny=new Yt({id:"p3",cssId:"display-p3",name:"P3",base:ey,fromBase:po.fromBase,toBase:po.toBase});cn.display_space=po;let W5;if(typeof CSS<"u"&&CSS.supports)for(let e of[on,Qg,ny]){let t=e.getMinCoords(),r=ds({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){cn.display_space=e;break}}function z5(e,{space:t=cn.display_space,...n}={}){let r=ds(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!cn.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Wr)||Wr(e.alpha))&&!(W5??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=mo(e),i.coords=i.coords.map(We),i.alpha=We(i.alpha),r=ds(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=Ce(i,t),r=new String(ds(i,n)),r.color=i}return r}function K5(e,t){return e=Y(e),t=Y(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function Zr(e){return rn(e,[ct,"y"])}function ry(e,t){Cr(e,[ct,"y"],t)}function Z5(e){Object.defineProperty(e.prototype,"luminance",{get(){return Zr(this)},set(t){ry(this,t)}})}var G5=Object.freeze({__proto__:null,getLuminance:Zr,register:Z5,setLuminance:ry});function Y5(e,t){e=Y(e),t=Y(t);let n=Math.max(Zr(e),0),r=Math.max(Zr(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const J5=.56,H5=.57,X5=.62,Q5=.65,ch=.022,ev=1.414,tv=.1,nv=5e-4,rv=1.14,fh=.027,iv=1.14;function dh(e){return e>=ch?e:e+(ch-e)**ev}function qi(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function ov(e,t){t=Y(t),e=Y(e);let n,r,i,o,s,u;t=Ce(t,"srgb"),[o,s,u]=t.coords;let a=qi(o)*.2126729+qi(s)*.7151522+qi(u)*.072175;e=Ce(e,"srgb"),[o,s,u]=e.coords;let l=qi(o)*.2126729+qi(s)*.7151522+qi(u)*.072175,c=dh(a),f=dh(l),p=f>c;return Math.abs(f-c)<nv?r=0:p?(n=f**J5-c**H5,r=n*rv):(n=f**Q5-c**X5,r=n*iv),Math.abs(r)<tv?i=0:r>0?i=r-fh:i=r+fh,i*100}function sv(e,t){e=Y(e),t=Y(t);let n=Math.max(Zr(e),0),r=Math.max(Zr(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const uv=5e4;function av(e,t){e=Y(e),t=Y(t);let n=Math.max(Zr(e),0),r=Math.max(Zr(t),0);return r>n&&([n,r]=[r,n]),r===0?uv:(n-r)/r}function lv(e,t){e=Y(e),t=Y(t);let n=rn(e,[on,"l"]),r=rn(t,[on,"l"]);return Math.abs(n-r)}const cv=216/24389,mh=24/116,Cu=24389/27;let Il=Tt.D65;var Dc=new L({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Il,base:ct,fromBase(e){let n=e.map((r,i)=>r/Il[i]).map(r=>r>cv?Math.cbrt(r):(Cu*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>mh?Math.pow(t[0],3):(116*t[0]-16)/Cu,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Cu,t[2]>mh?Math.pow(t[2],3):(116*t[2]-16)/Cu].map((r,i)=>r*Il[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Tl=Math.pow(5,.5)*.5+.5;function fv(e,t){e=Y(e),t=Y(t);let n=rn(e,[Dc,"l"]),r=rn(t,[Dc,"l"]),i=Math.abs(Math.pow(n,Tl)-Math.pow(r,Tl)),o=Math.pow(i,1/Tl)*Math.SQRT2-40;return o<7.5?0:o}var ju=Object.freeze({__proto__:null,contrastAPCA:ov,contrastDeltaPhi:fv,contrastLstar:lv,contrastMichelson:sv,contrastWCAG21:Y5,contrastWeber:av});function dv(e,t,n={}){Ws(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let o=Object.keys(ju).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=Y(e),t=Y(t);for(let o in ju)if("contrast"+r.toLowerCase()===o.toLowerCase())return ju[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Fa(e){let[t,n,r]=zs(e,ct),i=t+15*n+3*r;return[4*t/i,9*n/i]}function iy(e){let[t,n,r]=zs(e,ct),i=t+n+r;return[t/i,n/i]}function mv(e){Object.defineProperty(e.prototype,"uv",{get(){return Fa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return iy(this)}})}var hv=Object.freeze({__proto__:null,register:mv,uv:Fa,xy:iy});function os(e,t,n={}){Ws(n)&&(n={method:n});let{method:r=cn.deltaE,...i}=n;for(let o in ho)if("deltae"+r.toLowerCase()===o.toLowerCase())return ho[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function pv(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Cr(e,r,i=>i*(1+t))}function gv(e,t=.25){let r=[L.get("oklch","lch"),"l"];return Cr(e,r,i=>i*(1-t))}var yv=Object.freeze({__proto__:null,darken:gv,lighten:pv});function oy(e,t,n=.5,r={}){return[e,t]=[Y(e),Y(t)],_r(n)==="object"&&([n,r]=[.5,n]),Ks(e,t,r)(n)}function sy(e,t,n={}){let r;Cf(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:u=1e3,...a}=n;r||([e,t]=[Y(e),Y(t)],r=Ks(e,t,a));let l=os(e,t),c=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(u!==void 0&&(c=Math.min(c,u)),c===1)f=[{p:.5,color:r(.5)}];else{let p=1/(c-1);f=Array.from({length:c},(g,E)=>{let D=E*p;return{p:D,color:r(D)}})}if(i>0){let p=f.reduce((g,E,D)=>{if(D===0)return 0;let S=os(E.color,f[D-1].color,o);return Math.max(g,S)},0);for(;p>i;){p=0;for(let g=1;g<f.length&&f.length<u;g++){let E=f[g-1],D=f[g],S=(D.p+E.p)/2,A=r(S);p=Math.max(p,os(A,E.color),os(A,D.color)),f.splice(g,0,{p:S,color:r(S)}),g++}}}return f=f.map(p=>p.color),f}function Ks(e,t,n={}){if(Cf(e)){let[a,l]=[e,t];return Ks(...a.rangeArgs.colors,{...a.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:o,premultiplied:s}=n;e=Y(e),t=Y(t),e=mo(e),t=mo(t);let u={colors:[e,t],options:n};if(r?r=L.get(r):r=L.registry[cn.interpolationSpace]||e.space,i=i?L.get(i):r,e=Ce(e,r),t=Ce(t,r),e=Kr(e),t=Kr(t),r.coords.h&&r.coords.h.type==="angle"){let a=n.hue=n.hue||"shorter",l=[r,"h"],[c,f]=[rn(e,l),rn(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=JD(a,[c,f]),Cr(e,l,c),Cr(t,l,f)}return s&&(e.coords=e.coords.map(a=>a*e.alpha),t.coords=t.coords.map(a=>a*t.alpha)),Object.assign(a=>{a=o?o(a):a;let l=e.coords.map((p,g)=>{let E=t.coords[g];return xs(p,E,a)}),c=xs(e.alpha,t.alpha,a),f={space:r,coords:l,alpha:c};return s&&(f.coords=f.coords.map(p=>p/c)),i!==r&&(f=Ce(f,i)),f},{rangeArgs:u})}function Cf(e){return _r(e)==="function"&&!!e.rangeArgs}cn.interpolationSpace="lab";function wv(e){e.defineFunction("mix",oy,{returns:"color"}),e.defineFunction("range",Ks,{returns:"function<color>"}),e.defineFunction("steps",sy,{returns:"array<color>"})}var bv=Object.freeze({__proto__:null,isRange:Cf,mix:oy,range:Ks,register:wv,steps:sy}),uy=new L({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:po,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,o]=e,[s,u,a]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(u=a===0||a===1?0:(t-a)/Math.min(a,1-a),t){case r:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-r)/l+2;break;case o:s=(r-i)/l+4}s=s*60}return u<0&&(s+=180,u=Math.abs(u)),s>=360&&(s-=360),[s,u*100,a*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(o){let s=(o+t/30)%12,u=n*Math.min(r,1-r);return r-u*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ay=new L({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:uy,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$v=new L({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ay,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let u=n/i;return[t,0,u*100]}let o=1-r,s=o===0?0:1-n/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Dv=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],vv=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ly=new Yt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Dv,fromXYZ_M:vv}),Ev=new Yt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:ly,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const Cv=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],xv=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var cy=new Yt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Df,toXYZ_M:Cv,fromXYZ_M:xv});const Av=1/512,Fv=16/512;var kv=new Yt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:cy,toBase(e){return e.map(t=>t<Fv?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Av?t**(1/1.8):16*t)}}),Sv=new L({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:fo,fromBase(e){let[t,n,r]=e,i;const o=2e-4;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),nr(i)]},toBase(e){let[t,n,r]=e,i,o;return isNaN(r)?(i=0,o=0):(i=n*Math.cos(r*Math.PI/180),o=n*Math.sin(r*Math.PI/180)),[t,i,o]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let fy=Tt.D65;const Nv=216/24389,hh=24389/27,[ph,gh]=Fa({space:ct,coords:fy});var dy=new L({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:fy,base:ct,fromBase(e){let t=[We(e[0]),We(e[1]),We(e[2])],n=t[1],[r,i]=Fa({space:ct,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let o=n<=Nv?hh*n:116*Math.cbrt(n)-16;return[o,13*o*(r-ph),13*o*(i-gh)]},toBase(e){let[t,n,r]=e;if(t===0||Wr(t))return[0,0,0];n=We(n),r=We(r);let i=n/(13*t)+ph,o=r/(13*t)+gh,s=t<=8?t/hh:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),xf=new L({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dy,fromBase(e){let[t,n,r]=e,i;const o=.02;return Math.abs(n)<o&&Math.abs(r)<o?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),nr(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Iv=216/24389,Tv=24389/27,yh=nt[0][0],wh=nt[0][1],Ml=nt[0][2],bh=nt[1][0],$h=nt[1][1],Pl=nt[1][2],Dh=nt[2][0],vh=nt[2][1],Ol=nt[2][2];function Wi(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function ia(e){const t=Math.pow(e+16,3)/1560896,n=t>Iv?t:e/Tv,r=n*(284517*yh-94839*Ml),i=n*(838422*Ml+769860*wh+731718*yh),o=n*(632260*Ml-126452*wh),s=n*(284517*bh-94839*Pl),u=n*(838422*Pl+769860*$h+731718*bh),a=n*(632260*Pl-126452*$h),l=n*(284517*Dh-94839*Ol),c=n*(838422*Ol+769860*vh+731718*Dh),f=n*(632260*Ol-126452*vh);return{r0s:r/o,r0i:i*e/o,r1s:r/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/a,g0i:u*e/a,g1s:s/(a+126452),g1i:(u-769860)*e/(a+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Eh(e,t){const n=t/360*Math.PI*2,r=Wi(e.r0s,e.r0i,n),i=Wi(e.r1s,e.r1i,n),o=Wi(e.g0s,e.g0i,n),s=Wi(e.g1s,e.g1i,n),u=Wi(e.b0s,e.b0i,n),a=Wi(e.b1s,e.b1i,n);return Math.min(r,i,o,s,u,a)}var Mv=new L({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:xf,gamutSpace:po,fromBase(e){let[t,n,r]=[We(e[0]),We(e[1]),We(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ia(t),s=Eh(o,r);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[We(e[0]),We(e[1]),We(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=ia(r);i=Eh(o,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});nt[0][0];nt[0][1];nt[0][2];nt[1][0];nt[1][1];nt[1][2];nt[2][0];nt[2][1];nt[2][2];function zi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ch(e){let t=zi(e.r0s,e.r0i),n=zi(e.r1s,e.r1i),r=zi(e.g0s,e.g0i),i=zi(e.g1s,e.g1i),o=zi(e.b0s,e.b0i),s=zi(e.b1s,e.b1i);return Math.min(t,n,r,i,o,s)}var Pv=new L({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:xf,gamutSpace:"self",fromBase(e){let[t,n,r]=[We(e[0]),We(e[1]),We(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ia(t),s=Ch(o);i=n/s*100}return[r,i,t]},toBase(e){let[t,n,r]=[We(e[0]),We(e[1]),We(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let o=ia(r);i=Ch(o)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const xh=203,Ah=2610/2**14,Ov=2**14/2610,Bv=2523/2**5,Fh=2**5/2523,kh=3424/2**12,Sh=2413/2**7,Nh=2392/2**7;var Rv=new Yt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Aa,toBase(e){return e.map(function(t){return(Math.max(t**Fh-kh,0)/(Sh-Nh*t**Fh))**Ov*1e4/xh})},fromBase(e){return e.map(function(t){let n=Math.max(t*xh/1e4,0),r=kh+Sh*n**Ah,i=1+Nh*n**Ah;return(r/i)**Bv})}});const Ih=.17883277,Th=.28466892,Mh=.55991073,Bl=3.7743;var Lv=new Yt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Aa,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Bl:(Math.exp((t-Mh)/Ih)+Th)/12*Bl})},fromBase(e){return e.map(function(t){return t/=Bl,t<=1/12?Math.sqrt(3*t):Ih*Math.log(12*t-Th)+Mh})}});const my={};zr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=hy(e.W1,e.W2,e.options.method))});zr.add("chromatic-adaptation-end",e=>{e.M||(e.M=hy(e.W1,e.W2,e.options.method))});function ka({id:e,toCone_M:t,fromCone_M:n}){my[e]=arguments[0]}function hy(e,t,n="Bradford"){let r=my[n],[i,o,s]=xe(r.toCone_M,e),[u,a,l]=xe(r.toCone_M,t),c=[[u/i,0,0],[0,a/o,0],[0,0,l/s]],f=xe(c,r.toCone_M);return xe(r.fromCone_M,f)}ka({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ka({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ka({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ka({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Tt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Tt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Uv=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],jv=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var py=new Yt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Tt.ACES,toXYZ_M:Uv,fromXYZ_M:jv});const xu=2**-16,Rl=-.35828683,Au=(Math.log2(65504)+9.72)/17.52;var _v=new Yt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Rl,Au],name:"Red"},g:{range:[Rl,Au],name:"Green"},b:{range:[Rl,Au],name:"Blue"}},referred:"scene",base:py,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-xu)*2:n<Au?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(xu)+9.72)/17.52:t<xu?(Math.log2(xu+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Ph=Object.freeze({__proto__:null,A98RGB:Ev,A98RGB_Linear:ly,ACEScc:_v,ACEScg:py,CAM16_JMh:S5,HCT:Fs,HPLuv:Pv,HSL:uy,HSLuv:Mv,HSV:ay,HWB:$v,ICTCP:wc,JzCzHz:yc,Jzazbz:qg,LCH:As,LCHuv:xf,Lab:on,Lab_D65:Dc,Luv:dy,OKLCH:Sv,OKLab:fo,P3:ny,P3_Linear:ey,ProPhoto:kv,ProPhoto_Linear:cy,REC_2020:Qg,REC_2020_Linear:Aa,REC_2100_HLG:Lv,REC_2100_PQ:Rv,XYZ_ABS_D65:vf,XYZ_D50:Df,XYZ_D65:ct,sRGB:po,sRGB_Linear:ty});let ye=class Rt{constructor(...t){let n;t.length===1&&(n=Y(t[0]));let r,i,o;n?(r=n.space||n.spaceId,i=n.coords,o=n.alpha):[r,i,o]=t,Object.defineProperty(this,"space",{value:L.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=o>1||o===void 0?1:o<0?0:o;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:u=>this.set(s,u)})}get spaceId(){return this.space.id}clone(){return new Rt(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=z5(this,...t);return n.color=new Rt(n.color),n}static get(t,...n){return t instanceof Rt?t:new Rt(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:o}=r,s=function(...u){let a=n(...u);if(o==="color")a=Rt.get(a);else if(o==="function<color>"){let l=a;a=function(...c){let f=l(...c);return Rt.get(f)},Object.assign(a,l)}else o==="array<color>"&&(a=a.map(l=>Rt.get(l)));return a};t in Rt||(Rt[t]=s),i&&(Rt.prototype[t]=function(...u){return s(this,...u)})}static defineFunctions(t){for(let n in t)Rt.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Rt);else for(let n in t)Rt.defineFunction(n,t[n])}};ye.defineFunctions({get:rn,getAll:zs,set:Cr,setAll:$f,to:Ce,equals:K5,inGamut:$i,toGamut:Kr,distance:Vg,toString:ds});Object.assign(ye,{util:WD,hooks:zr,WHITES:Tt,Space:L,spaces:L.registry,parse:jg,defaults:cn});for(let e of Object.keys(Ph))L.register(Ph[e]);for(let e in L.registry)vc(e,L.registry[e]);zr.add("colorspace-init-end",e=>{vc(e.id,e),e.aliases?.forEach(t=>{vc(t,e)})});function vc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(ye.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,o)=>{try{return L.resolveCoord([t,o]),!0}catch{}return Reflect.has(i,o)},get:(i,o,s)=>{if(o&&typeof o!="symbol"&&!(o in i)){let{index:u}=L.resolveCoord([t,o]);if(u>=0)return i[u]}return Reflect.get(i,o,s)},set:(i,o,s,u)=>{if(o&&typeof o!="symbol"&&!(o in i)||o>=0){let{index:a}=L.resolveCoord([t,o]);if(a>=0)return i[a]=s,this.setAll(e,i),!0}return Reflect.set(i,o,s,u)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}ye.extend(ho);ye.extend({deltaE:os});Object.assign(ye,{deltaEMethods:ho});ye.extend(yv);ye.extend({contrast:dv});ye.extend(hv);ye.extend(G5);ye.extend(bv);ye.extend(ju);const Vv=Symbol("no update");class Ll extends Yr()("observable-value-update"){}class qv extends Dg("observable-destroy"){}class Wv{listenTarget=new uf;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];if(n===Vv)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)){const i=this.value;return this.value=n,this.listenTarget.dispatch(new Ll({detail:[n,i]})),!0}return!1}listen(t,n){const r=i=>n(...i.detail);return this.listenerMap.set(n,r),t&&n(this.value,void 0),this.listenTarget.listen(Ll,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(Ll,n)}destroy(){this.listenTarget.dispatch(new qv),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function zv(e,t){return w$(e,t,(n,r)=>F.isFunction(n)&&F.isFunction(r)?!0:F.strictEquals(n,r))}function Kv(e){return Ge(e)&&!Jt(e)&&!Gs(e)&&Symbol.asyncIterator in e}function Jt(e){return Array.isArray(e)}function gy(e){return typeof e=="bigint"}function Zs(e){return typeof e=="boolean"}function Af(e){return e instanceof globalThis.Date}function Zv(e){return typeof e=="function"}function Gv(e){return Ge(e)&&!Jt(e)&&!Gs(e)&&Symbol.iterator in e}function Yv(e){return e===null}function tr(e){return typeof e=="number"}function Ge(e){return typeof e=="object"&&e!==null}function yy(e){return e instanceof globalThis.RegExp}function je(e){return typeof e=="string"}function Jv(e){return typeof e=="symbol"}function Gs(e){return e instanceof globalThis.Uint8Array}function ze(e){return e===void 0}function Hv(e){return e.map(t=>oa(t))}function Xv(e){return new Date(e.getTime())}function Qv(e){return new Uint8Array(e)}function eE(e){return new RegExp(e.source,e.flags)}function tE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=oa(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=oa(e[n]);return t}function oa(e){return Jt(e)?Hv(e):Af(e)?Xv(e):Gs(e)?Qv(e):yy(e)?eE(e):Ge(e)?tE(e):e}function fn(e){return oa(e)}function Ff(e,t){return fn(t===void 0?e:{...t,...e})}function wy(e){return rr(e)&&globalThis.Symbol.asyncIterator in e}function by(e){return rr(e)&&globalThis.Symbol.iterator in e}function $y(e){return e instanceof globalThis.Promise}function kf(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Sf(e){return e instanceof globalThis.Uint8Array}function Dy(e,t){return t in e}function rr(e){return e!==null&&typeof e=="object"}function dn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Hr(e){return e===void 0}function Sa(e){return e===null}function Na(e){return typeof e=="boolean"}function H(e){return typeof e=="number"}function vy(e){return globalThis.Number.isInteger(e)}function mr(e){return typeof e=="bigint"}function un(e){return typeof e=="string"}function Ey(e){return typeof e=="function"}function Ia(e){return typeof e=="symbol"}function Cy(e){return mr(e)||Na(e)||Sa(e)||H(e)||un(e)||Ia(e)||Hr(e)}var Le;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,u){return e.ExactOptionalPropertyTypes?u in s:s[u]!==void 0}e.IsExactOptionalProperty=t;function n(s){const u=rr(s);return e.AllowArrayObject?u:u&&!dn(s)}e.IsObjectLike=n;function r(s){return n(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=r;function i(s){return e.AllowNaN?H(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const u=Hr(s);return e.AllowNullVoid?u||s===null:u}e.IsVoidLike=o})(Le||(Le={}));function nE(e){return globalThis.Object.freeze(e).map(t=>sa(t))}function rE(e){const t={};for(const n of Object.getOwnPropertyNames(e))t[n]=sa(e[n]);for(const n of Object.getOwnPropertySymbols(e))t[n]=sa(e[n]);return globalThis.Object.freeze(t)}function sa(e){return Jt(e)?nE(e):Af(e)?e:Gs(e)?e:yy(e)?e:Ge(e)?rE(e):e}function M(e,t){const n=t!==void 0?{...t,...e}:e;switch(Le.InstanceMode){case"freeze":return sa(n);case"clone":return fn(n);default:return n}}class ht extends Error{constructor(t){super(t)}}const jt=Symbol.for("TypeBox.Transform"),Ys=Symbol.for("TypeBox.Readonly"),Ar=Symbol.for("TypeBox.Optional"),Ta=Symbol.for("TypeBox.Hint"),I=Symbol.for("TypeBox.Kind");function Nf(e){return Ge(e)&&e[Ys]==="Readonly"}function Xr(e){return Ge(e)&&e[Ar]==="Optional"}function xy(e){return oe(e,"Any")}function Ay(e){return oe(e,"Argument")}function To(e){return oe(e,"Array")}function Ma(e){return oe(e,"AsyncIterator")}function Pa(e){return oe(e,"BigInt")}function Js(e){return oe(e,"Boolean")}function Mo(e){return oe(e,"Computed")}function Po(e){return oe(e,"Constructor")}function iE(e){return oe(e,"Date")}function Oo(e){return oe(e,"Function")}function Bo(e){return oe(e,"Integer")}function Fn(e){return oe(e,"Intersect")}function Oa(e){return oe(e,"Iterator")}function oe(e,t){return Ge(e)&&I in e&&e[I]===t}function Fy(e){return Zs(e)||tr(e)||je(e)}function Ai(e){return oe(e,"Literal")}function Fi(e){return oe(e,"MappedKey")}function gn(e){return oe(e,"MappedResult")}function Hs(e){return oe(e,"Never")}function oE(e){return oe(e,"Not")}function If(e){return oe(e,"Null")}function Ro(e){return oe(e,"Number")}function Gn(e){return oe(e,"Object")}function Ba(e){return oe(e,"Promise")}function Ra(e){return oe(e,"Record")}function Zt(e){return oe(e,"Ref")}function ky(e){return oe(e,"RegExp")}function Xs(e){return oe(e,"String")}function Tf(e){return oe(e,"Symbol")}function ki(e){return oe(e,"TemplateLiteral")}function sE(e){return oe(e,"This")}function be(e){return Ge(e)&&jt in e}function Si(e){return oe(e,"Tuple")}function Qs(e){return oe(e,"Undefined")}function ut(e){return oe(e,"Union")}function uE(e){return oe(e,"Uint8Array")}function aE(e){return oe(e,"Unknown")}function lE(e){return oe(e,"Unsafe")}function cE(e){return oe(e,"Void")}function fE(e){return Ge(e)&&I in e&&je(e[I])}function Mt(e){return xy(e)||Ay(e)||To(e)||Js(e)||Pa(e)||Ma(e)||Mo(e)||Po(e)||iE(e)||Oo(e)||Bo(e)||Fn(e)||Oa(e)||Ai(e)||Fi(e)||gn(e)||Hs(e)||oE(e)||If(e)||Ro(e)||Gn(e)||Ba(e)||Ra(e)||Zt(e)||ky(e)||Xs(e)||Tf(e)||ki(e)||sE(e)||Si(e)||Qs(e)||ut(e)||uE(e)||aE(e)||lE(e)||cE(e)||fE(e)}const dE=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function Sy(e){try{return new RegExp(e),!0}catch{return!1}}function Mf(e){if(!je(e))return!1;for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Ny(e){return Pf(e)||Se(e)}function Ho(e){return ze(e)||gy(e)}function ge(e){return ze(e)||tr(e)}function Pf(e){return ze(e)||Zs(e)}function pe(e){return ze(e)||je(e)}function mE(e){return ze(e)||je(e)&&Mf(e)&&Sy(e)}function hE(e){return ze(e)||je(e)&&Mf(e)}function Iy(e){return ze(e)||Se(e)}function ua(e){return Ge(e)&&e[Ar]==="Optional"}function qn(e){return se(e,"Any")&&pe(e.$id)}function pE(e){return se(e,"Argument")&&tr(e.index)}function Ni(e){return se(e,"Array")&&e.type==="array"&&pe(e.$id)&&Se(e.items)&&ge(e.minItems)&&ge(e.maxItems)&&Pf(e.uniqueItems)&&Iy(e.contains)&&ge(e.minContains)&&ge(e.maxContains)}function Of(e){return se(e,"AsyncIterator")&&e.type==="AsyncIterator"&&pe(e.$id)&&Se(e.items)}function La(e){return se(e,"BigInt")&&e.type==="bigint"&&pe(e.$id)&&Ho(e.exclusiveMaximum)&&Ho(e.exclusiveMinimum)&&Ho(e.maximum)&&Ho(e.minimum)&&Ho(e.multipleOf)}function Ii(e){return se(e,"Boolean")&&e.type==="boolean"&&pe(e.$id)}function gE(e){return se(e,"Computed")&&je(e.target)&&Jt(e.parameters)&&e.parameters.every(t=>Se(t))}function Ua(e){return se(e,"Constructor")&&e.type==="Constructor"&&pe(e.$id)&&Jt(e.parameters)&&e.parameters.every(t=>Se(t))&&Se(e.returns)}function ja(e){return se(e,"Date")&&e.type==="Date"&&pe(e.$id)&&ge(e.exclusiveMaximumTimestamp)&&ge(e.exclusiveMinimumTimestamp)&&ge(e.maximumTimestamp)&&ge(e.minimumTimestamp)&&ge(e.multipleOfTimestamp)}function _a(e){return se(e,"Function")&&e.type==="Function"&&pe(e.$id)&&Jt(e.parameters)&&e.parameters.every(t=>Se(t))&&Se(e.returns)}function Fr(e){return se(e,"Integer")&&e.type==="integer"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function Ty(e){return Ge(e)&&Object.entries(e).every(([t,n])=>Mf(t)&&Se(n))}function Ti(e){return se(e,"Intersect")&&!(je(e.type)&&e.type!=="object")&&Jt(e.allOf)&&e.allOf.every(t=>Se(t)&&!vE(t))&&pe(e.type)&&(Pf(e.unevaluatedProperties)||Iy(e.unevaluatedProperties))&&pe(e.$id)}function Bf(e){return se(e,"Iterator")&&e.type==="Iterator"&&pe(e.$id)&&Se(e.items)}function se(e,t){return Ge(e)&&I in e&&e[I]===t}function My(e){return Qr(e)&&je(e.const)}function Py(e){return Qr(e)&&tr(e.const)}function Oy(e){return Qr(e)&&Zs(e.const)}function Qr(e){return se(e,"Literal")&&pe(e.$id)&&yE(e.const)}function yE(e){return Zs(e)||tr(e)||je(e)}function wE(e){return se(e,"MappedKey")&&Jt(e.keys)&&e.keys.every(t=>tr(t)||je(t))}function bE(e){return se(e,"MappedResult")&&Ty(e.properties)}function ei(e){return se(e,"Never")&&Ge(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function go(e){return se(e,"Not")&&Se(e.not)}function Rf(e){return se(e,"Null")&&e.type==="null"&&pe(e.$id)}function _t(e){return se(e,"Number")&&e.type==="number"&&pe(e.$id)&&ge(e.exclusiveMaximum)&&ge(e.exclusiveMinimum)&&ge(e.maximum)&&ge(e.minimum)&&ge(e.multipleOf)}function Ne(e){return se(e,"Object")&&e.type==="object"&&pe(e.$id)&&Ty(e.properties)&&Ny(e.additionalProperties)&&ge(e.minProperties)&&ge(e.maxProperties)}function Lf(e){return se(e,"Promise")&&e.type==="Promise"&&pe(e.$id)&&Se(e.item)}function dt(e){return se(e,"Record")&&e.type==="object"&&pe(e.$id)&&Ny(e.additionalProperties)&&Ge(e.patternProperties)&&(t=>{const n=Object.getOwnPropertyNames(t.patternProperties);return n.length===1&&Sy(n[0])&&Ge(t.patternProperties)&&Se(t.patternProperties[n[0]])})(e)}function $E(e){return se(e,"Ref")&&pe(e.$id)&&je(e.$ref)}function ks(e){return se(e,"RegExp")&&pe(e.$id)&&je(e.source)&&je(e.flags)&&ge(e.maxLength)&&ge(e.minLength)}function Wn(e){return se(e,"String")&&e.type==="string"&&pe(e.$id)&&ge(e.minLength)&&ge(e.maxLength)&&mE(e.pattern)&&hE(e.format)}function Ss(e){return se(e,"Symbol")&&e.type==="symbol"&&pe(e.$id)}function Ns(e){return se(e,"TemplateLiteral")&&e.type==="string"&&je(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function DE(e){return se(e,"This")&&pe(e.$id)&&je(e.$ref)}function vE(e){return Ge(e)&&jt in e}function Va(e){return se(e,"Tuple")&&e.type==="array"&&pe(e.$id)&&tr(e.minItems)&&tr(e.maxItems)&&e.minItems===e.maxItems&&(ze(e.items)&&ze(e.additionalItems)&&e.minItems===0||Jt(e.items)&&e.items.every(t=>Se(t)))}function vi(e){return se(e,"Undefined")&&e.type==="undefined"&&pe(e.$id)}function xr(e){return se(e,"Union")&&pe(e.$id)&&Ge(e)&&Jt(e.anyOf)&&e.anyOf.every(t=>Se(t))}function eu(e){return se(e,"Uint8Array")&&e.type==="Uint8Array"&&pe(e.$id)&&ge(e.minByteLength)&&ge(e.maxByteLength)}function zn(e){return se(e,"Unknown")&&pe(e.$id)}function EE(e){return se(e,"Unsafe")}function qa(e){return se(e,"Void")&&e.type==="void"&&pe(e.$id)}function CE(e){return Ge(e)&&I in e&&je(e[I])&&!dE.includes(e[I])}function Se(e){return Ge(e)&&(qn(e)||pE(e)||Ni(e)||Ii(e)||La(e)||Of(e)||gE(e)||Ua(e)||ja(e)||_a(e)||Fr(e)||Ti(e)||Bf(e)||Qr(e)||wE(e)||bE(e)||ei(e)||go(e)||Rf(e)||_t(e)||Ne(e)||Lf(e)||dt(e)||$E(e)||ks(e)||Wn(e)||Ss(e)||Ns(e)||DE(e)||Va(e)||vi(e)||xr(e)||eu(e)||zn(e)||EE(e)||qa(e)||CE(e))}const xE="(true|false)",_u="(0|[1-9][0-9]*)",By="(.*)",AE="(?!.*)",yo=`^${_u}$`,wo=`^${By}$`,FE=`^${AE}$`,Ry=new Map;function Uf(e){return Ry.has(e)}function jf(e){return Ry.get(e)}const _f=new Map;function Ei(e){return _f.has(e)}function Ly(e,t){_f.set(e,t)}function Vf(e){return _f.get(e)}function kE(e,t){return e.includes(t)}function SE(e){return[...new Set(e)]}function NE(e,t){return e.filter(n=>t.includes(n))}function IE(e,t){return e.reduce((n,r)=>NE(n,r),t)}function TE(e){return e.length===1?e[0]:e.length>1?IE(e.slice(1),e[0]):[]}function ME(e){const t=[];for(const n of e)t.push(...n);return t}function Is(e){return M({[I]:"Any"},e)}function qf(e,t){return M({[I]:"Array",type:"array",items:e},t)}function PE(e){return M({[I]:"Argument",index:e})}function Wf(e,t){return M({[I]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function et(e,t,n){return M({[I]:"Computed",target:e,parameters:t},n)}function OE(e,t){const{[t]:n,...r}=e;return r}function mn(e,t){return t.reduce((n,r)=>OE(n,r),e)}function Ie(e){return M({[I]:"Never",not:{}},e)}function pt(e){return M({[I]:"MappedResult",properties:e})}function zf(e,t,n){return M({[I]:"Constructor",type:"Constructor",parameters:e,returns:t},n)}function tu(e,t,n){return M({[I]:"Function",type:"Function",parameters:e,returns:t},n)}function Ec(e,t){return M({[I]:"Union",anyOf:e},t)}function BE(e){return e.some(t=>Xr(t))}function Oh(e){return e.map(t=>Xr(t)?RE(t):t)}function RE(e){return mn(e,[Ar])}function LE(e,t){return BE(e)?ri(Ec(Oh(e),t)):Ec(Oh(e),t)}function Lo(e,t){return e.length===1?M(e[0],t):e.length===0?Ie(t):LE(e,t)}function gt(e,t){return e.length===0?Ie(t):e.length===1?M(e[0],t):Ec(e,t)}class Bh extends ht{}function UE(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function Kf(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function yr(e,t){return Kf(e,t,"(")}function Ts(e,t){return Kf(e,t,")")}function Uy(e,t){return Kf(e,t,"|")}function jE(e){if(!(yr(e,0)&&Ts(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(yr(e,n)&&(t+=1),Ts(e,n)&&(t-=1),t===0&&n!==e.length-1)return!1;return!0}function _E(e){return e.slice(1,e.length-1)}function VE(e){let t=0;for(let n=0;n<e.length;n++)if(yr(e,n)&&(t+=1),Ts(e,n)&&(t-=1),Uy(e,n)&&t===0)return!0;return!1}function qE(e){for(let t=0;t<e.length;t++)if(yr(e,t))return!0;return!1}function WE(e){let[t,n]=[0,0];const r=[];for(let o=0;o<e.length;o++)if(yr(e,o)&&(t+=1),Ts(e,o)&&(t-=1),Uy(e,o)&&t===0){const s=e.slice(n,o);s.length>0&&r.push(bo(s)),n=o+1}const i=e.slice(n);return i.length>0&&r.push(bo(i)),r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"or",expr:r}}function zE(e){function t(i,o){if(!yr(i,o))throw new Bh("TemplateLiteralParser: Index must point to open parens");let s=0;for(let u=o;u<i.length;u++)if(yr(i,u)&&(s+=1),Ts(i,u)&&(s-=1),s===0)return[o,u];throw new Bh("TemplateLiteralParser: Unclosed group parens in expression")}function n(i,o){for(let s=o;s<i.length;s++)if(yr(i,s))return[o,s];return[o,i.length]}const r=[];for(let i=0;i<e.length;i++)if(yr(e,i)){const[o,s]=t(e,i),u=e.slice(o,s+1);r.push(bo(u)),i=s}else{const[o,s]=n(e,i),u=e.slice(o,s);u.length>0&&r.push(bo(u)),i=s-1}return r.length===0?{type:"const",const:""}:r.length===1?r[0]:{type:"and",expr:r}}function bo(e){return jE(e)?bo(_E(e)):VE(e)?WE(e):qE(e)?zE(e):{type:"const",const:UE(e)}}function Zf(e){return bo(e.slice(1,e.length-1))}class KE extends ht{}function ZE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function GE(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function YE(e){return e.type==="const"&&e.const===".*"}function Ms(e){return ZE(e)||YE(e)?!1:GE(e)?!0:e.type==="and"?e.expr.every(t=>Ms(t)):e.type==="or"?e.expr.every(t=>Ms(t)):e.type==="const"?!0:(()=>{throw new KE("Unknown expression type")})()}function JE(e){const t=Zf(e.pattern);return Ms(t)}class HE extends ht{}function*jy(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const n of jy(e.slice(1)))yield`${t}${n}`}function*XE(e){return yield*jy(e.expr.map(t=>[...Wa(t)]))}function*QE(e){for(const t of e.expr)yield*Wa(t)}function*eC(e){return yield e.const}function*Wa(e){return e.type==="and"?yield*XE(e):e.type==="or"?yield*QE(e):e.type==="const"?yield*eC(e):(()=>{throw new HE("Unknown expression")})()}function _y(e){const t=Zf(e.pattern);return Ms(t)?[...Wa(t)]:[]}function Ze(e,t){return M({[I]:"Literal",const:e,type:typeof e},t)}function Vy(e){return M({[I]:"Boolean",type:"boolean"},e)}function Gf(e){return M({[I]:"BigInt",type:"bigint"},e)}function Mi(e){return M({[I]:"Number",type:"number"},e)}function Ci(e){return M({[I]:"String",type:"string"},e)}function*tC(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Vy():t==="number"?yield Mi():t==="bigint"?yield Gf():t==="string"?yield Ci():yield(()=>{const n=t.split("|").map(r=>Ze(r.trim()));return n.length===0?Ie():n.length===1?n[0]:Lo(n)})()}function*nC(e){if(e[1]!=="{"){const t=Ze("$"),n=Cc(e.slice(1));return yield*[t,...n]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const n=tC(e.slice(2,t)),r=Cc(e.slice(t+1));return yield*[...n,...r]}yield Ze(e)}function*Cc(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const n=Ze(e.slice(0,t)),r=nC(e.slice(t));return yield*[n,...r]}yield Ze(e)}function rC(e){return[...Cc(e)]}class iC extends ht{}function oC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qy(e,t){return ki(e)?e.pattern.slice(1,e.pattern.length-1):ut(e)?`(${e.anyOf.map(n=>qy(n,t)).join("|")})`:Ro(e)?`${t}${_u}`:Bo(e)?`${t}${_u}`:Pa(e)?`${t}${_u}`:Xs(e)?`${t}${By}`:Ai(e)?`${t}${oC(e.const.toString())}`:Js(e)?`${t}${xE}`:(()=>{throw new iC(`Unexpected Kind '${e[I]}'`)})()}function Rh(e){return`^${e.map(t=>qy(t,"")).join("")}$`}function aa(e){const n=_y(e).map(r=>Ze(r));return Lo(n)}function Wy(e,t){const n=je(e)?Rh(rC(e)):Rh(e);return M({[I]:"TemplateLiteral",type:"string",pattern:n},t)}function sC(e){return _y(e).map(n=>n.toString())}function uC(e){const t=[];for(const n of e)t.push(...ti(n));return t}function aC(e){return[e.toString()]}function ti(e){return[...new Set(ki(e)?sC(e):ut(e)?uC(e.anyOf):Ai(e)?aC(e.const):Ro(e)?["[number]"]:Bo(e)?["[number]"]:[])]}function lC(e,t,n){const r={};for(const i of Object.getOwnPropertyNames(t))r[i]=za(e,ti(t[i]),n);return r}function cC(e,t,n){return lC(e,t.properties,n)}function fC(e,t,n){const r=cC(e,t,n);return pt(r)}function zy(e,t){return e.map(n=>Ky(n,t))}function dC(e){return e.filter(t=>!Hs(t))}function mC(e,t){return Yy(dC(zy(e,t)))}function hC(e){return e.some(t=>Hs(t))?[]:e}function pC(e,t){return Lo(hC(zy(e,t)))}function gC(e,t){return t in e?e[t]:t==="[number]"?Lo(e):Ie()}function yC(e,t){return t==="[number]"?e:Ie()}function wC(e,t){return t in e?e[t]:Ie()}function Ky(e,t){return Fn(e)?mC(e.allOf,t):ut(e)?pC(e.anyOf,t):Si(e)?gC(e.items??[],t):To(e)?yC(e.items,t):Gn(e)?wC(e.properties,t):Ie()}function Yf(e,t){return t.map(n=>Ky(e,n))}function Lh(e,t){return Lo(Yf(e,t))}function za(e,t,n){if(Zt(e)||Zt(t)){const r="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Mt(e)||!Mt(t))throw new ht(r);return et("Index",[e,t])}return gn(t)?fC(e,t,n):Fi(t)?vC(e,t,n):M(Mt(t)?Lh(e,ti(t)):Lh(e,t),n)}function bC(e,t,n){return{[t]:za(e,[t],fn(n))}}function $C(e,t,n){return t.reduce((r,i)=>({...r,...bC(e,i,n)}),{})}function DC(e,t,n){return $C(e,t.keys,n)}function vC(e,t,n){const r=DC(e,t,n);return pt(r)}function Jf(e,t){return M({[I]:"Iterator",type:"Iterator",items:e},t)}function EC(e){const t=[];for(let n in e)Xr(e[n])||t.push(n);return t}function CC(e,t){const n=EC(e),r=n.length>0?{[I]:"Object",type:"object",properties:e,required:n}:{[I]:"Object",type:"object",properties:e};return M(r,t)}var st=CC;function Zy(e,t){return M({[I]:"Promise",type:"Promise",item:e},t)}function xC(e){return M(mn(e,[Ys]))}function AC(e){return M({...e,[Ys]:"Readonly"})}function FC(e,t){return t===!1?xC(e):AC(e)}function ni(e,t){const n=t??!0;return gn(e)?NC(e,n):FC(e,n)}function kC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ni(e[r],t);return n}function SC(e,t){return kC(e.properties,t)}function NC(e,t){const n=SC(e,t);return pt(n)}function Uo(e,t){return M(e.length>0?{[I]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[I]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function Gy(e,t){return e in t?$n(e,t[e]):pt(t)}function IC(e){return{[e]:Ze(e)}}function TC(e){const t={};for(const n of e)t[n]=Ze(n);return t}function MC(e,t){return kE(t,e)?IC(e):TC(t)}function PC(e,t){const n=MC(e,t);return Gy(e,n)}function Xo(e,t){return t.map(n=>$n(e,n))}function OC(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(t))n[r]=$n(e,t[r]);return n}function $n(e,t){const n={...t};return Xr(t)?ri($n(e,mn(t,[Ar]))):Nf(t)?ni($n(e,mn(t,[Ys]))):gn(t)?Gy(e,t.properties):Fi(t)?PC(e,t.keys):Po(t)?zf(Xo(e,t.parameters),$n(e,t.returns),n):Oo(t)?tu(Xo(e,t.parameters),$n(e,t.returns),n):Ma(t)?Wf($n(e,t.items),n):Oa(t)?Jf($n(e,t.items),n):Fn(t)?ii(Xo(e,t.allOf),n):ut(t)?gt(Xo(e,t.anyOf),n):Si(t)?Uo(Xo(e,t.items??[]),n):Gn(t)?st(OC(e,t.properties),n):To(t)?qf($n(e,t.items),n):Ba(t)?Zy($n(e,t.item),n):t}function BC(e,t){const n={};for(const r of e)n[r]=$n(r,t);return n}function RC(e,t,n){const r=Mt(e)?ti(e):e,i=t({[I]:"MappedKey",keys:r}),o=BC(r,i);return st(o,n)}function LC(e){return M(mn(e,[Ar]))}function UC(e){return M({...e,[Ar]:"Optional"})}function jC(e,t){return t===!1?LC(e):UC(e)}function ri(e,t){const n=t??!0;return gn(e)?qC(e,n):jC(e,n)}function _C(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ri(e[r],t);return n}function VC(e,t){return _C(e.properties,t)}function qC(e,t){const n=VC(e,t);return pt(n)}function xc(e,t={}){const n=e.every(i=>Gn(i)),r=Mt(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return M(t.unevaluatedProperties===!1||Mt(t.unevaluatedProperties)||n?{...r,[I]:"Intersect",type:"object",allOf:e}:{...r,[I]:"Intersect",allOf:e},t)}function WC(e){return e.every(t=>Xr(t))}function zC(e){return mn(e,[Ar])}function Uh(e){return e.map(t=>Xr(t)?zC(t):t)}function KC(e,t){return WC(e)?ri(xc(Uh(e),t)):xc(Uh(e),t)}function Yy(e,t={}){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return KC(e,t)}function ii(e,t){if(e.length===1)return M(e[0],t);if(e.length===0)return Ie(t);if(e.some(n=>be(n)))throw new Error("Cannot intersect transform types");return xc(e,t)}function jo(...e){const[t,n]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new ht("Ref: $ref must be a string");return M({[I]:"Ref",$ref:t},n)}function ZC(e,t){return et("Awaited",[et(e,t)])}function GC(e){return et("Awaited",[jo(e)])}function YC(e){return ii(Jy(e))}function JC(e){return gt(Jy(e))}function HC(e){return Ka(e)}function Jy(e){return e.map(t=>Ka(t))}function Ka(e,t){return M(Mo(e)?ZC(e.target,e.parameters):Fn(e)?YC(e.allOf):ut(e)?JC(e.anyOf):Ba(e)?HC(e.item):Zt(e)?GC(e.$ref):e,t)}function Hy(e){const t=[];for(const n of e)t.push(Pi(n));return t}function XC(e){const t=Hy(e);return ME(t)}function QC(e){const t=Hy(e);return TE(t)}function ex(e){return e.map((t,n)=>n.toString())}function tx(e){return["[number]"]}function nx(e){return globalThis.Object.getOwnPropertyNames(e)}function rx(e){return Ac?globalThis.Object.getOwnPropertyNames(e).map(n=>n[0]==="^"&&n[n.length-1]==="$"?n.slice(1,n.length-1):n):[]}function Pi(e){return Fn(e)?XC(e.allOf):ut(e)?QC(e.anyOf):Si(e)?ex(e.items??[]):To(e)?tx(e.items):Gn(e)?nx(e.properties):Ra(e)?rx(e.patternProperties):[]}let Ac=!1;function $o(e){Ac=!0;const t=Pi(e);return Ac=!1,`^(${t.map(r=>`(${r})`).join("|")})$`}function ix(e,t){return et("KeyOf",[et(e,t)])}function ox(e){return et("KeyOf",[jo(e)])}function sx(e,t){const n=Pi(e),r=ux(n),i=Lo(r);return M(i,t)}function ux(e){return e.map(t=>t==="[number]"?Mi():Ze(t))}function Hf(e,t){return Mo(e)?ix(e.target,e.parameters):Zt(e)?ox(e.$ref):gn(e)?cx(e,t):sx(e,t)}function ax(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=Hf(e[r],fn(t));return n}function lx(e,t){return ax(e.properties,t)}function cx(e,t){const n=lx(e,t);return pt(n)}function Xy(e){const t=Pi(e),n=Yf(e,t);return t.map((r,i)=>[t[i],n[i]])}function fx(e){const t=[];for(const n of e)t.push(...Pi(n));return SE(t)}function dx(e){return e.filter(t=>!Hs(t))}function mx(e,t){const n=[];for(const r of e)n.push(...Yf(r,[t]));return dx(n)}function hx(e,t){const n={};for(const r of t)n[r]=Yy(mx(e,r));return n}function px(e,t){const n=fx(e),r=hx(e,n);return st(r,t)}function Qy(e){return M({[I]:"Date",type:"Date"},e)}function e1(e){return M({[I]:"Null",type:"null"},e)}function t1(e){return M({[I]:"Symbol",type:"symbol"},e)}function n1(e){return M({[I]:"Undefined",type:"undefined"},e)}function r1(e){return M({[I]:"Uint8Array",type:"Uint8Array"},e)}function Za(e){return M({[I]:"Unknown"},e)}function gx(e){return e.map(t=>Xf(t,!1))}function yx(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=ni(Xf(e[n],!1));return t}function Fu(e,t){return t===!0?e:ni(e)}function Xf(e,t){return Kv(e)||Gv(e)?Fu(Is(),t):Jt(e)?ni(Uo(gx(e))):Gs(e)?r1():Af(e)?Qy():Ge(e)?Fu(st(yx(e)),t):Zv(e)?Fu(tu([],Za()),t):ze(e)?n1():Yv(e)?e1():Jv(e)?t1():gy(e)?Gf():tr(e)||Zs(e)||je(e)?Ze(e):st({})}function wx(e,t){return M(Xf(e,!0),t)}function bx(e,t){return Po(e)?Uo(e.parameters,t):Ie(t)}function $x(e,t){if(ze(e))throw new Error("Enum undefined or empty");const n=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(n)].map(o=>Ze(o));return gt(i,{...t,[Ta]:"Enum"})}class Dx extends ht{}var v;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(v||(v={}));function xn(e){return e===v.False?e:v.True}function _o(e){throw new Dx(e)}function Ye(e){return ei(e)||Ti(e)||xr(e)||zn(e)||qn(e)}function Je(e,t){return ei(t)?s1():Ti(t)?Ga(e,t):xr(t)?ed(e,t):zn(t)?c1():qn(t)?Qf():_o("StructuralRight")}function Qf(e,t){return v.True}function vx(e,t){return Ti(t)?Ga(e,t):xr(t)&&t.anyOf.some(n=>qn(n)||zn(n))?v.True:xr(t)?v.Union:zn(t)||qn(t)?v.True:v.Union}function Ex(e,t){return zn(e)?v.False:qn(e)?v.Union:ei(e)?v.True:v.False}function Cx(e,t){return Ne(t)&&Ya(t)?v.True:Ye(t)?Je(e,t):Ni(t)?xn(he(e.items,t.items)):v.False}function xx(e,t){return Ye(t)?Je(e,t):Of(t)?xn(he(e.items,t.items)):v.False}function Ax(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):La(t)?v.True:v.False}function i1(e,t){return Oy(e)||Ii(e)?v.True:v.False}function Fx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Ii(t)?v.True:v.False}function kx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):Ua(t)?e.parameters.length>t.parameters.length?v.False:e.parameters.every((n,r)=>xn(he(t.parameters[r],n))===v.True)?xn(he(e.returns,t.returns)):v.False:v.False}function Sx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):ja(t)?v.True:v.False}function Nx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):_a(t)?e.parameters.length>t.parameters.length?v.False:e.parameters.every((n,r)=>xn(he(t.parameters[r],n))===v.True)?xn(he(e.returns,t.returns)):v.False:v.False}function o1(e,t){return Qr(e)&&tr(e.const)||_t(e)||Fr(e)?v.True:v.False}function Ix(e,t){return Fr(t)||_t(t)?v.True:Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):v.False}function Ga(e,t){return t.allOf.every(n=>he(e,n)===v.True)?v.True:v.False}function Tx(e,t){return e.allOf.some(n=>he(n,t)===v.True)?v.True:v.False}function Mx(e,t){return Ye(t)?Je(e,t):Bf(t)?xn(he(e.items,t.items)):v.False}function Px(e,t){return Qr(t)&&t.const===e.const?v.True:Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Wn(t)?l1(e):_t(t)?u1(e):Fr(t)?o1(e):Ii(t)?i1(e):v.False}function s1(e,t){return v.False}function Ox(e,t){return v.True}function jh(e){let[t,n]=[e,0];for(;go(t);)t=t.not,n+=1;return n%2===0?t:Za()}function Bx(e,t){return go(e)?he(jh(e),t):go(t)?he(e,jh(t)):_o("Invalid fallthrough for Not")}function Rx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Rf(t)?v.True:v.False}function u1(e,t){return Py(e)||_t(e)||Fr(e)?v.True:v.False}function Lx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Fr(t)||_t(t)?v.True:v.False}function Gt(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function _h(e){return Ya(e)}function Vh(e){return Gt(e,0)||Gt(e,1)&&"description"in e.properties&&xr(e.properties.description)&&e.properties.description.anyOf.length===2&&(Wn(e.properties.description.anyOf[0])&&vi(e.properties.description.anyOf[1])||Wn(e.properties.description.anyOf[1])&&vi(e.properties.description.anyOf[0]))}function Ul(e){return Gt(e,0)}function qh(e){return Gt(e,0)}function Ux(e){return Gt(e,0)}function jx(e){return Gt(e,0)}function _x(e){return Ya(e)}function Vx(e){const t=Mi();return Gt(e,0)||Gt(e,1)&&"length"in e.properties&&xn(he(e.properties.length,t))===v.True}function qx(e){return Gt(e,0)}function Ya(e){const t=Mi();return Gt(e,0)||Gt(e,1)&&"length"in e.properties&&xn(he(e.properties.length,t))===v.True}function Wx(e){const t=tu([Is()],Is());return Gt(e,0)||Gt(e,1)&&"then"in e.properties&&xn(he(e.properties.then,t))===v.True}function a1(e,t){return he(e,t)===v.False||ua(e)&&!ua(t)?v.False:v.True}function Ct(e,t){return zn(e)?v.False:qn(e)?v.Union:ei(e)||My(e)&&_h(t)||Py(e)&&Ul(t)||Oy(e)&&qh(t)||Ss(e)&&Vh(t)||La(e)&&Ux(t)||Wn(e)&&_h(t)||Ss(e)&&Vh(t)||_t(e)&&Ul(t)||Fr(e)&&Ul(t)||Ii(e)&&qh(t)||eu(e)&&_x(t)||ja(e)&&jx(t)||Ua(e)&&qx(t)||_a(e)&&Vx(t)?v.True:dt(e)&&Wn(Fc(e))?t[Ta]==="Record"?v.True:v.False:dt(e)&&_t(Fc(e))?Gt(t,0)?v.True:v.False:v.False}function zx(e,t){return Ye(t)?Je(e,t):dt(t)?kn(e,t):Ne(t)?(()=>{for(const n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!ua(t.properties[n]))return v.False;if(ua(t.properties[n]))return v.True;if(a1(e.properties[n],t.properties[n])===v.False)return v.False}return v.True})():v.False}function Kx(e,t){return Ye(t)?Je(e,t):Ne(t)&&Wx(t)?v.True:Lf(t)?xn(he(e.item,t.item)):v.False}function Fc(e){return yo in e.patternProperties?Mi():wo in e.patternProperties?Ci():_o("Unknown record key pattern")}function kc(e){return yo in e.patternProperties?e.patternProperties[yo]:wo in e.patternProperties?e.patternProperties[wo]:_o("Unable to get record value schema")}function kn(e,t){const[n,r]=[Fc(t),kc(t)];return My(e)&&_t(n)&&xn(he(e,r))===v.True?v.True:eu(e)&&_t(n)||Wn(e)&&_t(n)||Ni(e)&&_t(n)?he(e,r):Ne(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(a1(r,e.properties[i])===v.False)return v.False;return v.True})():v.False}function Zx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?he(kc(e),kc(t)):v.False}function Gx(e,t){const n=ks(e)?Ci():e,r=ks(t)?Ci():t;return he(n,r)}function l1(e,t){return Qr(e)&&je(e.const)||Wn(e)?v.True:v.False}function Yx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Wn(t)?v.True:v.False}function Jx(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):Ss(t)?v.True:v.False}function Hx(e,t){return Ns(e)?he(aa(e),t):Ns(t)?he(e,aa(t)):_o("Invalid fallthrough for TemplateLiteral")}function Xx(e,t){return Ni(t)&&e.items!==void 0&&e.items.every(n=>he(n,t.items)===v.True)}function Qx(e,t){return ei(e)?v.True:zn(e)?v.False:qn(e)?v.Union:v.False}function eA(e,t){return Ye(t)?Je(e,t):Ne(t)&&Ya(t)||Ni(t)&&Xx(e,t)?v.True:Va(t)?ze(e.items)&&!ze(t.items)||!ze(e.items)&&ze(t.items)?v.False:ze(e.items)&&!ze(t.items)||e.items.every((n,r)=>he(n,t.items[r])===v.True)?v.True:v.False:v.False}function tA(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):eu(t)?v.True:v.False}function nA(e,t){return Ye(t)?Je(e,t):Ne(t)?Ct(e,t):dt(t)?kn(e,t):qa(t)?oA(e):vi(t)?v.True:v.False}function ed(e,t){return t.anyOf.some(n=>he(e,n)===v.True)?v.True:v.False}function rA(e,t){return e.anyOf.every(n=>he(n,t)===v.True)?v.True:v.False}function c1(e,t){return v.True}function iA(e,t){return ei(t)?s1():Ti(t)?Ga(e,t):xr(t)?ed(e,t):qn(t)?Qf():Wn(t)?l1(e):_t(t)?u1(e):Fr(t)?o1(e):Ii(t)?i1(e):Ni(t)?Ex(e):Va(t)?Qx(e):Ne(t)?Ct(e,t):zn(t)?v.True:v.False}function oA(e,t){return vi(e)||vi(e)?v.True:v.False}function sA(e,t){return Ti(t)?Ga(e,t):xr(t)?ed(e,t):zn(t)?c1():qn(t)?Qf():Ne(t)?Ct(e,t):qa(t)?v.True:v.False}function he(e,t){return Ns(e)||Ns(t)?Hx(e,t):ks(e)||ks(t)?Gx(e,t):go(e)||go(t)?Bx(e,t):qn(e)?vx(e,t):Ni(e)?Cx(e,t):La(e)?Ax(e,t):Ii(e)?Fx(e,t):Of(e)?xx(e,t):Ua(e)?kx(e,t):ja(e)?Sx(e,t):_a(e)?Nx(e,t):Fr(e)?Ix(e,t):Ti(e)?Tx(e,t):Bf(e)?Mx(e,t):Qr(e)?Px(e,t):ei(e)?Ox():Rf(e)?Rx(e,t):_t(e)?Lx(e,t):Ne(e)?zx(e,t):dt(e)?Zx(e,t):Wn(e)?Yx(e,t):Ss(e)?Jx(e,t):Va(e)?eA(e,t):Lf(e)?Kx(e,t):eu(e)?tA(e,t):vi(e)?nA(e,t):xr(e)?rA(e,t):zn(e)?iA(e,t):qa(e)?sA(e,t):_o(`Unknown left type operand '${e[I]}'`)}function nu(e,t){return he(e,t)}function uA(e,t,n,r,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=td(e[s],t,n,r,fn(i));return o}function aA(e,t,n,r,i){return uA(e.properties,t,n,r,i)}function lA(e,t,n,r,i){const o=aA(e,t,n,r,i);return pt(o)}function cA(e,t,n,r){const i=nu(e,t);return i===v.Union?gt([n,r]):i===v.True?n:r}function td(e,t,n,r,i){return gn(e)?lA(e,t,n,r,i):Fi(e)?M(hA(e,t,n,r,i)):M(cA(e,t,n,r),i)}function fA(e,t,n,r,i){return{[e]:td(Ze(e),t,n,r,fn(i))}}function dA(e,t,n,r,i){return e.reduce((o,s)=>({...o,...fA(s,t,n,r,i)}),{})}function mA(e,t,n,r,i){return dA(e.keys,t,n,r,i)}function hA(e,t,n,r,i){const o=mA(e,t,n,r,i);return pt(o)}function pA(e){return e.allOf.every(t=>Vo(t))}function gA(e){return e.anyOf.some(t=>Vo(t))}function yA(e){return!Vo(e.not)}function Vo(e){return e[I]==="Intersect"?pA(e):e[I]==="Union"?gA(e):e[I]==="Not"?yA(e):e[I]==="Undefined"}function wA(e,t){return nd(aa(e),t)}function bA(e,t){const n=e.filter(r=>nu(r,t)===v.False);return n.length===1?n[0]:gt(n)}function nd(e,t,n={}){return ki(e)?M(wA(e,t),n):gn(e)?M(vA(e,t),n):M(ut(e)?bA(e.anyOf,t):nu(e,t)!==v.False?Ie():e,n)}function $A(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=nd(e[r],t);return n}function DA(e,t){return $A(e.properties,t)}function vA(e,t){const n=DA(e,t);return pt(n)}function EA(e,t){return rd(aa(e),t)}function CA(e,t){const n=e.filter(r=>nu(r,t)!==v.False);return n.length===1?n[0]:gt(n)}function rd(e,t,n){return ki(e)?M(EA(e,t),n):gn(e)?M(FA(e,t),n):M(ut(e)?CA(e.anyOf,t):nu(e,t)!==v.False?e:Ie(),n)}function xA(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=rd(e[r],t);return n}function AA(e,t){return xA(e.properties,t)}function FA(e,t){const n=AA(e,t);return pt(n)}function kA(e,t){return Po(e)?M(e.returns,t):Ie(t)}function f1(e){return ni(ri(e))}function Oi(e,t,n){return M({[I]:"Record",type:"object",patternProperties:{[e]:t}},n)}function id(e,t,n){const r={};for(const i of e)r[i]=t;return st(r,{...n,[Ta]:"Record"})}function SA(e,t,n){return JE(e)?id(ti(e),t,n):Oi(e.pattern,t,n)}function NA(e,t,n){return id(ti(gt(e)),t,n)}function IA(e,t,n){return id([e.toString()],t,n)}function TA(e,t,n){return Oi(e.source,t,n)}function MA(e,t,n){const r=ze(e.pattern)?wo:e.pattern;return Oi(r,t,n)}function PA(e,t,n){return Oi(wo,t,n)}function OA(e,t,n){return Oi(FE,t,n)}function BA(e,t,n){return st({true:t,false:t},n)}function RA(e,t,n){return Oi(yo,t,n)}function LA(e,t,n){return Oi(yo,t,n)}function d1(e,t,n={}){return ut(e)?NA(e.anyOf,t,n):ki(e)?SA(e,t,n):Ai(e)?IA(e.const,t,n):Js(e)?BA(e,t,n):Bo(e)?RA(e,t,n):Ro(e)?LA(e,t,n):ky(e)?TA(e,t,n):Xs(e)?MA(e,t,n):xy(e)?PA(e,t,n):Hs(e)?OA(e,t,n):Ie(n)}function od(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function UA(e){const t=od(e);return t===wo?Ci():t===yo?Mi():Ci({pattern:t})}function m1(e){return e.patternProperties[od(e)]}function jA(e,t){return t.parameters=ru(e,t.parameters),t.returns=Kn(e,t.returns),t}function _A(e,t){return t.parameters=ru(e,t.parameters),t.returns=Kn(e,t.returns),t}function VA(e,t){return t.allOf=ru(e,t.allOf),t}function qA(e,t){return t.anyOf=ru(e,t.anyOf),t}function WA(e,t){return ze(t.items)||(t.items=ru(e,t.items)),t}function zA(e,t){return t.items=Kn(e,t.items),t}function KA(e,t){return t.items=Kn(e,t.items),t}function ZA(e,t){return t.items=Kn(e,t.items),t}function GA(e,t){return t.item=Kn(e,t.item),t}function YA(e,t){const n=QA(e,t.properties);return{...t,...st(n)}}function JA(e,t){const n=Kn(e,UA(t)),r=Kn(e,m1(t)),i=d1(n,r);return{...t,...i}}function HA(e,t){return t.index in e?e[t.index]:Za()}function XA(e,t){const n=Nf(t),r=Xr(t),i=Kn(e,t);return n&&r?f1(i):n&&!r?ni(i):!n&&r?ri(i):i}function QA(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:XA(e,t[r])}),{})}function ru(e,t){return t.map(n=>Kn(e,n))}function Kn(e,t){return Po(t)?jA(e,t):Oo(t)?_A(e,t):Fn(t)?VA(e,t):ut(t)?qA(e,t):Si(t)?WA(e,t):To(t)?zA(e,t):Ma(t)?KA(e,t):Oa(t)?ZA(e,t):Ba(t)?GA(e,t):Gn(t)?YA(e,t):Ra(t)?JA(e,t):Ay(t)?HA(e,t):t}function eF(e,t){return Kn(t,Ff(e))}function tF(e){return M({[I]:"Integer",type:"integer"},e)}function nF(e,t,n){return{[e]:qo(Ze(e),t,fn(n))}}function rF(e,t,n){return e.reduce((i,o)=>({...i,...nF(o,t,n)}),{})}function iF(e,t,n){return rF(e.keys,t,n)}function oF(e,t,n){const r=iF(e,t,n);return pt(r)}function sF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join("")}function uF(e){const[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join("")}function aF(e){return e.toUpperCase()}function lF(e){return e.toLowerCase()}function cF(e,t,n){const r=Zf(e.pattern);if(!Ms(r))return{...e,pattern:h1(e.pattern,t)};const s=[...Wa(r)].map(l=>Ze(l)),u=p1(s,t),a=gt(u);return Wy([a],n)}function h1(e,t){return typeof e=="string"?t==="Uncapitalize"?sF(e):t==="Capitalize"?uF(e):t==="Uppercase"?aF(e):t==="Lowercase"?lF(e):e:e.toString()}function p1(e,t){return e.map(n=>qo(n,t))}function qo(e,t,n={}){return Fi(e)?oF(e,t,n):ki(e)?cF(e,t,n):ut(e)?gt(p1(e.anyOf,t),n):Ai(e)?Ze(h1(e.const,t),n):M(e,n)}function fF(e,t={}){return qo(e,"Capitalize",t)}function dF(e,t={}){return qo(e,"Lowercase",t)}function mF(e,t={}){return qo(e,"Uncapitalize",t)}function hF(e,t={}){return qo(e,"Uppercase",t)}function pF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=Ja(e[i],t,fn(n));return r}function gF(e,t,n){return pF(e.properties,t,n)}function yF(e,t,n){const r=gF(e,t,n);return pt(r)}function wF(e,t){return e.map(n=>sd(n,t))}function bF(e,t){return e.map(n=>sd(n,t))}function $F(e,t){const{[t]:n,...r}=e;return r}function DF(e,t){return t.reduce((n,r)=>$F(n,r),e)}function vF(e,t){const n=mn(e,[jt,"$id","required","properties"]),r=DF(e.properties,t);return st(r,n)}function EF(e){const t=e.reduce((n,r)=>Fy(r)?[...n,Ze(r)]:n,[]);return gt(t)}function sd(e,t){return Fn(e)?ii(wF(e.allOf,t)):ut(e)?gt(bF(e.anyOf,t)):Gn(e)?vF(e,t):st({})}function Ja(e,t,n){const r=Jt(t)?EF(t):t,i=Mt(t)?ti(t):t,o=Zt(e),s=Zt(t);return gn(e)?yF(e,i,n):Fi(t)?FF(e,t,n):o&&s?et("Omit",[e,r],n):!o&&s?et("Omit",[e,r],n):o&&!s?et("Omit",[e,r],n):M({...sd(e,i),...n})}function CF(e,t,n){return{[t]:Ja(e,[t],fn(n))}}function xF(e,t,n){return t.reduce((r,i)=>({...r,...CF(e,i,n)}),{})}function AF(e,t,n){return xF(e,t.keys,n)}function FF(e,t,n){const r=AF(e,t,n);return pt(r)}function kF(e,t,n){const r={};for(const i of globalThis.Object.getOwnPropertyNames(e))r[i]=Ha(e[i],t,fn(n));return r}function SF(e,t,n){return kF(e.properties,t,n)}function NF(e,t,n){const r=SF(e,t,n);return pt(r)}function IF(e,t){return e.map(n=>ud(n,t))}function TF(e,t){return e.map(n=>ud(n,t))}function MF(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function PF(e,t){const n=mn(e,[jt,"$id","required","properties"]),r=MF(e.properties,t);return st(r,n)}function OF(e){const t=e.reduce((n,r)=>Fy(r)?[...n,Ze(r)]:n,[]);return gt(t)}function ud(e,t){return Fn(e)?ii(IF(e.allOf,t)):ut(e)?gt(TF(e.anyOf,t)):Gn(e)?PF(e,t):st({})}function Ha(e,t,n){const r=Jt(t)?OF(t):t,i=Mt(t)?ti(t):t,o=Zt(e),s=Zt(t);return gn(e)?NF(e,i,n):Fi(t)?UF(e,t,n):o&&s?et("Pick",[e,r],n):!o&&s?et("Pick",[e,r],n):o&&!s?et("Pick",[e,r],n):M({...ud(e,i),...n})}function BF(e,t,n){return{[t]:Ha(e,[t],fn(n))}}function RF(e,t,n){return t.reduce((r,i)=>({...r,...BF(e,i,n)}),{})}function LF(e,t,n){return RF(e,t.keys,n)}function UF(e,t,n){const r=LF(e,t,n);return pt(r)}function jF(e,t){return et("Partial",[et(e,t)])}function _F(e){return et("Partial",[jo(e)])}function VF(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=ri(e[n]);return t}function qF(e){const t=mn(e,[jt,"$id","required","properties"]),n=VF(e.properties);return st(n,t)}function Wh(e){return e.map(t=>g1(t))}function g1(e){return Mo(e)?jF(e.target,e.parameters):Zt(e)?_F(e.$ref):Fn(e)?ii(Wh(e.allOf)):ut(e)?gt(Wh(e.anyOf)):Gn(e)?qF(e):Pa(e)||Js(e)||Bo(e)||Ai(e)||If(e)||Ro(e)||Xs(e)||Tf(e)||Qs(e)?e:st({})}function ad(e,t){return gn(e)?KF(e,t):M({...g1(e),...t})}function WF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ad(e[r],fn(t));return n}function zF(e,t){return WF(e.properties,t)}function KF(e,t){const n=zF(e,t);return pt(n)}function ZF(e,t){return et("Required",[et(e,t)])}function GF(e){return et("Required",[jo(e)])}function YF(e){const t={};for(const n of globalThis.Object.getOwnPropertyNames(e))t[n]=mn(e[n],[Ar]);return t}function JF(e){const t=mn(e,[jt,"$id","required","properties"]),n=YF(e.properties);return st(n,t)}function zh(e){return e.map(t=>y1(t))}function y1(e){return Mo(e)?ZF(e.target,e.parameters):Zt(e)?GF(e.$ref):Fn(e)?ii(zh(e.allOf)):ut(e)?gt(zh(e.anyOf)):Gn(e)?JF(e):Pa(e)||Js(e)||Bo(e)||Ai(e)||If(e)||Ro(e)||Xs(e)||Tf(e)||Qs(e)?e:st({})}function ld(e,t){return gn(e)?QF(e,t):M({...y1(e),...t})}function HF(e,t){const n={};for(const r of globalThis.Object.getOwnPropertyNames(e))n[r]=ld(e[r],t);return n}function XF(e,t){return HF(e.properties,t)}function QF(e,t){const n=XF(e,t);return pt(n)}function e3(e,t){return t.map(n=>Zt(n)?cd(e,n.$ref):hn(e,n))}function cd(e,t){return t in e?Zt(e[t])?cd(e,e[t].$ref):hn(e,e[t]):Ie()}function t3(e){return Ka(e[0])}function n3(e){return za(e[0],e[1])}function r3(e){return Hf(e[0])}function i3(e){return ad(e[0])}function o3(e){return Ja(e[0],e[1])}function s3(e){return Ha(e[0],e[1])}function u3(e){return ld(e[0])}function a3(e,t,n){const r=e3(e,n);return t==="Awaited"?t3(r):t==="Index"?n3(r):t==="KeyOf"?r3(r):t==="Partial"?i3(r):t==="Omit"?o3(r):t==="Pick"?s3(r):t==="Required"?u3(r):Ie()}function l3(e,t){return qf(hn(e,t))}function c3(e,t){return Wf(hn(e,t))}function f3(e,t,n){return zf(iu(e,t),hn(e,n))}function d3(e,t,n){return tu(iu(e,t),hn(e,n))}function m3(e,t){return ii(iu(e,t))}function h3(e,t){return Jf(hn(e,t))}function p3(e,t){return st(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:hn(e,t[r])}),{}))}function g3(e,t){const[n,r]=[hn(e,m1(t)),od(t)],i=Ff(t);return i.patternProperties[r]=n,i}function y3(e,t){return Zt(t)?{...cd(e,t.$ref),[jt]:t[jt]}:t}function w3(e,t){return Uo(iu(e,t))}function b3(e,t){return gt(iu(e,t))}function iu(e,t){return t.map(n=>hn(e,n))}function hn(e,t){return Xr(t)?M(hn(e,mn(t,[Ar])),t):Nf(t)?M(hn(e,mn(t,[Ys])),t):be(t)?M(y3(e,t),t):To(t)?M(l3(e,t.items),t):Ma(t)?M(c3(e,t.items),t):Mo(t)?M(a3(e,t.target,t.parameters)):Po(t)?M(f3(e,t.parameters,t.returns),t):Oo(t)?M(d3(e,t.parameters,t.returns),t):Fn(t)?M(m3(e,t.allOf),t):Oa(t)?M(h3(e,t.items),t):Gn(t)?M(p3(e,t.properties),t):Ra(t)?M(g3(e,t)):Si(t)?M(w3(e,t.items||[]),t):ut(t)?M(b3(e,t.anyOf),t):t}function $3(e,t){return t in e?hn(e,e[t]):Ie()}function D3(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:$3(e,n)}),{})}class v3{constructor(t){const n=D3(t),r=this.WithIdentifiers(n);this.$defs=r}Import(t,n){const r={...this.$defs,[t]:M(this.$defs[t],n)};return M({[I]:"Import",$defs:r,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:{...t[r],$id:r}}),{})}}function E3(e){return new v3(e)}function C3(e,t){return M({[I]:"Not",not:e},t)}function x3(e,t){return Oo(e)?Uo(e.parameters,t):Ie()}let A3=0;function F3(e,t={}){ze(t.$id)&&(t.$id=`T${A3++}`);const n=Ff(e({[I]:"This",$ref:`${t.$id}`}));return n.$id=t.$id,M({[Ta]:"Recursive",...n},t)}function k3(e,t){const n=je(e)?new globalThis.RegExp(e):e;return M({[I]:"RegExp",type:"RegExp",source:n.source,flags:n.flags},t)}function S3(e){return Fn(e)?e.allOf:ut(e)?e.anyOf:Si(e)?e.items??[]:[]}function N3(e){return S3(e)}function I3(e,t){return Oo(e)?M(e.returns,t):Ie(t)}class T3{constructor(t){this.schema=t}Decode(t){return new M3(this.schema,t)}}class M3{constructor(t,n){this.schema=t,this.decode=n}EncodeTransform(t,n){const o={Encode:s=>n[jt].Encode(t(s)),Decode:s=>this.decode(n[jt].Decode(s))};return{...n,[jt]:o}}EncodeSchema(t,n){const r={Decode:this.decode,Encode:t};return{...n,[jt]:r}}Encode(t){return be(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function P3(e){return new T3(e)}function O3(e={}){return M({[I]:e[I]??"Unsafe"},e)}function B3(e){return M({[I]:"Void",type:"void"},e)}const R3=Object.freeze(Object.defineProperty({__proto__:null,Any:Is,Argument:PE,Array:qf,AsyncIterator:Wf,Awaited:Ka,BigInt:Gf,Boolean:Vy,Capitalize:fF,Composite:px,Const:wx,Constructor:zf,ConstructorParameters:bx,Date:Qy,Enum:$x,Exclude:nd,Extends:td,Extract:rd,Function:tu,Index:za,InstanceType:kA,Instantiate:eF,Integer:tF,Intersect:ii,Iterator:Jf,KeyOf:Hf,Literal:Ze,Lowercase:dF,Mapped:RC,Module:E3,Never:Ie,Not:C3,Null:e1,Number:Mi,Object:st,Omit:Ja,Optional:ri,Parameters:x3,Partial:ad,Pick:Ha,Promise:Zy,Readonly:ni,ReadonlyOptional:f1,Record:d1,Recursive:F3,Ref:jo,RegExp:k3,Required:ld,Rest:N3,ReturnType:I3,String:Ci,Symbol:t1,TemplateLiteral:Wy,Transform:P3,Tuple:Uo,Uint8Array:r1,Uncapitalize:mF,Undefined:n1,Union:gt,Unknown:Za,Unsafe:O3,Uppercase:hF,Void:B3},Symbol.toStringTag,{value:"Module"})),Fe=R3;function w1(e){switch(e.errorType){case b.ArrayContains:return"Expected array to contain at least one matching value";case b.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case b.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case b.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case b.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case b.ArrayUniqueItems:return"Expected array elements to be unique";case b.Array:return"Expected array";case b.AsyncIterator:return"Expected AsyncIterator";case b.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case b.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case b.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case b.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case b.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case b.BigInt:return"Expected bigint";case b.Boolean:return"Expected boolean";case b.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case b.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case b.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case b.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case b.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case b.Date:return"Expected Date";case b.Function:return"Expected function";case b.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case b.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case b.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case b.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case b.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case b.Integer:return"Expected integer";case b.IntersectUnevaluatedProperties:return"Unexpected property";case b.Intersect:return"Expected all values to match";case b.Iterator:return"Expected Iterator";case b.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case b.Never:return"Never";case b.Not:return"Value should not match";case b.Null:return"Expected null";case b.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case b.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case b.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case b.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case b.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case b.Number:return"Expected number";case b.Object:return"Expected object";case b.ObjectAdditionalProperties:return"Unexpected property";case b.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case b.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case b.ObjectRequiredProperty:return"Expected required property";case b.Promise:return"Expected Promise";case b.RegExp:return"Expected string to match regular expression";case b.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case b.StringFormat:return`Expected string to match '${e.schema.format}' format`;case b.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case b.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case b.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case b.String:return"Expected string";case b.Symbol:return"Expected symbol";case b.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case b.Tuple:return"Expected tuple";case b.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case b.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case b.Uint8Array:return"Expected Uint8Array";case b.Undefined:return"Expected undefined";case b.Union:return"Expected union value";case b.Void:return"Expected void";case b.Kind:return`Expected kind '${e.schema[I]}'`;default:return"Unknown error type"}}let b1=w1;function L3(e){b1=e}function U3(){return b1}class j3 extends ht{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function _3(e,t){const n=t.find(r=>r.$id===e.$ref);if(n===void 0)throw new j3(e);return Sn(n,t)}function Xa(e,t){return!un(e.$id)||t.some(n=>n.$id===e.$id)||t.push(e),t}function Sn(e,t){return e[I]==="This"||e[I]==="Ref"?_3(e,t):e}class V3 extends ht{constructor(t){super("Unable to hash value"),this.value=t}}var pn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(pn||(pn={}));let Yi=BigInt("14695981039346656037");const[q3,W3]=[BigInt("1099511628211"),BigInt("18446744073709551616")],z3=Array.from({length:256}).map((e,t)=>BigInt(t)),$1=new Float64Array(1),D1=new DataView($1.buffer),v1=new Uint8Array($1.buffer);function*K3(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function Z3(e){Et(pn.Array);for(const t of e)Do(t)}function G3(e){Et(pn.Boolean),Et(e?1:0)}function Y3(e){Et(pn.BigInt),D1.setBigInt64(0,e);for(const t of v1)Et(t)}function J3(e){Et(pn.Date),Do(e.getTime())}function H3(e){Et(pn.Null)}function X3(e){Et(pn.Number),D1.setFloat64(0,e);for(const t of v1)Et(t)}function Q3(e){Et(pn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Do(t),Do(e[t])}function e4(e){Et(pn.String);for(let t=0;t<e.length;t++)for(const n of K3(e.charCodeAt(t)))Et(n)}function t4(e){Et(pn.Symbol),Do(e.description)}function n4(e){Et(pn.Uint8Array);for(let t=0;t<e.length;t++)Et(e[t])}function r4(e){return Et(pn.Undefined)}function Do(e){if(dn(e))return Z3(e);if(Na(e))return G3(e);if(mr(e))return Y3(e);if(kf(e))return J3(e);if(Sa(e))return H3();if(H(e))return X3(e);if(rr(e))return Q3(e);if(un(e))return e4(e);if(Ia(e))return t4(e);if(Sf(e))return n4(e);if(Hr(e))return r4();throw new V3(e)}function Et(e){Yi=Yi^z3[e],Yi=Yi*q3%W3}function fd(e){return Yi=BigInt("14695981039346656037"),Do(e),Yi}class i4 extends ht{constructor(t){super("Unknown type"),this.schema=t}}function o4(e){return e[I]==="Any"||e[I]==="Unknown"}function ne(e){return e!==void 0}function s4(e,t,n){return!0}function u4(e,t,n){return!0}function a4(e,t,n){if(!dn(n)||ne(e.minItems)&&!(n.length>=e.minItems)||ne(e.maxItems)&&!(n.length<=e.maxItems)||!n.every(o=>it(e.items,t,o))||e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of n){const u=fd(s);if(o.has(u))return!1;o.add(u)}return!0})())return!1;if(!(ne(e.contains)||H(e.minContains)||H(e.maxContains)))return!0;const r=ne(e.contains)?e.contains:Ie(),i=n.reduce((o,s)=>it(r,t,s)?o+1:o,0);return!(i===0||H(e.minContains)&&i<e.minContains||H(e.maxContains)&&i>e.maxContains)}function l4(e,t,n){return wy(n)}function c4(e,t,n){return!(!mr(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function f4(e,t,n){return Na(n)}function d4(e,t,n){return it(e.returns,t,n.prototype)}function m4(e,t,n){return!(!kf(n)||ne(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||ne(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||ne(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||ne(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||ne(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function h4(e,t,n){return Ey(n)}function p4(e,t,n){const r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return it(i,[...t,...r],n)}function g4(e,t,n){return!(!vy(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.multipleOf)&&n%e.multipleOf!==0)}function y4(e,t,n){const r=e.allOf.every(i=>it(i,t,n));if(e.unevaluatedProperties===!1){const i=new RegExp($o(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s));return r&&o}else if(Mt(e.unevaluatedProperties)){const i=new RegExp($o(e)),o=Object.getOwnPropertyNames(n).every(s=>i.test(s)||it(e.unevaluatedProperties,t,n[s]));return r&&o}else return r}function w4(e,t,n){return by(n)}function b4(e,t,n){return n===e.const}function $4(e,t,n){return!1}function D4(e,t,n){return!it(e.not,t,n)}function v4(e,t,n){return Sa(n)}function E4(e,t,n){return!(!Le.IsNumberLike(n)||ne(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ne(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ne(e.minimum)&&!(n>=e.minimum)||ne(e.maximum)&&!(n<=e.maximum)||ne(e.multipleOf)&&n%e.multipleOf!==0)}function C4(e,t,n){if(!Le.IsObjectLike(n)||ne(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ne(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const r=Object.getOwnPropertyNames(e.properties);for(const i of r){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!it(o,t,n[i])||(Vo(o)||o4(o))&&!(i in n))return!1}else if(Le.IsExactOptionalProperty(n,i)&&!it(o,t,n[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&i.length===r.length?!0:i.every(o=>r.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(n).every(o=>r.includes(o)||it(e.additionalProperties,t,n[o])):!0}function x4(e,t,n){return $y(n)}function A4(e,t,n){if(!Le.IsRecordLike(n)||ne(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ne(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;const[r,i]=Object.entries(e.patternProperties)[0],o=new RegExp(r),s=Object.entries(n).every(([l,c])=>o.test(l)?it(i,t,c):!0),u=typeof e.additionalProperties=="object"?Object.entries(n).every(([l,c])=>o.test(l)?!0:it(e.additionalProperties,t,c)):!0,a=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(l=>o.test(l)):!0;return s&&u&&a}function F4(e,t,n){return it(Sn(e,t),t,n)}function k4(e,t,n){const r=new RegExp(e.source,e.flags);return ne(e.minLength)&&!(n.length>=e.minLength)||ne(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function S4(e,t,n){return!un(n)||ne(e.minLength)&&!(n.length>=e.minLength)||ne(e.maxLength)&&!(n.length<=e.maxLength)||ne(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:ne(e.format)?Uf(e.format)?jf(e.format)(n):!1:!0}function N4(e,t,n){return Ia(n)}function I4(e,t,n){return un(n)&&new RegExp(e.pattern).test(n)}function T4(e,t,n){return it(Sn(e,t),t,n)}function M4(e,t,n){if(!dn(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!it(e.items[r],t,n[r]))return!1;return!0}function P4(e,t,n){return Hr(n)}function O4(e,t,n){return e.anyOf.some(r=>it(r,t,n))}function B4(e,t,n){return!(!Sf(n)||ne(e.maxByteLength)&&!(n.length<=e.maxByteLength)||ne(e.minByteLength)&&!(n.length>=e.minByteLength))}function R4(e,t,n){return!0}function L4(e,t,n){return Le.IsVoidLike(n)}function U4(e,t,n){return Ei(e[I])?Vf(e[I])(e,n):!1}function it(e,t,n){const r=ne(e.$id)?Xa(e,t):t,i=e;switch(i[I]){case"Any":return s4();case"Argument":return u4();case"Array":return a4(i,r,n);case"AsyncIterator":return l4(i,r,n);case"BigInt":return c4(i,r,n);case"Boolean":return f4(i,r,n);case"Constructor":return d4(i,r,n);case"Date":return m4(i,r,n);case"Function":return h4(i,r,n);case"Import":return p4(i,r,n);case"Integer":return g4(i,r,n);case"Intersect":return y4(i,r,n);case"Iterator":return w4(i,r,n);case"Literal":return b4(i,r,n);case"Never":return $4();case"Not":return D4(i,r,n);case"Null":return v4(i,r,n);case"Number":return E4(i,r,n);case"Object":return C4(i,r,n);case"Promise":return x4(i,r,n);case"Record":return A4(i,r,n);case"Ref":return F4(i,r,n);case"RegExp":return k4(i,r,n);case"String":return S4(i,r,n);case"Symbol":return N4(i,r,n);case"TemplateLiteral":return I4(i,r,n);case"This":return T4(i,r,n);case"Tuple":return M4(i,r,n);case"Undefined":return P4(i,r,n);case"Union":return O4(i,r,n);case"Uint8Array":return B4(i,r,n);case"Unknown":return R4();case"Void":return L4(i,r,n);default:if(!Ei(i[I]))throw new i4(i);return U4(i,r,n)}}function la(...e){return e.length===3?it(e[0],e[1],e[2]):it(e[0],[],e[1])}var b;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(b||(b={}));class j4 extends ht{constructor(t){super("Unknown type"),this.schema=t}}function cr(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function te(e){return e!==void 0}class E1{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function P(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:U3()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*_4(e,t,n,r){}function*V4(e,t,n,r){}function*q4(e,t,n,r){if(!dn(r))return yield P(b.Array,e,n,r);te(e.minItems)&&!(r.length>=e.minItems)&&(yield P(b.ArrayMinItems,e,n,r)),te(e.maxItems)&&!(r.length<=e.maxItems)&&(yield P(b.ArrayMaxItems,e,n,r));for(let s=0;s<r.length;s++)yield*ot(e.items,t,`${n}/${s}`,r[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const u of r){const a=fd(u);if(s.has(a))return!1;s.add(a)}return!0})()&&(yield P(b.ArrayUniqueItems,e,n,r)),!(te(e.contains)||te(e.minContains)||te(e.maxContains)))return;const i=te(e.contains)?e.contains:Ie(),o=r.reduce((s,u,a)=>ot(i,t,`${n}${a}`,u).next().done===!0?s+1:s,0);o===0&&(yield P(b.ArrayContains,e,n,r)),H(e.minContains)&&o<e.minContains&&(yield P(b.ArrayMinContains,e,n,r)),H(e.maxContains)&&o>e.maxContains&&(yield P(b.ArrayMaxContains,e,n,r))}function*W4(e,t,n,r){wy(r)||(yield P(b.AsyncIterator,e,n,r))}function*z4(e,t,n,r){if(!mr(r))return yield P(b.BigInt,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.BigIntExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.BigIntExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P(b.BigIntMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P(b.BigIntMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield P(b.BigIntMultipleOf,e,n,r))}function*K4(e,t,n,r){Na(r)||(yield P(b.Boolean,e,n,r))}function*Z4(e,t,n,r){yield*ot(e.returns,t,n,r.prototype)}function*G4(e,t,n,r){if(!kf(r))return yield P(b.Date,e,n,r);te(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield P(b.DateExclusiveMaximumTimestamp,e,n,r)),te(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield P(b.DateExclusiveMinimumTimestamp,e,n,r)),te(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield P(b.DateMaximumTimestamp,e,n,r)),te(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield P(b.DateMinimumTimestamp,e,n,r)),te(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield P(b.DateMultipleOfTimestamp,e,n,r))}function*Y4(e,t,n,r){Ey(r)||(yield P(b.Function,e,n,r))}function*J4(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*ot(o,[...t,...i],n,r)}function*H4(e,t,n,r){if(!vy(r))return yield P(b.Integer,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.IntegerExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.IntegerExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P(b.IntegerMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P(b.IntegerMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==0&&(yield P(b.IntegerMultipleOf,e,n,r))}function*X4(e,t,n,r){let i=!1;for(const o of e.allOf)for(const s of ot(o,t,n,r))i=!0,yield s;if(i)return yield P(b.Intersect,e,n,r);if(e.unevaluatedProperties===!1){const o=new RegExp($o(e));for(const s of Object.getOwnPropertyNames(r))o.test(s)||(yield P(b.IntersectUnevaluatedProperties,e,`${n}/${s}`,r))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp($o(e));for(const s of Object.getOwnPropertyNames(r))if(!o.test(s)){const u=ot(e.unevaluatedProperties,t,`${n}/${s}`,r[s]).next();u.done||(yield u.value)}}}function*Q4(e,t,n,r){by(r)||(yield P(b.Iterator,e,n,r))}function*ek(e,t,n,r){r!==e.const&&(yield P(b.Literal,e,n,r))}function*tk(e,t,n,r){yield P(b.Never,e,n,r)}function*nk(e,t,n,r){ot(e.not,t,n,r).next().done===!0&&(yield P(b.Not,e,n,r))}function*rk(e,t,n,r){Sa(r)||(yield P(b.Null,e,n,r))}function*ik(e,t,n,r){if(!Le.IsNumberLike(r))return yield P(b.Number,e,n,r);te(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield P(b.NumberExclusiveMaximum,e,n,r)),te(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield P(b.NumberExclusiveMinimum,e,n,r)),te(e.maximum)&&!(r<=e.maximum)&&(yield P(b.NumberMaximum,e,n,r)),te(e.minimum)&&!(r>=e.minimum)&&(yield P(b.NumberMinimum,e,n,r)),te(e.multipleOf)&&r%e.multipleOf!==0&&(yield P(b.NumberMultipleOf,e,n,r))}function*ok(e,t,n,r){if(!Le.IsObjectLike(r))return yield P(b.Object,e,n,r);te(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P(b.ObjectMinProperties,e,n,r)),te(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P(b.ObjectMaxProperties,e,n,r));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(r);for(const u of i)s.includes(u)||(yield P(b.ObjectRequiredProperty,e.properties[u],`${n}/${cr(u)}`,void 0));if(e.additionalProperties===!1)for(const u of s)o.includes(u)||(yield P(b.ObjectAdditionalProperties,e,`${n}/${cr(u)}`,r[u]));if(typeof e.additionalProperties=="object")for(const u of s)o.includes(u)||(yield*ot(e.additionalProperties,t,`${n}/${cr(u)}`,r[u]));for(const u of o){const a=e.properties[u];e.required&&e.required.includes(u)?(yield*ot(a,t,`${n}/${cr(u)}`,r[u]),Vo(e)&&!(u in r)&&(yield P(b.ObjectRequiredProperty,a,`${n}/${cr(u)}`,void 0))):Le.IsExactOptionalProperty(r,u)&&(yield*ot(a,t,`${n}/${cr(u)}`,r[u]))}}function*sk(e,t,n,r){$y(r)||(yield P(b.Promise,e,n,r))}function*uk(e,t,n,r){if(!Le.IsRecordLike(r))return yield P(b.Object,e,n,r);te(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield P(b.ObjectMinProperties,e,n,r)),te(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield P(b.ObjectMaxProperties,e,n,r));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[u,a]of Object.entries(r))s.test(u)&&(yield*ot(o,t,`${n}/${cr(u)}`,a));if(typeof e.additionalProperties=="object")for(const[u,a]of Object.entries(r))s.test(u)||(yield*ot(e.additionalProperties,t,`${n}/${cr(u)}`,a));if(e.additionalProperties===!1){for(const[u,a]of Object.entries(r))if(!s.test(u))return yield P(b.ObjectAdditionalProperties,e,`${n}/${cr(u)}`,a)}}function*ak(e,t,n,r){yield*ot(Sn(e,t),t,n,r)}function*lk(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);if(te(e.minLength)&&!(r.length>=e.minLength)&&(yield P(b.StringMinLength,e,n,r)),te(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P(b.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield P(b.RegExp,e,n,r)}function*ck(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);te(e.minLength)&&!(r.length>=e.minLength)&&(yield P(b.StringMinLength,e,n,r)),te(e.maxLength)&&!(r.length<=e.maxLength)&&(yield P(b.StringMaxLength,e,n,r)),un(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield P(b.StringPattern,e,n,r))),un(e.format)&&(Uf(e.format)?jf(e.format)(r)||(yield P(b.StringFormat,e,n,r)):yield P(b.StringFormatUnknown,e,n,r))}function*fk(e,t,n,r){Ia(r)||(yield P(b.Symbol,e,n,r))}function*dk(e,t,n,r){if(!un(r))return yield P(b.String,e,n,r);new RegExp(e.pattern).test(r)||(yield P(b.StringPattern,e,n,r))}function*mk(e,t,n,r){yield*ot(Sn(e,t),t,n,r)}function*hk(e,t,n,r){if(!dn(r))return yield P(b.Tuple,e,n,r);if(e.items===void 0&&r.length!==0)return yield P(b.TupleLength,e,n,r);if(r.length!==e.maxItems)return yield P(b.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*ot(e.items[i],t,`${n}/${i}`,r[i])}function*pk(e,t,n,r){Hr(r)||(yield P(b.Undefined,e,n,r))}function*gk(e,t,n,r){if(la(e,t,r))return;const i=e.anyOf.map(o=>new E1(ot(o,t,n,r)));yield P(b.Union,e,n,r,i)}function*yk(e,t,n,r){if(!Sf(r))return yield P(b.Uint8Array,e,n,r);te(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield P(b.Uint8ArrayMaxByteLength,e,n,r)),te(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield P(b.Uint8ArrayMinByteLength,e,n,r))}function*wk(e,t,n,r){}function*bk(e,t,n,r){Le.IsVoidLike(r)||(yield P(b.Void,e,n,r))}function*$k(e,t,n,r){Vf(e[I])(e,r)||(yield P(b.Kind,e,n,r))}function*ot(e,t,n,r){const i=te(e.$id)?[...t,e]:t,o=e;switch(o[I]){case"Any":return yield*_4();case"Argument":return yield*V4();case"Array":return yield*q4(o,i,n,r);case"AsyncIterator":return yield*W4(o,i,n,r);case"BigInt":return yield*z4(o,i,n,r);case"Boolean":return yield*K4(o,i,n,r);case"Constructor":return yield*Z4(o,i,n,r);case"Date":return yield*G4(o,i,n,r);case"Function":return yield*Y4(o,i,n,r);case"Import":return yield*J4(o,i,n,r);case"Integer":return yield*H4(o,i,n,r);case"Intersect":return yield*X4(o,i,n,r);case"Iterator":return yield*Q4(o,i,n,r);case"Literal":return yield*ek(o,i,n,r);case"Never":return yield*tk(o,i,n,r);case"Not":return yield*nk(o,i,n,r);case"Null":return yield*rk(o,i,n,r);case"Number":return yield*ik(o,i,n,r);case"Object":return yield*ok(o,i,n,r);case"Promise":return yield*sk(o,i,n,r);case"Record":return yield*uk(o,i,n,r);case"Ref":return yield*ak(o,i,n,r);case"RegExp":return yield*lk(o,i,n,r);case"String":return yield*ck(o,i,n,r);case"Symbol":return yield*fk(o,i,n,r);case"TemplateLiteral":return yield*dk(o,i,n,r);case"This":return yield*mk(o,i,n,r);case"Tuple":return yield*hk(o,i,n,r);case"Undefined":return yield*pk(o,i,n,r);case"Union":return yield*gk(o,i,n,r);case"Uint8Array":return yield*yk(o,i,n,r);case"Unknown":return yield*wk();case"Void":return yield*bk(o,i,n,r);default:if(!Ei(o[I]))throw new j4(e);return yield*$k(o,i,n,r)}}function Dk(...e){const t=e.length===3?ot(e[0],e[1],"",e[2]):ot(e[0],[],"",e[1]);return new E1(t)}class vk extends ht{constructor(t,n,r){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class Ek extends ht{constructor(t,n,r,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=n,this.value=r,this.error=i}}function Ae(e,t,n){try{return be(e)?e[jt].Decode(n):n}catch(r){throw new Ek(e,t,n,r)}}function Ck(e,t,n,r){return dn(r)?Ae(e,n,r.map((i,o)=>Yn(e.items,t,`${n}/${o}`,i))):Ae(e,n,r)}function xk(e,t,n,r){if(!rr(r)||Cy(r))return Ae(e,n,r);const i=Xy(e),o=i.map(c=>c[0]),s={...r};for(const[c,f]of i)c in s&&(s[c]=Yn(f,t,`${n}/${c}`,s[c]));if(!be(e.unevaluatedProperties))return Ae(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.unevaluatedProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=Ae(a,`${n}/${c}`,l[c]));return Ae(e,n,l)}function Ak(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=Yn(o,[...t,...i],n,r);return Ae(e,n,s)}function Fk(e,t,n,r){return Ae(e,n,Yn(e.not,t,n,r))}function kk(e,t,n,r){if(!rr(r))return Ae(e,n,r);const i=Pi(e),o={...r};for(const l of i)Dy(o,l)&&(Hr(o[l])&&(!Qs(e.properties[l])||Le.IsExactOptionalProperty(o,l))||(o[l]=Yn(e.properties[l],t,`${n}/${l}`,o[l])));if(!Mt(e.additionalProperties))return Ae(e,n,o);const s=Object.getOwnPropertyNames(o),u=e.additionalProperties,a={...o};for(const l of s)i.includes(l)||(a[l]=Ae(u,`${n}/${l}`,a[l]));return Ae(e,n,a)}function Sk(e,t,n,r){if(!rr(r))return Ae(e,n,r);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...r};for(const c of Object.getOwnPropertyNames(r))o.test(c)&&(s[c]=Yn(e.patternProperties[i],t,`${n}/${c}`,s[c]));if(!Mt(e.additionalProperties))return Ae(e,n,s);const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.test(c)||(l[c]=Ae(a,`${n}/${c}`,l[c]));return Ae(e,n,l)}function Nk(e,t,n,r){const i=Sn(e,t);return Ae(e,n,Yn(i,t,n,r))}function Ik(e,t,n,r){const i=Sn(e,t);return Ae(e,n,Yn(i,t,n,r))}function Tk(e,t,n,r){return dn(r)&&dn(e.items)?Ae(e,n,e.items.map((i,o)=>Yn(i,t,`${n}/${o}`,r[o]))):Ae(e,n,r)}function Mk(e,t,n,r){for(const i of e.anyOf){if(!la(i,t,r))continue;const o=Yn(i,t,n,r);return Ae(e,n,o)}return Ae(e,n,r)}function Yn(e,t,n,r){const i=Xa(e,t),o=e;switch(e[I]){case"Array":return Ck(o,i,n,r);case"Import":return Ak(o,i,n,r);case"Intersect":return xk(o,i,n,r);case"Not":return Fk(o,i,n,r);case"Object":return kk(o,i,n,r);case"Record":return Sk(o,i,n,r);case"Ref":return Nk(o,i,n,r);case"Symbol":return Ae(o,n,r);case"This":return Ik(o,i,n,r);case"Tuple":return Tk(o,i,n,r);case"Union":return Mk(o,i,n,r);default:return Ae(o,n,r)}}function Pk(e,t,n){return Yn(e,t,"",n)}class Ok extends ht{constructor(t,n,r){super("The encoded value does not match the expected schema"),this.schema=t,this.value=n,this.error=r}}class Bk extends ht{constructor(t,n,r,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=n,this.value=r,this.error=i}}function ft(e,t,n){try{return be(e)?e[jt].Encode(n):n}catch(r){throw new Bk(e,t,n,r)}}function Rk(e,t,n,r){const i=ft(e,n,r);return dn(i)?i.map((o,s)=>Zn(e.items,t,`${n}/${s}`,o)):i}function Lk(e,t,n,r){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=ft(e,n,r);return Zn(o,[...t,...i],n,s)}function Uk(e,t,n,r){const i=ft(e,n,r);if(!rr(r)||Cy(r))return i;const o=Xy(e),s=o.map(f=>f[0]),u={...i};for(const[f,p]of o)f in u&&(u[f]=Zn(p,t,`${n}/${f}`,u[f]));if(!be(e.unevaluatedProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.unevaluatedProperties,c={...u};for(const f of a)s.includes(f)||(c[f]=ft(l,`${n}/${f}`,c[f]));return c}function jk(e,t,n,r){return ft(e.not,n,ft(e,n,r))}function _k(e,t,n,r){const i=ft(e,n,r);if(!rr(i))return i;const o=Pi(e),s={...i};for(const c of o)Dy(s,c)&&(Hr(s[c])&&(!Qs(e.properties[c])||Le.IsExactOptionalProperty(s,c))||(s[c]=Zn(e.properties[c],t,`${n}/${c}`,s[c])));if(!Mt(e.additionalProperties))return s;const u=Object.getOwnPropertyNames(s),a=e.additionalProperties,l={...s};for(const c of u)o.includes(c)||(l[c]=ft(a,`${n}/${c}`,l[c]));return l}function Vk(e,t,n,r){const i=ft(e,n,r);if(!rr(r))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),u={...i};for(const f of Object.getOwnPropertyNames(r))s.test(f)&&(u[f]=Zn(e.patternProperties[o],t,`${n}/${f}`,u[f]));if(!Mt(e.additionalProperties))return u;const a=Object.getOwnPropertyNames(u),l=e.additionalProperties,c={...u};for(const f of a)s.test(f)||(c[f]=ft(l,`${n}/${f}`,c[f]));return c}function qk(e,t,n,r){const i=Sn(e,t),o=Zn(i,t,n,r);return ft(e,n,o)}function Wk(e,t,n,r){const i=Sn(e,t),o=Zn(i,t,n,r);return ft(e,n,o)}function zk(e,t,n,r){const i=ft(e,n,r);return dn(e.items)?e.items.map((o,s)=>Zn(o,t,`${n}/${s}`,i[s])):[]}function Kk(e,t,n,r){for(const i of e.anyOf){if(!la(i,t,r))continue;const o=Zn(i,t,n,r);return ft(e,n,o)}for(const i of e.anyOf){const o=Zn(i,t,n,r);if(la(e,t,o))return ft(e,n,o)}return ft(e,n,r)}function Zn(e,t,n,r){const i=Xa(e,t),o=e;switch(e[I]){case"Array":return Rk(o,i,n,r);case"Import":return Lk(o,i,n,r);case"Intersect":return Uk(o,i,n,r);case"Not":return jk(o,i,n,r);case"Object":return _k(o,i,n,r);case"Record":return Vk(o,i,n,r);case"Ref":return qk(o,i,n,r);case"This":return Wk(o,i,n,r);case"Tuple":return zk(o,i,n,r);case"Union":return Kk(o,i,n,r);default:return ft(o,n,r)}}function Zk(e,t,n){return Zn(e,t,"",n)}function Gk(e,t){return be(e)||tt(e.items,t)}function Yk(e,t){return be(e)||tt(e.items,t)}function Jk(e,t){return be(e)||tt(e.returns,t)||e.parameters.some(n=>tt(n,t))}function Hk(e,t){return be(e)||tt(e.returns,t)||e.parameters.some(n=>tt(n,t))}function Xk(e,t){return be(e)||be(e.unevaluatedProperties)||e.allOf.some(n=>tt(n,t))}function Qk(e,t){const n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),r=e.$defs[e.$ref];return be(e)||tt(r,[...n,...t])}function e6(e,t){return be(e)||tt(e.items,t)}function t6(e,t){return be(e)||tt(e.not,t)}function n6(e,t){return be(e)||Object.values(e.properties).some(n=>tt(n,t))||Mt(e.additionalProperties)&&tt(e.additionalProperties,t)}function r6(e,t){return be(e)||tt(e.item,t)}function i6(e,t){const n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return be(e)||tt(r,t)||Mt(e.additionalProperties)&&be(e.additionalProperties)}function o6(e,t){return be(e)?!0:tt(Sn(e,t),t)}function s6(e,t){return be(e)?!0:tt(Sn(e,t),t)}function u6(e,t){return be(e)||!Hr(e.items)&&e.items.some(n=>tt(n,t))}function a6(e,t){return be(e)||e.anyOf.some(n=>tt(n,t))}function tt(e,t){const n=Xa(e,t),r=e;if(e.$id&&Sc.has(e.$id))return!1;switch(e.$id&&Sc.add(e.$id),e[I]){case"Array":return Gk(r,n);case"AsyncIterator":return Yk(r,n);case"Constructor":return Jk(r,n);case"Function":return Hk(r,n);case"Import":return Qk(r,n);case"Intersect":return Xk(r,n);case"Iterator":return e6(r,n);case"Not":return t6(r,n);case"Object":return n6(r,n);case"Promise":return r6(r,n);case"Record":return i6(r,n);case"Ref":return o6(r,n);case"This":return s6(r,n);case"Tuple":return u6(r,n);case"Union":return a6(r,n);default:return be(e)}}const Sc=new Set;function l6(e,t){return Sc.clear(),tt(e,t)}class c6{constructor(t,n,r,i){this.schema=t,this.references=n,this.checkFunc=r,this.code=i,this.hasTransform=l6(t,n)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return Dk(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new vk(this.schema,t,this.Errors(t).First());return this.hasTransform?Pk(this.schema,this.references,t):t}Encode(t){const n=this.hasTransform?Zk(this.schema,this.references,t):t;if(!this.checkFunc(n))throw new Ok(this.schema,t,this.Errors(t).First());return n}}var hr;(function(e){function t(o){return o===36}e.DollarSign=t;function n(o){return o===95}e.IsUnderscore=n;function r(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=r;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(hr||(hr={}));var ca;(function(e){function t(o){return o.length===0?!1:hr.IsNumeric(o.charCodeAt(0))}function n(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const u=o.charCodeAt(s);if(!(hr.IsAlpha(u)||hr.IsNumeric(u)||hr.DollarSign(u)||hr.IsUnderscore(u)))return!1}return!0}function r(o){return o.replace(/'/g,"\\'")}function i(o,s){return n(s)?`${o}.${s}`:`${o}['${r(s)}']`}e.Encode=i})(ca||(ca={}));var Nc;(function(e){function t(n){const r=[];for(let i=0;i<n.length;i++){const o=n.charCodeAt(i);hr.IsNumeric(o)||hr.IsAlpha(o)?r.push(n.charAt(i)):r.push(`_${o}_`)}return r.join("").replace(/__/g,"_")}e.Encode=t})(Nc||(Nc={}));var Ic;(function(e){function t(n){return n.replace(/'/g,"\\'")}e.Escape=t})(Ic||(Ic={}));class f6 extends ht{constructor(t){super("Unknown type"),this.schema=t}}class Kh extends ht{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var hi;(function(e){function t(s,u,a){return Le.ExactOptionalPropertyTypes?`('${u}' in ${s} ? ${a} : true)`:`(${ca.Encode(s,u)} !== undefined ? ${a} : true)`}e.IsExactOptionalProperty=t;function n(s){return Le.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=n;function r(s){return Le.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=r;function i(s){return Le.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return Le.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(hi||(hi={}));var ms;(function(e){function t(h){return h[I]==="Any"||h[I]==="Unknown"}function*n(h,B,y){yield"true"}function*r(h,B,y){yield"true"}function*i(h,B,y){yield`Array.isArray(${y})`;const[q,U]=[cu("value","any"),cu("acc","number")];H(h.maxItems)&&(yield`${y}.length <= ${h.maxItems}`),H(h.minItems)&&(yield`${y}.length >= ${h.minItems}`);const j=Xt(h.items,B,"value");if(yield`${y}.every((${q}) => ${j})`,Se(h.contains)||H(h.minContains)||H(h.maxContains)){const we=Se(h.contains)?h.contains:Ie(),Ot=Xt(we,B,"value"),ir=H(h.minContains)?[`(count >= ${h.minContains})`]:[],Mn=H(h.maxContains)?[`(count <= ${h.maxContains})`]:[],Jn=`const count = value.reduce((${U}, ${q}) => ${Ot} ? acc + 1 : acc, 0)`,fu=["(count > 0)",...ir,...Mn].join(" && ");yield`((${q}) => { ${Jn}; return ${fu}})(${y})`}h.uniqueItems===!0&&(yield`((${q}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${y})`)}function*o(h,B,y){yield`(typeof value === 'object' && Symbol.asyncIterator in ${y})`}function*s(h,B,y){yield`(typeof ${y} === 'bigint')`,mr(h.exclusiveMaximum)&&(yield`${y} < BigInt(${h.exclusiveMaximum})`),mr(h.exclusiveMinimum)&&(yield`${y} > BigInt(${h.exclusiveMinimum})`),mr(h.maximum)&&(yield`${y} <= BigInt(${h.maximum})`),mr(h.minimum)&&(yield`${y} >= BigInt(${h.minimum})`),mr(h.multipleOf)&&(yield`(${y} % BigInt(${h.multipleOf})) === 0`)}function*u(h,B,y){yield`(typeof ${y} === 'boolean')`}function*a(h,B,y){yield*wn(h.returns,B,`${y}.prototype`)}function*l(h,B,y){yield`(${y} instanceof Date) && Number.isFinite(${y}.getTime())`,H(h.exclusiveMaximumTimestamp)&&(yield`${y}.getTime() < ${h.exclusiveMaximumTimestamp}`),H(h.exclusiveMinimumTimestamp)&&(yield`${y}.getTime() > ${h.exclusiveMinimumTimestamp}`),H(h.maximumTimestamp)&&(yield`${y}.getTime() <= ${h.maximumTimestamp}`),H(h.minimumTimestamp)&&(yield`${y}.getTime() >= ${h.minimumTimestamp}`),H(h.multipleOfTimestamp)&&(yield`(${y}.getTime() % ${h.multipleOfTimestamp}) === 0`)}function*c(h,B,y){yield`(typeof ${y} === 'function')`}function*f(h,B,y){const q=globalThis.Object.getOwnPropertyNames(h.$defs).reduce((U,j)=>[...U,h.$defs[j]],[]);yield*wn(jo(h.$ref),[...B,...q],y)}function*p(h,B,y){yield`Number.isInteger(${y})`,H(h.exclusiveMaximum)&&(yield`${y} < ${h.exclusiveMaximum}`),H(h.exclusiveMinimum)&&(yield`${y} > ${h.exclusiveMinimum}`),H(h.maximum)&&(yield`${y} <= ${h.maximum}`),H(h.minimum)&&(yield`${y} >= ${h.minimum}`),H(h.multipleOf)&&(yield`(${y} % ${h.multipleOf}) === 0`)}function*g(h,B,y){const q=h.allOf.map(U=>Xt(U,B,y)).join(" && ");if(h.unevaluatedProperties===!1){const U=Nr(`${new RegExp($o(h))};`),j=`Object.getOwnPropertyNames(${y}).every(key => ${U}.test(key))`;yield`(${q} && ${j})`}else if(Se(h.unevaluatedProperties)){const U=Nr(`${new RegExp($o(h))};`),j=`Object.getOwnPropertyNames(${y}).every(key => ${U}.test(key) || ${Xt(h.unevaluatedProperties,B,`${y}[key]`)})`;yield`(${q} && ${j})`}else yield`(${q})`}function*E(h,B,y){yield`(typeof value === 'object' && Symbol.iterator in ${y})`}function*D(h,B,y){typeof h.const=="number"||typeof h.const=="boolean"?yield`(${y} === ${h.const})`:yield`(${y} === '${Ic.Escape(h.const)}')`}function*S(h,B,y){yield"false"}function*A(h,B,y){yield`(!${Xt(h.not,B,y)})`}function*T(h,B,y){yield`(${y} === null)`}function*_(h,B,y){yield hi.IsNumberLike(y),H(h.exclusiveMaximum)&&(yield`${y} < ${h.exclusiveMaximum}`),H(h.exclusiveMinimum)&&(yield`${y} > ${h.exclusiveMinimum}`),H(h.maximum)&&(yield`${y} <= ${h.maximum}`),H(h.minimum)&&(yield`${y} >= ${h.minimum}`),H(h.multipleOf)&&(yield`(${y} % ${h.multipleOf}) === 0`)}function*z(h,B,y){yield hi.IsObjectLike(y),H(h.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${h.minProperties}`),H(h.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${h.maxProperties}`);const q=Object.getOwnPropertyNames(h.properties);for(const U of q){const j=ca.Encode(y,U),we=h.properties[U];if(h.required&&h.required.includes(U))yield*wn(we,B,j),(Vo(we)||t(we))&&(yield`('${U}' in ${y})`);else{const Ot=Xt(we,B,j);yield hi.IsExactOptionalProperty(y,U,Ot)}}if(h.additionalProperties===!1)if(h.required&&h.required.length===q.length)yield`Object.getOwnPropertyNames(${y}).length === ${q.length}`;else{const U=`[${q.map(j=>`'${j}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${y}).every(key => ${U}.includes(key))`}if(typeof h.additionalProperties=="object"){const U=Xt(h.additionalProperties,B,`${y}[key]`),j=`[${q.map(we=>`'${we}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${y}).every(key => ${j}.includes(key) || ${U}))`}}function*ee(h,B,y){yield`${y} instanceof Promise`}function*at(h,B,y){yield hi.IsRecordLike(y),H(h.minProperties)&&(yield`Object.getOwnPropertyNames(${y}).length >= ${h.minProperties}`),H(h.maxProperties)&&(yield`Object.getOwnPropertyNames(${y}).length <= ${h.maxProperties}`);const[q,U]=Object.entries(h.patternProperties)[0],j=Nr(`${new RegExp(q)}`),we=Xt(U,B,"value"),Ot=Se(h.additionalProperties)?Xt(h.additionalProperties,B,y):h.additionalProperties===!1?"false":"true",ir=`(${j}.test(key) ? ${we} : ${Ot})`;yield`(Object.entries(${y}).every(([key, value]) => ${ir}))`}function*Ht(h,B,y){const q=Sn(h,B);if(_e.functions.has(h.$ref))return yield`${Ri(h.$ref)}(${y})`;yield*wn(q,B,y)}function*yt(h,B,y){const q=Nr(`${new RegExp(h.source,h.flags)};`);yield`(typeof ${y} === 'string')`,H(h.maxLength)&&(yield`${y}.length <= ${h.maxLength}`),H(h.minLength)&&(yield`${y}.length >= ${h.minLength}`),yield`${q}.test(${y})`}function*At(h,B,y){yield`(typeof ${y} === 'string')`,H(h.maxLength)&&(yield`${y}.length <= ${h.maxLength}`),H(h.minLength)&&(yield`${y}.length >= ${h.minLength}`),h.pattern!==void 0&&(yield`${Nr(`${new RegExp(h.pattern)};`)}.test(${y})`),h.format!==void 0&&(yield`format('${h.format}', ${y})`)}function*yn(h,B,y){yield`(typeof ${y} === 'symbol')`}function*In(h,B,y){yield`(typeof ${y} === 'string')`,yield`${Nr(`${new RegExp(h.pattern)};`)}.test(${y})`}function*Bi(h,B,y){yield`${Ri(h.$ref)}(${y})`}function*rl(h,B,y){if(yield`Array.isArray(${y})`,h.items===void 0)return yield`${y}.length === 0`;yield`(${y}.length === ${h.maxItems})`;for(let q=0;q<h.items.length;q++)yield`${Xt(h.items[q],B,`${y}[${q}]`)}`}function*Wo(h,B,y){yield`${y} === undefined`}function*uu(h,B,y){yield`(${h.anyOf.map(U=>Xt(U,B,y)).join(" || ")})`}function*Tn(h,B,y){yield`${y} instanceof Uint8Array`,H(h.maxByteLength)&&(yield`(${y}.length <= ${h.maxByteLength})`),H(h.minByteLength)&&(yield`(${y}.length >= ${h.minByteLength})`)}function*au(h,B,y){yield"true"}function*il(h,B,y){yield hi.IsVoidLike(y)}function*lu(h,B,y){const q=_e.instances.size;_e.instances.set(q,h),yield`kind('${h[I]}', ${q}, ${y})`}function*wn(h,B,y,q=!0){const U=un(h.$id)?[...B,h]:B,j=h;if(q&&un(h.$id)){const we=Ri(h.$id);if(_e.functions.has(we))return yield`${we}(${y})`;{_e.functions.set(we,"<deferred>");const Ot=oi(we,h,B,"value",!1);return _e.functions.set(we,Ot),yield`${we}(${y})`}}switch(j[I]){case"Any":return yield*n();case"Argument":return yield*r();case"Array":return yield*i(j,U,y);case"AsyncIterator":return yield*o(j,U,y);case"BigInt":return yield*s(j,U,y);case"Boolean":return yield*u(j,U,y);case"Constructor":return yield*a(j,U,y);case"Date":return yield*l(j,U,y);case"Function":return yield*c(j,U,y);case"Import":return yield*f(j,U,y);case"Integer":return yield*p(j,U,y);case"Intersect":return yield*g(j,U,y);case"Iterator":return yield*E(j,U,y);case"Literal":return yield*D(j,U,y);case"Never":return yield*S();case"Not":return yield*A(j,U,y);case"Null":return yield*T(j,U,y);case"Number":return yield*_(j,U,y);case"Object":return yield*z(j,U,y);case"Promise":return yield*ee(j,U,y);case"Record":return yield*at(j,U,y);case"Ref":return yield*Ht(j,U,y);case"RegExp":return yield*yt(j,U,y);case"String":return yield*At(j,U,y);case"Symbol":return yield*yn(j,U,y);case"TemplateLiteral":return yield*In(j,U,y);case"This":return yield*Bi(j,U,y);case"Tuple":return yield*rl(j,U,y);case"Undefined":return yield*Wo(j,U,y);case"Union":return yield*uu(j,U,y);case"Uint8Array":return yield*Tn(j,U,y);case"Unknown":return yield*au();case"Void":return yield*il(j,U,y);default:if(!Ei(j[I]))throw new f6(h);return yield*lu(j,U,y)}}const _e={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function Xt(h,B,y,q=!0){return`(${[...wn(h,B,y,q)].join(" && ")})`}function Ri(h){return`check_${Nc.Encode(h)}`}function Nr(h){const B=`local_${_e.variables.size}`;return _e.variables.set(B,`const ${B} = ${h}`),B}function oi(h,B,y,q,U=!0){const[j,we]=[`
`,Jn=>"".padStart(Jn," ")],Ot=cu("value","any"),ir=Fd("boolean"),Mn=[...wn(B,y,q,U)].map(Jn=>`${we(4)}${Jn}`).join(` &&${j}`);return`function ${h}(${Ot})${ir} {${j}${we(2)}return (${j}${Mn}${j}${we(2)})
}`}function cu(h,B){const y=_e.language==="typescript"?`: ${B}`:"";return`${h}${y}`}function Fd(h){return _e.language==="typescript"?`: ${h}`:""}function bw(h,B,y){const q=oi("check",h,B,"value"),U=cu("value","any"),j=Fd("boolean"),we=[..._e.functions.values()],Ot=[..._e.variables.values()],ir=un(h.$id)?`return function check(${U})${j} {
  return ${Ri(h.$id)}(value)
}`:`return ${q}`;return[...Ot,...we,ir].join(`
`)}function kd(...h){const B={language:"javascript"},[y,q,U]=h.length===2&&dn(h[1])?[h[0],h[1],B]:h.length===2&&!dn(h[1])?[h[0],[],h[1]]:h.length===3?[h[0],h[1],h[2]]:h.length===1?[h[0],[],B]:[null,[],B];if(_e.language=U.language,_e.variables.clear(),_e.functions.clear(),_e.instances.clear(),!Se(y))throw new Kh(y);for(const j of q)if(!Se(j))throw new Kh(j);return bw(y,q)}e.Code=kd;function $w(h,B=[]){const y=kd(h,B,{language:"javascript"}),q=globalThis.Function("kind","format","hash",y),U=new Map(_e.instances);function j(Mn,Jn,fu){if(!Ei(Mn)||!U.has(Jn))return!1;const Dw=Vf(Mn),vw=U.get(Jn);return Dw(vw,fu)}function we(Mn,Jn){return Uf(Mn)?jf(Mn)(Jn):!1}function Ot(Mn){return fd(Mn)}const ir=q(j,we,Ot);return new c6(h,B,ir,y)}e.Compile=$w})(ms||(ms={}));const Tc={};function C1(e,t){e in Tc||(Tc[e]=t)}let Zh=!1;function d6(){Zh||(Zh=!0,L3(e=>(Tc[e.schema[I]]||w1)(e)))}const Mc=Symbol.for("object-shape-tester.shape-identifier");function Ue(e){if(d6(),dd(e))return e;const t=Pc(e),n=pi(t,!1),r=pi(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:ms.Compile(t),$_compiledSchemaNoExtraKeys:ms.Compile(n),$_compiledSchemaExtraKeys:ms.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[Mc]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function dd(e){return F.hasKey(e,Mc)&&!!e[Mc]}function md(e){return F.hasKey(e,I)}function pi(e,t){const n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(r=>pi(r,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(r=>pi(r,t))),md(e.items)?n.items=pi(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(r=>pi(r,t))),F.isObject(e.properties)){const r={};Object.entries(e.properties).forEach(([i,o])=>{r[i]=pi(o,t)}),n.properties=r}return n.additionalProperties=t,n}function Pc(e){if(md(e))return e;if(dd(e))return e.$_schema;if(F.isFunction(e))return Fe.Function([],Fe.Any(),{default:e});if(F.isObject(e)){const t={},n={};return Object.entries(e).forEach(([r,i])=>{const o=Pc(i);n[r]=o,t[r]=o.default}),Fe.Object(n,{default:t})}else{if(F.isArray(e))return Fe.Array(Fe.Union(e.map(t=>Pc(t))),{default:[]});if(F.isPrimitive(e)){if(F.isString(e))return Fe.String({default:e});if(F.isNumber(e))return Fe.Number({default:e});if(F.isBoolean(e))return Fe.Boolean({default:e});if(F.isSymbol(e))return Fe.Symbol({default:e});if(F.isNull(e))return Fe.Null({default:null});if(F.isUndefined(e))return Fe.Undefined({default:void 0});if(F.isBigInt(e))return Fe.BigInt({default:e});er.tsType(e).equals(),er.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${m(e)}`)}}function Oc(e,t){const n=Rn(e);return Ue(Fe.Union(n.map(r=>Fe.Literal(r)),{default:n[0]}))}function m6(e){return F.isSymbol(e)?h6(e):Ue(Fe.Const(e,{default:e}))}const ku="ExactSymbol";function h6(e){return Ei(ku)||Ly(ku,(t,n)=>n===t.symbol),C1(ku,({schema:t})=>`Expected symbol ${t.symbol?.description?uD({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ue(Fe.Unsafe({[I]:ku,symbol:e,default:e}))}function lt(e,t={}){Le.ExactOptionalPropertyTypes=!0;const n=Ue(e).$_schema,r=t.alsoUndefined?Fe.Union([Fe.Undefined(),n]):n;return Ue(Fe.Optional(r))}class p6 extends TypeError{value;errors;failureMessage;name="ShapeMismatchError";constructor(t,n,r){const i=n.map(s=>x1(s)).join(`
`),o=pa(r,`Shape mismatch:
    Got ${m(t)}.

${bg(i,1)}`);super(o),this.value=t,this.errors=n,this.failureMessage=r}}function g6(e){return e.errors.flatMap(t=>Array.from(t))}function x1(e,t=0){const n=g6(e).map(i=>x1(i,t+1)),r=[e.path,e.message].filter(F.isTruthy).join(": ")+(n.length?":":"");return[bg(r,t),...n].join(`
`)}function wi(e,t,n={}){return A1(t,n).Check(e)}function y6(e,t,n={},r){if(wi(e,t,n))return;const i=Array.from(A1(t,n).Errors(e));if(i.length)throw new p6(e,i,r)}function A1(e,t){return e=w6(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function w6(e){return Ue(e)}function kt(...e){let t;const n=e.map((r,i)=>{const o=Ue(r);return i||(t=o.default),o.$_schema});return Ue(Fe.Union(n,{default:t}))}const Vu="recordShape";function hd({keys:e,values:t,partial:n,additionalProperties:r}){b6();const i=F1(e),o=Ue(t);return Fe.Unsafe({[I]:Vu,keysShape:i,valuesShape:o,isPartial:!!n,additionalProperties:!!r,default:$6({isPartial:!!n,keysShape:i,valuesShape:o})})}function b6(){Ei(Vu)||Ly(Vu,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const n=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:wi(i,e.keysShape),u=wi(o,e.valuesShape);return s&&u}),r=e.isPartial?!0:!Gh(e.keysShape,t).length;return n&&r}),C1(Vu,e=>{const n=e.schema,r=e.value;if(typeof r!="object"||!r||Array.isArray(r))return"Expected an object";const i=No(Object.entries(r),([a])=>a,(a,[l,c])=>!wi(l,n.keysShape)||!wi(c,n.valuesShape)),o=Gh(n.keysShape,r),s=i.length?["Failure at keys",i.join(",")].join(": "):"",u=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,u].filter(F.isTruthy).join(`
`)})}function Gh(e,t){const n=fa(e).filter(r=>F.isPropertyKey(r));return n.length?n.filter(r=>!F.hasKey(t,r)):[]}function $6({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{const r=fa(e),i=t.default;return Object.fromEntries(r.map(o=>[o,i]))}}function F1(e){return dd(e)?e:md(e)?Ue(e):F.isObject(e)?Oc(e):F.isArray(e)&&F.isLengthAtLeast(e,1)?kt(...e.map(t=>m6(t))):F.isPropertyKey(e)?Ue(e):Ue(Fe.Undefined())}function fa(e){const t=e.$_schema,n=t[I].toLowerCase();return["const","literal"].includes(n)?[t.const]:n==="union"?ag(t.anyOf.flatMap(r=>fa(Ue(r)))):["undefined","number","string","symbol"].includes(n)?[]:fa(F1(e.default))}function D6(e){return Ue(Fe.Unknown({default:e}))}const v6=Ue({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:D6()});function jl(e){return wi(e,v6,{allowExtraKeys:!0})}class k1 extends Wv{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||zv}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:E6}=BD,Yh=()=>document.createComment(""),Qo=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=r.insertBefore(Yh(),i),s=r.insertBefore(Yh(),i);n=new E6(o,s,e,e.options)}else{const o=n._$AB.nextSibling,s=n._$AM,u=s!==e;if(u){let a;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(a=e._$AU)!==s._$AU&&n._$AP(a)}if(o!==i||u){let a=n._$AA;for(;a!==o;){const l=a.nextSibling;r.insertBefore(a,i),a=l}}}return n},di=(e,t,n=e)=>(e._$AI(t,n),e),C6={},x6=(e,t=C6)=>e._$AH=t,A6=e=>e._$AH,_l=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pd={ATTRIBUTE:1,CHILD:2,ELEMENT:6},kr=e=>(...t)=>({_$litDirective$:e,values:t});class Sr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F6={attribute:!0,type:String,converter:Qu,reflect:!1,hasChanged:hf},k6=(e=F6,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(u){const a=t.get.call(this);t.set.call(this,u),this.requestUpdate(s,a,e)},init(u){return u!==void 0&&this.C(s,void 0,e,u),u}}}if(r==="setter"){const{name:s}=n;return function(u){const a=this[s];t.call(this,u),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+r)};function S6(e){return(t,n)=>typeof n=="object"?k6(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=kr(class extends Sr{constructor(e){if(super(e),e.type!==pd.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ln}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=e=>e??fe;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N6(e,t,n){return e?t(e):n?.(e)}class I6 extends fs{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function T6(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(u=>!!u.index).length;if(r||i)return[...e];const o=e.map(u=>[u]);return o.length||(o[0]=[]),n.forEach(u=>{u>=0&&u<e.length&&(o[u]=[])}),t.forEach(u=>{const a=o[u.index];a&&a.splice(0,0,...u.values)}),o.flat()}function Bc(e){return F.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function gd(e){return F.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function S1(e){return No(e,t=>{if(Bc(t))return t.definition;if(gd(t))return t.tagInterpolationKey||t},F.isTruthy)}const N1=new WeakMap;function M6(e,t){const n=S1(t);return I1(N1,[e,...n]).value?.template}function P6(e,t,n){const r=S1(t);return M1(N1,[e,...r],n)}function I1(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=T1(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?I1(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function T1(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function M1(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=T1(e,t,r);if(!o)return{result:!1,reason:s};const u=i??{nested:void 0,template:void 0};if(i||e.set(o,u),r===t.length-1)return u.template=n,{result:!0,reason:"set value at end of keys array"};const a=u.nested??new WeakMap;return u.nested||(u.nested=a),M1(a,t,n,r+1)}function P1(e,t,n){const r=M6(e,t),i=r??n();if(!r){const u=P6(e,t,i);if(!u.result)throw new Error(`Failed to set template transform: ${u.reason}`)}const o=i.valuesTransform(t),s=T6(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function O1(e,t,n,r){const i=[],o=[],s=[],u=[];return e.forEach((l,c)=>{const f=i.length-1,p=i[f],g=c-1,E=t[g];r&&r(l);let D,S=[];if(typeof p=="string"&&(D=n(p,l,E),D)){i[f]=[p,D.replacement].join(""),s.push(g);const T=D.getExtraValues;S=T?T(E):[],S.length&&T?(i[f]+=" ",S.forEach((_,z)=>{z&&i.push(" ")}),u.push(_=>{const z=_[g],ee=T(z);return{index:g,values:ee}}),i.push(l)):i[f]+=l}D||i.push(l);const A=e.raw[c];D?(o[f]=[o[f],D.replacement,A].join(""),S.length&&S.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const c=u.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:c}}}}function O6(...[e,t,n]){if(gd(n))return{replacement:n.tagName,getExtraValues:void 0}}function B6(e,t){return O1(e,t,O6)}function C(e,...t){const n=P1(e,t,()=>B6(e,t));return Uu(n.strings,...n.values)}const R6={allowPolymorphicState:!1,errorHandler:void 0};function B1(e,t){const n=e.instanceState;ke(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ke(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)})}function Jh(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class L6 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function yd(){return e=>class extends L6{static type=e;_type=e;constructor(t){super(e,t)}}}function vt(){return yd()}function U6(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=yd()([e,r].join("-"));return n[r]=i,n},{}):{}}function j6(e){return e?an(e,t=>t):{}}function R1(e,t){t in e||S6()(e,t)}function _6(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Hh(e,t){const n=e;function r(s){t?_6(s,e,e.tagName):R1(e,s)}function i(s,u){return r(u),n[u]}return new Proxy({},{get:i,set(s,u,a){r(u);const l=n[u];function c(p){s[u]=p,n[u]=p}const f=e.observablePropertyListenerMap[u];if(l!==a&&jl(l)&&f&&l.removeListener(f),jl(a))if(f)a.listen(!1,f);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[u]=p,a.listen(!1,p)}else jl(l)&&(e.observablePropertyListenerMap[u]=void 0);return c(a),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,u){if(u in s)return{get value(){return i(s,u)},configurable:!0,enumerable:!0}},has(s,u){return Reflect.has(s,u)}})}function V6({hostClassNames:e,cssVars:t}){return{hostClasses:an(e,(n,r)=>({name:Ke(r),selector:Ke(`:host(.${r})`)})),cssVars:t}}function q6({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&ke(t).forEach(o=>{const s=t[o],u=n[o];typeof s=="function"&&(s({state:r,inputs:i})?e.classList.add(u):e.classList.remove(u))})}function W6({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(s){ke(s).forEach(u=>{const a=s[u];e.instanceState[u]=a})}return{cssVars:n,slotNames:r,dispatch:s=>e.dispatchEvent(s),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function z6(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function wd(...e){return er.isEmpty(e),t=>{const n=t;if(!F.isObject(n))throw new TypeError("Cannot define element with non-object init: ${init}");return K6({...n,options:{...n.options}})}}function K6(e){if(!F.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!F.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...R6,...e.options},n=U6(e.tagName,e.events),r=j6(e.hostClasses);e.hostClasses&&Jh(e.tagName,e.hostClasses),e.cssVars&&Jh(e.tagName,e.cssVars);const i=e.cssVars?Jr(e.cssVars):{},o=z6(e.slotNames),s=typeof e.styles=="function"?e.styles(V6({hostClassNames:r,cssVars:i})):e.styles||C``,u=e.render;function a(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends I6{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return W6({element:this,eventsMap:n,cssVars:i,slotNamesMap:o})}static assign=a;static events=n;static render=u;static hostClasses=r;static cssVars=i;static init=e;static slotNames=o;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const p=e.state(c);if(p instanceof Promise)throw new TypeError("init cannot be asynchronous");ke(p).forEach(g=>{R1(this,g),this.instanceState[g]=p[g]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=u(c);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return q6({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},f}catch(c){const f=Kc(c,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,t.errorHandler?.(f),Kt(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{F.hasKey(c,"destroy")&&F.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(c){B1(this,c)}observablePropertyListenerMap={};instanceInputs=Hh(this,!1);instanceState=Hh(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:iD(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,l)),l}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xh=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Z6=kr(class extends Sr{constructor(e){if(super(e),e.type!==pd.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const u of e)i[s]=r?r(u,s):s,o[s]=n(u,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=A6(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const u=this.ut??=[],a=[];let l,c,f=0,p=i.length-1,g=0,E=o.length-1;for(;f<=p&&g<=E;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(u[f]===s[g])a[g]=di(i[f],o[g]),f++,g++;else if(u[p]===s[E])a[E]=di(i[p],o[E]),p--,E--;else if(u[f]===s[E])a[E]=di(i[f],o[E]),Qo(e,a[E+1],i[f]),f++,E--;else if(u[p]===s[g])a[g]=di(i[p],o[g]),Qo(e,i[f],i[p]),p--,g++;else if(l===void 0&&(l=Xh(s,g,E),c=Xh(u,f,p)),l.has(u[f]))if(l.has(u[p])){const D=c.get(s[g]),S=D!==void 0?i[D]:null;if(S===null){const A=Qo(e,i[f]);di(A,o[g]),a[g]=A}else a[g]=di(S,o[g]),Qo(e,i[f],S),i[D]=null;g++}else _l(i[p]),p--;else _l(i[f]),f++;for(;g<=E;){const D=Qo(e,a[E+1]);di(D,o[g]),a[g++]=D}for(;f<=p;){const D=i[f++];D!==null&&_l(D)}return this.ut=s,x6(e,a),ln}}),G6=Z6;function ou(e,t){return Ps(e,t),e.element}function Y6(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ps(e,t){const n=Y6(e),r=n?`: in ${n}`:"";if(e.type!==pd.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function J6(e,t){return kr(class extends Sr{element;constructor(n){super(n),this.element=Ds.instanceOf(ou(n,e),HTMLElement)}render(...n){return t({params:n,directive:this,element:this.element}),ln}})}const to=J6("attributes",({element:e,params:[t],directive:n})=>{if(!t)return;const i=qs(n,"allAttributesApplied",()=>new Set);ke(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===fe?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function H6(e){const t=kr(class extends Sr{element;constructor(n){super(n),this.element=ou(n,e)}render(n){return this.element.setAttribute(e,n),ln}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function Q(e,t){return X6(e,t)}const X6=kr(class extends Sr{element;lastListenerMetaData;constructor(e){super(e),this.element=ou(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ln}});function Q6(e){return Q("keydown",async t=>{const n=t.code.toLowerCase();(n.includes("enter")||n.includes("return")||n==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const Qh="onDomCreated",e0=kr(class extends Sr{element;constructor(e){super(e),Ps(e,Qh)}update(e,[t]){Ps(e,Qh);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),Vl="onResize",L1=kr(class extends Sr{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Ps(e,Vl)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${Vl} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Ps(e,Vl),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Vt(e,t,n){return N6(e,()=>t,()=>n)}const{attributeDirective:e8}=H6("data-test-id"),no=e8;function U1(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return(...r)=>i=>(t(i),wd(...r)(n(i)))}function t8(e,t){return n8(void 0,e)}const n8=kr(class extends Sr{element;constructor(e){super(e),this.element=ou(e,"assign")}render(e,t){return B1(this.element,t),ln}}),r8={};function i8(e,t){return t.map((n,r)=>{const i=e[r],o=e[r+1];if(i&&o){const{shouldHaveTagNameHere:s}=j1(i,o);if(s&&F.isString(n))return{tagName:n,tagInterpolationKey:qs(r8,n,()=>({tagName:n}))}}return n})}function j1(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function o8(...[e,t,n]){const r=Bc(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:o}=j1(e,t),s=gd(r);if(s&&o&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!o||!s?void 0:{replacement:r.tagName,getExtraValues(a){const l=Bc(a)?a.inputs:void 0;return[i&&l?t8(l):void 0].filter(F.isTruthy)}}}function s8(e){}function u8(e){return O1(e.strings,e.values,o8,s8)}function w(e,...t){const n=i8(e,t),r=SD(e,...n),i=P1(e,n,()=>u8(r));return{...r,strings:i.strings,values:i.values}}function Rc(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if(!t?.length&&!n?.length)return"";const r=[...n||[],""],o=(t??[""]).map((s,u)=>{const a=a8(s,r[u]);return`${s}${a}`});return $g(o.join(""))}function a8(e,t){return t._$litType$!=null||t._$litDirective$!=null?Rc(t):Array.isArray(t)?t.map(r=>Rc(r)).join(""):e.endsWith("=")?`"${t}"`:t}function _1(e){return an(e,(t,n)=>n instanceof ye?Ke(n.toString({format:"hex"})):_1(n))}const l8="dodgerblue";function Lc(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function ql({background:e,foreground:t}){return{background:e??new ye(Lc(t)),foreground:t??new ye(Lc(e))}}function c8(e){return e==="black"?"white":"black"}const f8={black:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")},white:{foregroundFaint1:new ye("#ccc"),foregroundFaint2:new ye("#eee")}},d8={black:{backgroundFaint1:new ye("#666"),backgroundFaint2:new ye("#444")},white:{backgroundFaint1:new ye("#ccc"),backgroundFaint2:new ye("#fafafa")}};function t0({themeColor:e=l8,themeStyle:t="light"}={}){const n=new ye(e),r=new ye(t==="dark"?"black":"white"),i=Lc(r),o=new ye(i),s={nav:{hover:ql({background:n.clone().set({"hsl.l":93})}),active:ql({background:n.clone().set({"hsl.l":90})}),selected:ql({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...d8[c8(i)],foreground:o,...f8[i]}};return _1(s)}var wr=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(wr||{});async function Uc(e=1){const t=new F0;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function m8(e,t){return{element:e,children:V1(e)}}function V1(e,t,n){return h8(e).map(r=>{const i=V1(r);return{element:r,children:i}})}function h8(e){return[...e.children,...e.shadowRoot?.children??[]]}function Wl(e){return e.matches(":focus")}function bd(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:bd(t)}function q1(e,t){if(t(e))return e;const n=bd(e);if(n)return q1(n,t)}async function p8(e){return g8(e,1)}async function g8(e,t){return new Promise(n=>{new IntersectionObserver((i,o)=>{er.isLengthAtLeast(i,1),o.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function ss(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,o=r?.constructor.name,s=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return r}function y8(e){const t=bd(e);return t&&q1(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function w8({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,u=0;s<r;s++){const a=o.codePointAt(s);for(;u<n;)if(i.codePointAt(u++)===a)continue e;return!1}return!0}const b8=lg(32);function qu(e){return e.join(b8)}function W1(e){if(!e.length)return[];const t=qu(e),n=W1(e.slice(0,-1));return[t,...n]}const $8=["error","errors"];function D8(e){return $8.includes(e)}function v8({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(s=>(r(s),qu(s.fullUrlBreadcrumbs))).forEach(s=>n[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&D8(t),s=qu(i.fullUrlBreadcrumbs);if(w8({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(a=>F.isString(a)?a:Rc(a))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||n[s]){const a=W1(i.fullUrlBreadcrumbs);r(i),a.forEach(l=>n[l]=!0)}else n[s]=!1}),e.filter(i=>{const o=qu(i.fullUrlBreadcrumbs),s=n[o];if(!F.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class $d extends Error{name="SpaRouterError"}class n0 extends $d{name="GlobalUrlEventsConsolidationError"}class E8 extends $d{name="SanitizationDepthMaxed"}Ue({paths:[""],search:lt(kt(void 0,hd({keys:"",values:[""]}))),hash:lt(kt(void 0,""))});const C8=Ue({basePath:lt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:lt(1,{alsoUndefined:!0}),disableWarnings:lt(!1,{alsoUndefined:!0}),isPaused:lt(!1,{alsoUndefined:!0})}),zl="://";function Dd(...e){const t=e.join("/"),[n,r=""]=t.includes(zl)?t.split(zl):["",t];let i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").reduce((s,u,a,l)=>{if(i)return s;const c=l[a+1];let f=u;const p=c?.startsWith("?"),g=!u.includes("?")&&p,E=c==="?";if(p||g){i=!0;let D=!1;const S=l.slice(a+2).reduce((A,T)=>(T.includes("#")&&(D=!0),D?A.concat(T):[A,T].join("&")),"");f=[u,c,E?Qi({value:S,prefix:"&"}):S].join("")}return s.concat(f)},[]);return[n,n?zl:"",o.join("/")].join("")}var vo;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(vo||(vo={}));var Eo;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Eo||(Eo={}));const x8=Ue({encoding:lt(kt(void 0,Oc(vo))),searchParamStrategy:lt(kt(void 0,Oc(Eo)))});function Su(e,t){return e.map(n=>{if(n!=null)return ro(String(n),t)}).filter(n=>n!=null)}function ro(e,t){return t?.encoding===vo.Decode?decodeURIComponent(e):t?.encoding===vo.Encode?encodeURIComponent(e):e}const A8=Ue(hd({keys:"",values:[""]}));function F8(e,t,n){const r=n?.searchParamStrategy===Eo.Clear?{}:an(e,(s,u)=>I$(u)),i=an(t,(s,u)=>{if(n?.searchParamStrategy===Eo.Append){const a=r[s],l=F.isArray(a)?a:[a];if(u){const c=F.isArray(u)?u:[u];return Su([...l,...c],n)}else return Su(l,n)}else return F.isArray(u)?Su(u,n):u?Su([u],n):void 0});return sf({...r,...i},(s,u)=>!!u)}function z1(e,t){return F.isString(e)&&!e.includes("?")?{}:(F.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...u]=X$(o,"=");return[s,u.length?u.join("="):void 0]}).reduce((o,[s,u])=>{const a=K1({options:t,key:s,value:u}),l=qs(o,a.key,()=>[]);return u!=null&&l.push(a.value),o},{})}function k8(e){if(e!=null)return F.isArray(e)?[...e]:e===""?[]:[e]}function S8(e,t){const n=No(Object.entries(e),([r,i])=>{const o=k8(i);return o?.length?o.map(s=>{const u=K1({options:t,key:r,value:s});return[u.key,u.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?zt({value:n.join("&"),prefix:"?"}):""}function K1({options:e,key:t,value:n}){return{key:ro(t,e),value:ro(String(n),e)}}function Z1({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:o,search:s,username:u}){return[o?o+"://":"",u?u+":":"",n?n+"@":"",Qa({hostname:t,port:i}),vd({hash:e,pathname:r,search:s})].join("")}function G1({pathname:e}){const t=Qi({value:e,prefix:"/"});return t?t.split("/"):[]}function vd({hash:e,pathname:t,search:n}){return[zt({value:t,prefix:"/"}),n?zt({value:n,prefix:"?"}):"",e?zt({value:e,prefix:"#"}):""].join("")}function Qa({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Y1({hostname:e,port:t,protocol:n}){return[n,Qa({hostname:e,port:t})].filter(F.isTruthy).join("://")}function io(e,t){const n=F.isString(e)?Qi({value:e,prefix:"."}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?zt({value:ro(r,t),prefix:"#"}):"",o=n.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),u=s?zt({value:ro(s,t),prefix:"?"}):"",a=o.replace(/\?[^?]*$/,""),l=a.includes("://")?a.replace(/:\/\/.*$/,""):"",c=a.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),p=c.replace(/^[^@]*@/,""),g=f!==p,[E,...D]=g?f.split(":").reverse():[],S=D.toReversed().join("").replace(/[/:]/g,"")||"",A=E?.replace(/[/:]/g,"")||"",T=H$(p.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),_=T[0]?.endsWith("]")?"":T[1]===":"&&T[0]||"",ee=p.replace(new RegExp(`:${_}($|/)`),"$1").replace(/\/.*/,""),at=p.replace(/^[^/]*(\/|$)/,"$1"),Ht=ro(at.replace(/^[^/]*(?:\/|$)/,"/"),t),yt=Qa({hostname:ee,port:_}),At=Y1({hostname:ee,port:_,protocol:l}),yn=Z1({hash:i,hostname:ee,password:A,pathname:Ht,port:_,protocol:l,search:u,username:S}),In=z1(u),Bi=G1({pathname:Ht});return{fullPath:vd({hash:i,pathname:Ht,search:u}),hash:i,host:yt,hostname:ee,href:yn,origin:At,password:A,pathname:Ht,paths:Bi,port:_,protocol:l,search:u,searchParams:In,username:S}}Ue({hash:lt(kt(void 0,"")),search:lt(kt(void 0,"",hd({keys:"",values:kt(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:lt(kt(void 0,"")),pathname:lt(kt(void 0,"")),paths:lt(kt(void 0,[""])),protocol:lt(kt(void 0,"")),username:lt(kt(void 0,"")),password:lt(kt(void 0,"")),port:lt(kt(void 0,"",-1))});function N8(e,t,n){const r=!!n,i=t==null||wi(t,x8,{allowExtraKeys:!1}),o=i?io(""):F.instanceOf(e,URL)||F.isString(e)?io(e):e,s=i?e:t,u=F.isString(s)&&s.startsWith("."),a=F.isString(s)||F.instanceOf(s,URL)?sf(io(s),(D,S)=>F.isTruthy(S)):s,l=r?n:i?t:void 0,c=an(o,(D,S)=>{if(!F.hasKey(a,D))return S;const A=a[D];return F.isNumber(A)?String(A):F.isString(A)?D==="hash"&&A?zt({value:A,prefix:"#"}):D==="pathname"?zt({value:A,prefix:"/"}):A:S});F.hasKey(a,"paths")&&a.paths&&(c.pathname=Dd(u?o.pathname:"",...a.paths));const f=F.isString(a.search)?z1(zt({value:a.search,prefix:"?"})):M$(a.search||{}),p=F8(c.searchParams,f,{...l,encoding:vo.None}),g=S8(p,l);return{...c,searchParams:p,search:g,paths:G1(c),fullPath:vd(c),host:Qa(c),origin:Y1(c),href:Z1({...c,search:g})}}const I8=Ue({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:A8,hash:"",fullPath:"/",href:"/"});({...I8.default});const T8=0;function J1(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==T8)}const el="locationchange",pr=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const r0=pr?.pushState;function i0(...e){if(!r0)return;const t=r0.apply(pr,e);return globalThis.dispatchEvent(new Event(el)),t}const o0=pr?.replaceState;function s0(...e){if(!o0)return;const t=o0.apply(pr,e);return globalThis.dispatchEvent(new Event(el)),t}function M8(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!pr)){{if(pr.pushState===i0)throw new n0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(pr.replaceState===s0)throw new n0("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,pr.pushState=i0,pr.replaceState=s0,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(el))})}}function Nu(e,t){const n=io(e),r=Qi({value:Qi({value:n.pathname,prefix:zt({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],o=Object.keys(n.searchParams).length?n.searchParams:void 0,s=n.hash?Qi({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class Ed{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){y6(t,C8),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new k1({defaultValue:n,equalityCheck:()=>!1}),M8(),this.removeGlobalListener=vg(globalThis,el,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new E8("Looping route sanitization detected; aborting window URL change listener.");const r=Nu(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);F.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Dd(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Nu(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n={...Nu(globalThis.location.href,this.params.basePath),...t},r=this.sanitizeRoute(n),o=this.routeIncludesBasePath(Nu(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(r)&&this.params.basePath?{...r,paths:[this.params.basePath,...r.paths]}:r;return N8(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?zt({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Eo.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=io(r);return this.params.isPaused||!n.force&&F.jsonEquals(io(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return J1(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new $d(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function P8(e){return new Ed({basePath:e,sanitizeRoute(t){return{paths:O8(t.paths),hash:void 0,search:void 0}}})}function O8(e){const t=e[0];if(F.isEnumValue(t,Ln)){if(t===Ln.Book)return[Ln.Book,...e.slice(1)];if(t===Ln.Search)return e[1]?[t,e[1]]:[Ln.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return lo.paths}const da=yd()("element-book-change-route"),u0="vira-",Pt=U1({assertInputs:e=>{if(!e.tagName.startsWith(u0))throw new Error(`Tag name should start with '${u0}' but got '${e.tagName}'`)}});function B8(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given: ${sD(n)}`)}function R8(e,t=[],n=!1){return n?t.includes(e.id)?t.filter(r=>r!==e.id):[...t,e.id]:[e.id]}function a0({open:e,callback:t,popUpManager:n,host:r}){if(e){const i=n.showPopUp(r);t?.(i)}else n.removePopUp(),t?.(void 0)}const k=Jr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),L8=ye;function U8(e){try{if(!e)throw new Error("invalid empty color");return new L8(e)}catch{throw new Error(`Invalid color: ${m(e)}`)}}function ve({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function l0(e,t){const n=ke(t).map(r=>{const i=t[r],o=U8(i);return`${k[r].name}: ${o.toString()};`}).join(" ");return ve({name:e.name,svgTemplate:w`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Cd=ve({name:"Check24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Qn=Jr({"vira-form-input-radius":"8px"}),su=C`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Dr=Jr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Co=Jr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":C`calc(${Qn["vira-form-input-radius"].value} + 4px)`});function tl({elementBorderSize:e,outlineGap:t=2,outlineWidth:n=2,noNesting:r}){const i=Ke(mg(n+t+e)),o=C`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${n}px solid ${Co["vira-focus-outline-color"].value};
        border-radius: ${Co["vira-focus-outline-border-radius"].value};
        z-index: 100;
    `;return r?o:C`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const qt=Jr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black"}),j8=C`
    padding: 0;
    margin: 0;
`,gr=C`
    ${j8};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,c0=C`#e2e2e2`,f0={menuShadow:C`
        filter: drop-shadow(0px 5px 5px ${c0});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:C`
        filter: drop-shadow(0px -5px 5px ${c0});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},xo=C`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,V=Pt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),nn=Pt()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>!e.hideCheckIcon&&e.selected},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            ${xo};
            box-sizing: border-box;
            max-width: 100%;
            overflow: hidden;
        }

        .item {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding: 8px;
            padding-right: 24px;
            padding-left: 0;
            text-align: left;
            box-sizing: border-box;
        }

        ${e["vira-menu-item-selected"].selector} ${V} {
            opacity: 1;
            visibility: visible;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${V} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
            visibility: hidden;
        }
    `,render({inputs:e}){return w`
            <div class="item">
                <${V.assign({icon:Cd})}></${V}>
                <slot>${e.label}</slot>
            </div>
        `}});function _8(e,t){return e>t}function V8(e,t){return e<t}function Os(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var Xn;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(Xn||(Xn={}));var ce;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(ce||(ce={}));function nl(e){const t={x:-1,y:-1};let n;for(;t.y<e.length-1&&!n;){t.y++;const r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;const i=r[t.x];if(i)if(i.navEntry.navParams.group){const o=nl(i.children);o&&(n=o.node)}else i.navEntry.navParams.disabled||(n=i)}}if(n)return{node:n,coords:t}}function d0(e,t,n,r){if(!t){const a=nl(e.children);return a?(Os(a.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.node.element,coords:a.coords,direction:n,navAction:ce.Navigate}):{success:!1,reason:"no default element to focus",direction:n,navAction:ce.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=H1(t.position,n),u=r?!0:!o;return i&&u?(Os(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:n,navAction:ce.Navigate,coords:s}):i?u?{success:!1,reason:"no conditions matched",direction:n,navAction:ce.Navigate}:{success:!1,reason:"wrapping blocked",direction:n,navAction:ce.Navigate}:{success:!1,reason:"failed to find node to focus",direction:n,navAction:ce.Navigate}}function H1(e,t){let n=!1,r,i=1;const o=Date.now();for(;!n||!r;)if(r=q8(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Z$.warning("Failed to find next non-disabled node."),r;return r}function q8(e,t,n){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;er.isDefined(r,"missing parent");const i=Ds.isDefined(r.children[e.nodeCoords.y]),o=r.children.length>1&&(t===Xn.Down||t===Xn.Up),s=t===Xn.Down||t===Xn.Right?n:-1*n,u=s<0?_8:V8,a=o?Em(e.nodeCoords.y+s,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Ds.isDefined(r.children[a]),c=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Em(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=r.children[a]?.[c],p=o?u(a,e.nodeCoords.y):u(c,e.nodeCoords.x);return{nextNode:f,requiresWrapping:p,coords:{x:c,y:a}}}function W8(e,t,n){const r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:ce.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=H1(r,t),u=i?.navEntry.navParams.group?nl(i.children):{node:i,coords:s},a=n?!0:!o;return!u||!u.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:ce.Pibling}:a?(Os(u.node.element),{success:!0,defaulted:!1,newElement:u.node.element,wrapped:o,coords:u.coords,direction:t,navAction:ce.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:ce.Pibling}}var St;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(St||(St={}));const jn={name:"data-nav",js(e){return e?`[${jn.name}*="${e}"]`:`[${jn.name}]`},css({baseSelector:e="",navValue:t}={}){return C`
            ${Ke(e)}${Ke(jn.js(t))}
        `}},xd="navEntry";function X1(e){return xd in e}function Q1(e){if(X1(e)){const t=e[xd];return Ds.instanceOf(t,ew,"Invalid nav entry")}else return}function z8(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==St.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class ew{element;navParams;navTreeNode;navValue;eventListener=z8(this);constructor(t,n,r){this.element=t,this.navParams=r,this.attachListeners(),this.navController=n}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return er.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(jn.name,""),Wl(this.element)&&this.element.blur())}focus(t,n){const r=this.navValue,i=t===(r===St.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(St.Focused),Wl(this.element)||this.element.focus()):(this.removeNavValue(St.Focused),Wl(this.element)&&this.element.blur()),n||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,ce.Focus)}activate(t){const n=this.navValue,r=t===(n===St.Active);if(!(this.navParams.group||this.navController.locked||r))return this.focus(t,!0),t?this.setNavValue(St.Active):this.setNavValue(St.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,ce.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(jn.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(jn.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function tw(e,t){Object.entries(t).forEach(([n,r])=>{F.isBoolean(r)&&r?e.setAttribute(n,""):F.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const K8=kr(class extends Sr{element;lastKey;constructor(e){super(e),this.element=ou(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),ln}});function Z8(e){return"group"in e?St.Group:e.disabled?St.Disabled:""}function m0(e,t={}){return K8(m(t),n=>{e.needsUpdate=!0;const r=!t.group&&!t.disabled;er.instanceOf(n,HTMLElement);const i={[jn.name]:Z8(t),tabindex:r?0:-1};tw(n,i);const o=Q1(n)||new ew(n,e,t);X1(n)?(o.navParams=t,o.navController=e):n[xd]=o,r?n.style.setProperty("cursor","pointer"):n.style.removeProperty("cursor")})}function G8(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:ce.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:ce.Enter};const n=t.position.node.children[0]?.[0];return n?(Os(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:ce.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:ce.Enter}}function Y8(e,t){return nw([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function nw(e,t,n){for(let r=0;r<t.length;r++){const i=t[r];for(let o=0;o<i.length;o++){const s=i[o],u={ancestorChain:e,nodeCoords:{x:o,y:r},node:s};if(n(u))return u;const a=nw(e.concat(u),s.children,n);if(a)return a}}}function rw(e,t){const n=Y8(e,({node:r})=>!r.root&&r.navEntry===t);if(!n)throw new Error("Failed to find NavEntry in NavTree.");return n}function J8(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:ce.Exit};const n=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:ce.Exit};const{nodeCoords:r}=rw(e,n.navEntry);return Os(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:ce.Exit,coords:r}}class H8 extends Yr()("nav-exit"){}class iw extends Yr()("nav-activate"){}class X8 extends Yr()("nav-focus"){}class Q8 extends Yr()("nav-enter"){}class eS extends Yr()("nav-navigate"){}class tS extends Yr()("nav-navigate-pibling"){}function nS(e){return{root:!0,children:ow(e)?.children||[]}}function ow(e){const t=e.element;if(!(t instanceof HTMLElement))return;const n=Q1(t),r=rS(e);if((n?.navParams.group?!!r.length:!1)||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function rS(e){const t=[];function n(r){if(r.navEntry?.navParams.group&&!r.children.length)return;if(!r.navEntry){r.children.forEach(u=>u.forEach(a=>n(a)));return}const i=r.navEntry.navParams.x,o=r.navEntry.navParams.y||0,s=qs(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(r):s.withX.push({x:i,node:r})}return e.children.forEach(r=>{const i=ow(r);i&&n(i)}),t.sort((r,i)=>r.y-i.y).map(r=>(r.withX.sort((i,o)=>i.x-o.x),r.withX.forEach(({x:i,node:o})=>{r.noX.splice(i,0,o)}),r.noX)).filter(F.isTruthy)}class sw extends uf{rootElement;options;constructor(t,n={}){super(),this.rootElement=t,this.options=n}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){nl(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,n,r){if(this.locked)return{success:!1,direction:void 0,navAction:r,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:r,reason:"No nav entry to operate on."};const i=rw(this.getNavTree(),t);n?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:r,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===r&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:r,coords:i.nodeCoords};return n&&(r===ce.Activate?this.dispatch(new iw({detail:o})):r===ce.Focus&&this.dispatch(new X8({detail:o}))),o}navigate({direction:t,allowWrapping:n}){if(this.locked)return{success:!1,direction:t,navAction:ce.Navigate,reason:"NavController is locked."};const r=d0(this.getNavTree(),this.currentNavEntry,t,n);return this.dispatch(new eS({detail:r})),r}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:ce.Enter,reason:"NavController is locked."};const n=G8(this.getNavTree(),this.currentNavEntry);return!n.success&&t?this.activate():(this.dispatch(new Q8({detail:n})),n)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:ce.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:ce.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return er.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:ce.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===ce.Activate&&this.currentNavEntry.entry.focus(!0);const t=J8(this.getNavTree(),this.currentNavEntry);return this.dispatch(new H8({detail:t})),t}navigatePibling({allowWrapping:t,direction:n}){if(this.locked)return{success:!1,direction:n,navAction:ce.Pibling,reason:"NavController is locked."};const r=this.getNavTree(),o={...this.currentNavEntry?W8(this.currentNavEntry,n,t):d0(r,void 0,n,t),navAction:ce.Pibling};return this.dispatch(new tS({detail:o})),o}buildNavTree(){const t=m8(this.rootElement),n=nS(t);return this.cachedNavTree=n,n}}const Ji=Pt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>C`
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
    `,render({inputs:e}){function t(n){if(!e.route)return;const r=e.route.router.setRouteOnDirectNavigation(e.route.route,n);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:r?"instant":"smooth"})}if(e.link?.newTab)return w`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${to(e.attributePassthrough?.a)}
                    style=${tn(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return w`
                <a
                    href=${n}
                    rel="noopener noreferrer"
                    ${to(e.attributePassthrough?.a)}
                    style=${tn(e.stylePassthrough?.a)}
                    ${Q("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),h0={item:"menu-item"},hs=Pt()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new sw(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            overscroll-behavior: contain;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${qt["vira-form-background-color"].value};
            color: ${qt["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${gr};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:St.Focused})}, ${jn.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:St.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${qt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:St.Focused})},
                ${jn.css({baseSelector:".menu-item:not(.disabled)",navValue:St.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${qt["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${nn} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${su};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){B8(e.items);const n=e.items.map(r=>{const i=!!e.selected?.includes(r.id),o=F.isString(r.label)?w`
                      <${nn.assign({label:r.label,selected:i,hideCheckIcon:e.hideCheckIcons})}></${nn}>
                  `:r.label,s=r.disabled||!e.isMultiSelect&&i;return r.route?w`
                    <${Ji.assign({route:r.route})}
                        class="menu-item ${An({disabled:!!r.disabled,selected:i})}"
                        ${no(h0.item)}
                        title=${tn(r.titleText||void 0)}
                        role="option"
                        ${m0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </${Ji}>
                `:w`
                    <button
                        class="menu-item ${An({disabled:!!r.disabled,selected:i})}"
                        ${no(h0.item)}
                        title=${tn(r.titleText||void 0)}
                        role="option"
                        ${m0(t.internalNavController,{disabled:s})}
                    >
                        ${o}
                    </button>
                `});return w`
            ${n}
        `}});var Ad=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(Ad||{}),ma=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(ma||{});const ps=Pt()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${Qn["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${qt["vira-form-background-color"].value};
            border: 1px solid ${qt["vira-form-border-color"].value};
            color: ${qt["vira-form-foreground-color"].value};
            ${f0.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${f0.menuShadowReversed}
            border-radius: ${Qn["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${Qn["vira-form-input-radius"].value};
        }
    `,render(){return w`
            <slot></slot>
        `}}),Iu=globalThis.document;class iS extends k1{constructor(){if(super({defaultValue:!!Iu?.hidden,equalityCheck:F.strictEquals}),!Iu)return;globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n,Iu));const t=n=>this.updateVisibility(n,Iu);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,n){const r=sS.includes(t.type),i=oS.includes(t.type),o=r?!0:i?!1:n.hasFocus()||!n.hidden;this.setValue(o)}}const oS=["blur","focusout","pagehide"],sS=["focus","focusin","pageshow"],uS=new iS;function aS(e,t){return uS.listen(e,t)}const p0={top:0,left:0,right:0,bottom:0};class uw extends Dg("hide-pop-up"){}class aw extends Yr()("nav-select"){}class lS{constructor(t,n){this.navController=t,this.options={...this.options,...n}}listenTarget=new uf;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(t){let n=!1;const r=new ResizeObserver(()=>{n?this.removePopUp():n=!0});r.observe(t),this.cleanupCallbacks=[()=>{r.disconnect()},aS(!1,i=>{i||this.removePopUp()}),this.navController.listen(iw,i=>{i.detail.success&&(this.listenTarget.dispatch(new aw({detail:i.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),i.stopImmediatePropagation(),i.preventDefault())}),Am("mousedown",i=>{this.lastRootElement&&i.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Am("keydown",i=>{const o=i.code;o==="Escape"?this.removePopUp():this.options.supportNavigation&&(o==="ArrowDown"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Xn.Down,allowWrapping:!1})):o==="ArrowUp"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Xn.Up,allowWrapping:!1})):o==="ArrowLeft"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Xn.Left,allowWrapping:!1})):o==="ArrowRight"?(i.stopImmediatePropagation(),i.preventDefault(),this.navController.navigate({direction:Xn.Right,allowWrapping:!1})):(o==="Enter"||o==="Return"||o==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(i.stopImmediatePropagation(),i.preventDefault()))})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new uw)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=y8(t);er.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),u=i.offsetWidth-i.clientWidth,a=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-u,bottom:s.bottom-a},c=an(p0,g=>o[g]),f=an(p0,g=>{const E=l[g],D=c[g];return Math.abs(E-D)}),p=f.top>f.bottom+r.verticalDiffThreshold&&f.bottom<r.minDownSpace;return this.attachGlobalListeners(i),{popDown:!p,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var Vr=(e=>(e.Left="left",e.Right="right",e.Both="both",e))(Vr||{});const de=Pt()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new lS(new sw(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>C`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${gr};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${tl({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${xo};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${su}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;

            /* highest possible z-index */
            z-index: 2147483647;

            & > * {
                pointer-events: auto;
                max-width: 100%;
            }

            &.right-aligned {
                align-items: flex-end;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,events:{navSelect:vt(),openChange:vt(),init:vt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:o}){e.popUpManager.listen(uw,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!r.isDisabled){const s=n.shadowRoot.querySelector(".dropdown-wrapper");er.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(aw,s=>{r.keepOpenAfterInteraction||a0({open:!1,callback(u){t({showPopUpResult:u})},host:n,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:o,slotNames:s}){function u({emitEvent:g,open:E},D){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&D){const S=o.shadowRoot.querySelector(".dropdown-trigger");if(S&&!D.composedPath().includes(S))return}a0({open:E,callback(S){i({showPopUpResult:S}),g&&e(new t.openChange(S))},host:o,popUpManager:n.popUpManager})}r.isDisabled?u({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?u({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&u({emitEvent:!1,open:!0},void 0));const a=r.horizontalAnchor==="right"&&n.showPopUpResult?C`
                      left: -${n.showPopUpResult.positions.diff.left}px;
                  `:C`
                      left: ${r.popUpOffset?.left||0}px;
                  `,l=n.showPopUpResult&&r.horizontalAnchor==="left"?C`
                      right: -${n.showPopUpResult.positions.diff.right}px;
                  `:C`
                      right: ${r.popUpOffset?.right||0}px;
                  `,c=C`
            ${a}
            ${l}
        `,f=n.showPopUpResult?n.showPopUpResult.popDown?C`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:C`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                      ${c}
                  `:void 0;function p(g){u({emitEvent:!0,open:!n.showPopUpResult},g)}return w`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${An({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${Q("keydown",g=>{!n.showPopUpResult&&g.code.startsWith("Arrow")&&u({emitEvent:!0,open:!0},g)})}
                ${Q("click",g=>{g.detail===0&&p(g)})}
                ${Q("mousedown",g=>{g.button===0&&p(g)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>
                <div
                    class="pop-up-positioner ${An({"right-aligned":r.horizontalAnchor==="right"})}"
                    style=${f}
                >
                    ${Vt(!!n.showPopUpResult,w`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),cS={menu:"menu-trigger-menu"},Ur=Pt()({tagName:"vira-menu-trigger",styles:C`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${de} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,events:{itemActivate:vt(),openChange:vt()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i}){return w`
            <${de.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset,horizontalAnchor:e.horizontalAnchor||Vr.Left})}
                class=${An({open:!!t.showPopUpResult})}
                ${Q(de.events.init,o=>{n({navController:o.detail.navController,popUpManager:o.detail.popUpManager})})}
                ${Q(de.events.openChange,o=>{!!t.showPopUpResult!=!!o.detail&&r(new i.openChange(o.detail)),n({showPopUpResult:o.detail})})}
                ${Q(de.events.navSelect,o=>{const s=o.detail.x,u=e.items[s];if(!u)throw new Error(`Found no dropdown option at index '${s}'`);r(new i.itemActivate(R8(u,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${de.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?w`
                          <${ps.assign({direction:t.showPopUpResult.popDown?ma.Downwards:ma.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${de.slotNames.popUp}
                              class=${An({"full-width-menu":e.horizontalAnchor===Vr.Both})}
                          >
                              <${hs.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${no(cS.menu)}
                              ></${hs}>
                          </${ps}>
                      `:fe}
            </${de}>
        `}}),Te=Pt()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>C`
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
    `,render({inputs:e}){return w`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var lw=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(lw||{});const He=Pt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>C`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${xo};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Co["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${su};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${gr};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Qn["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${Dr["vira-interaction-animation-duration"].value},
                background-color
                    ${Dr["vira-interaction-animation-duration"].value},
                border-color ${Dr["vira-interaction-animation-duration"].value};

            ${tl({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${V} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${V} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?w`
                  <${V.assign({icon:e.icon})}></${V}>
              `:fe,n=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:w`
                  <span class="empty-text">&nbsp;</span>
              `;return w`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),fS=ve({name:"Chat24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),cw=ve({name:"ChevronUp24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${k["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),fw=ve({name:"CloseX24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dS=ve({name:"Commit24Icon",svgTemplate:w`
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
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),mS=ve({name:"Document24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),dw=ve({name:"Element16Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),br=ve({name:"Element24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mw=ve({name:"EyeClosed24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),hw=ve({name:"EyeOpen24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),pw=ve({name:"Loader24Icon",svgTemplate:w`
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
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),hS=C`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Dr["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Bs=ve({name:"LoaderAnimated24Icon",svgTemplate:w`
        <style>
            ${hS}
        </style>
        ${pw.svgTemplate}
    `}),gs=ve({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pS=ve({name:"Pencil24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),gS=ve({name:"Shield24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),yS=ve({name:"SpeakerLoud24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),wS=ve({name:"SpeakerMedium24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),bS=ve({name:"SpeakerMuted24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),$S=ve({name:"SpeakerQuiet24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),DS=ve({name:"Star24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
                fill=${k["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ha=ve({name:"StatusFailure24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),vS=ve({name:"StatusInProgress24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ES=ve({name:"StatusSuccess24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),CS=ve({name:"StatusWarning24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),jc={Chat24Icon:fS,Check24Icon:Cd,ChevronUp24Icon:cw,CloseX24Icon:fw,Commit24Icon:dS,Document24Icon:mS,Element16Icon:dw,Element24Icon:br,EyeClosed24Icon:mw,EyeOpen24Icon:hw,Loader24Icon:pw,LoaderAnimated24Icon:Bs,Options24Icon:gs,Pencil24Icon:pS,Shield24Icon:gS,SpeakerLoud24Icon:yS,SpeakerMedium24Icon:wS,SpeakerMuted24Icon:bS,SpeakerQuiet24Icon:$S,Star24Icon:DS,StatusFailure24Icon:ha,StatusInProgress24Icon:vS,StatusSuccess24Icon:ES,StatusWarning24Icon:CS},Xe=Pt()({tagName:"vira-checkbox",styles:C`
        :host {
            height: 24px;
            aspect-ratio: 1;
            display: inline-flex;
        }

        label,
        ${V}, .custom-checkbox {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        label {
            &.disabled {
                cursor: not-allowed;
            }
        }

        ${V} {
            ${k["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            border: 1px solid ${qt["vira-form-border-color"].value};
            color: ${qt["vira-form-foreground-color"].value};
            border-radius: ${Qn["vira-form-input-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${tl({elementBorderSize:1})}

            &.checked {
                & ${V} {
                    opacity: 1;
                }
            }

            &:hover {
                background-color: ${qt["vira-form-selection-hover-background-color"].value};
            }

            &:active {
                background-color: ${qt["vira-form-selection-active-background-color"].value};
            }

            &.disabled {
                ${su};
            }
        }
    `,events:{valueChange:vt()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}return w`
            <label
                class=${An({disabled:!!e.disabled})}
                ${to(e.attributePassthrough?.label)}
                style=${tn(e.stylePassthrough?.label)}
            >
                <span
                    class="custom-checkbox ${An({checked:e.value,disabled:!!e.disabled})}"
                    role="checkbox"
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${to(e.attributePassthrough?.["custom-checkbox"])}
                    style=${tn(e.stylePassthrough?.["custom-checkbox"])}
                    ${Q6(r)}
                    ${Q("click",r)}
                >
                    <${V.assign({icon:Cd,fitContainer:!0})}
                        ${to(e.attributePassthrough?.[V.tagName])}
                        style=${tn(e.stylePassthrough?.[V.tagName])}
                    ></${V}>
                </span>
            </label>
        `}}),ur=Pt()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${gr};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Dr["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:vt()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:o}){const s=o.expanded?C`
                  height: ${e.contentHeight}px;
              `:C`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${Q("click",()=>{r(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${L1(({contentRect:u})=>{n({contentHeight:u.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Kl={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},us=Pt()({tagName:"vira-dropdown",styles:C`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${Ur} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${Dr["vira-interaction-animation-duration"].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
        }

        .dropdown-trigger {
            ${xo};
            border: 1px solid ${qt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${Qn["vira-form-input-radius"].value};
            background-color: ${qt["vira-form-background-color"].value};
            color: ${qt["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:vt(),openChange:vt()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i}){const o=No(t.selected,c=>t.options.find(f=>f.id===c),F.isTruthy),s=t.icon?w`
                  <${V.assign({icon:t.icon})}
                      ${no(Kl.icon)}
                  ></${V}>
              `:fe,u=!o.length,a=t.selectionPrefix&&!u?w`
                      <span class="selected-label-prefix" ${no(Kl.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:fe,l=u?t.placeholder||"":t.isMultiSelect&&o.length>1?`${o.length} Selected`:o[0]?.label||"";return w`
            <${Ur.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24},horizontalAnchor:t.horizontalAnchor||Vr.Both})}
                ${Q(Ur.events.openChange,c=>{i({showPopUpResult:c.detail}),n(new r.openChange(c.detail))})}
                ${Q(Ur.events.itemActivate,c=>{n(new r.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${An({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${no(Kl.trigger)}
                >
                    ${s}
                    <span
                        class="selection-display ${An({"using-placeholder":u})}"
                        title=${tn(u?void 0:l)}
                    >
                        ${a} ${l}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${V.assign({icon:cw})}
                            class="trigger-icon"
                        ></${V}>
                    </span>
                </div>
            </${Ur}>
        `}}),Tr=Pt()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:vt(),imageError:vt()},styles:({hostClasses:e})=>C`
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
    `,render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:o}){const s=e.imageUrl,u=t.erroredUrls[s]?w`
                  <slot class="status-wrapper" name=${o.error}>
                      <${V.assign({icon:ha})} class="error"></${V}>
                  </slot>
              `:t.loadedUrls[s]?void 0:w`
                    <slot class="status-wrapper" name=${o.loading}>
                        <${V.assign({icon:Bs})}></${V}>
                    </slot>
                `;return w`
            ${Vt(!!u,u)}
            <img
                class=${An({hidden:!!u})}
                ${Q("load",async()=>{e._debugLoadDelay&&await bs(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${Q("error",async a=>{e._debugLoadDelay&&await bs(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[s]:!0}}),r(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function _c({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(n=>_c({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xS({value:e,allowed:t,blocked:n}){const r=t?_c({input:e,matcher:t}):!0,i=n?_c({input:e,matcher:n}):!1;return r&&!i}function Vc(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(xS({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function AS({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){const o=ss(n,HTMLInputElement),s=F.hasKey(n,"data")&&A$.isString(n.data)||"";if(s){const{blocked:a}=Vc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});a.length&&r(a)}const u=Vc({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==u&&(o.value=u),t!==u&&i(u)}var qc=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(qc||{});const Be=Pt()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>C`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${su};
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
                ${gr};
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
                ${xo};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${gr};
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
                border-radius: ${Qn["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Dr["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${gr};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Qn["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${gr};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border {
                    ${tl({elementBorderSize:0,noNesting:!0})}
                }
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

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${xo};
            }

            button {
                ${gr};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Dr["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:vt(),inputBlocked:vt()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:o})=>{const{filtered:s}=Vc({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),u=e.icon?w`
                  <${V.assign({icon:e.icon})} class="left-side-icon"></${V}>
              `:fe,a=e.fitText?C`
                  width: ${n.forcedInputWidth}px;
              `:fe,l=e.disableBrowserHelps||e.type==="password";return w`
            <span
                class="input-wrapper"
                ${Q("mouseup",()=>{Ds.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement).focus()})}
            >
                ${u}
                ${Vt(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${L1(({contentRect:c})=>{r({forcedInputWidth:c.width})})}
                        >
                            <pre>${s||e.placeholder||fe}</pre>
                        </span>
                    `)}
                <input
                    type=${FS(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${tn(l?"off":void 0)}
                    autocorrect=${tn(l?"off":void 0)}
                    autocapitalize=${tn(l?"off":void 0)}
                    spellcheck=${tn(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Q("input",c=>{AS({inputs:e,previousValue:s,event:c,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${tn(e.placeholder||void 0)}
                    ${to(e.attributePassthrough)}
                />
                ${Vt(!!(e.showClearButton&&e.value),w`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Q("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${V.assign({icon:fw})}></${V}>
                        </button>
                    `)}
                ${Vt(e.type==="password",w`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Q("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${V.assign({icon:n.showPassword?hw:mw})}></${V}>
                        </button>
                    `)}
                ${Vt(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style wrapper-border"></div>
            </span>
        `}});function FS(e,t){return e==="password"&&t?"text":e||"text"}const Ft=Pt()({tagName:"vira-progress",cssVars:{"vira-progress-border-radius":"99999999px","vira-progress-background-color":"#eee","vira-progress-foreground-color":"dodgerblue"},styles:({cssVars:e})=>C`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            border-radius: ${e["vira-progress-border-radius"].value};
            color: ${e["vira-progress-foreground-color"].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${e["vira-progress-background-color"].value};
            height: 100%;
            flex-grow: 1;
        }
    `,render({inputs:e,host:t}){const n=e.min||0,i=(e.max||100)-n,o=e.value-n,s=G$(Math.round(o/i*100),{min:0,max:100});return tw(t,{"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.value,"aria-role":"progressbar"}),w`
            <div
                class="progress-bar"
                style=${s?C`
                          width: ${s}%;
                      `:C`
                          display: none;
                      `}
            ></div>
            <div class="background-bar"></div>
        `}}),Nn=U1(),vn=Nn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>C`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return w`
            <a
                href=${n}
                ${Q("click",r=>{(!e.router||J1(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new da(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function kS(e,t){return e.entry.entryType===Dt.Root?!1:e.entry.entryType===Dt.Page||F.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:F.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const fr=Nn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>C`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${le["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${le["element-book-nav-hover-background-color"].value};
            color: ${le["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${le["element-book-nav-active-background-color"].value};
            color: ${le["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${vn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${le["element-book-nav-selected-background-color"].value};
            color: ${le["element-book-nav-selected-foreground-color"].value};
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

        ${V} {
            display: inline-flex;
            color: ${le["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!kS(n,e.selectedPath))return;const r=C`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return w`
                <li style=${r}>
                    <${vn.assign({router:e.router,route:{paths:[Ln.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${An({"title-row":!0,selected:e.selectedPath?F.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Vt(eo(n,Dt.ElementExample),w`
                                    <${V.assign({icon:dw})}></${V}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${vn}>
                </li>
            `});return w`
            <${vn.assign({route:lo,router:e.router})}>
                <slot name=${wr.NavHeader}>Book</slot>
            </${vn}>
            <ul>
                ${t}
            </ul>
        `}});async function SS(e){await Uc(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await p8(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Gr=Nn()({tagName:"book-error",styles:C`
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
    `,render({inputs:e}){return(F.isArray(e.message)?e.message:[e.message]).map(n=>w`
                <p>${n}</p>
            `)}}),Rs=Nn()({tagName:"book-page-controls",events:{controlValueChange:vt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>C`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${le["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Be} {
            height: 24px;
            max-width: 128px;
        }

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],o)=>{if(i.controlType===ue.Hidden)return"";const s=NS(e.currentValues[r],i,u=>{const a=F.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...e.currentValues,[r]:u}}))});return w`
                    <div class="control-wrapper">
                        ${Vt(o===0,w`
                                <${V.assign({icon:gs})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function NS(e,t,n){return _i(t,ue.Hidden)?"":_i(t,ue.Checkbox)?w`
            <input
                type="checkbox"
                ?checked=${e}
                ${Q("input",r=>{const i=ss(r,HTMLInputElement);n(i.checked)})}
            />
        `:_i(t,ue.Color)?w`
            <input
                type="color"
                .value=${e}
                ${Q("input",r=>{const i=ss(r,HTMLInputElement);n(i.value)})}
            />
        `:_i(t,ue.Text)?w`
            <${Be.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${Q(Be.events.valueChange,r=>{n(r.detail)})}
            ></${Be}>
        `:_i(t,ue.Number)?w`
            <input
                type="number"
                .value=${e}
                ${Q("input",r=>{const i=ss(r,HTMLInputElement);n(i.value)})}
            />
        `:_i(t,ue.Dropdown)?w`
            <select
                .value=${e}
                ${Q("input",r=>{const i=ss(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>w`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:w`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const g0=Nn()({tagName:"book-breadcrumbs",styles:C`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const o=r>=i.length-1,s=i.slice(0,r+1),u=o?"":w`
                      <span class="spacer">&gt;</span>
                  `;return w`
                <${vn.assign({route:{hash:void 0,search:void 0,paths:[Ln.Book,...s]},router:e.router})}>
                    ${n}
                </${vn}>
                ${u}
            `}):w`
                &nbsp;
            `}}),Zl=Nn()({tagName:"book-breadcrumbs-bar",styles:C`
        :host {
            border-bottom: 1px solid
                ${le["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${le["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return w`
            ${Vt(!!e.currentSearch,w`
                    &nbsp;
                `,w`
                    <${g0.assign({currentRoute:e.currentRoute,router:e.router})}></${g0}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await bs({milliseconds:200}),r.value===i&&(r.value?t(new da({paths:[Ln.Search,encodeURIComponent(r.value)]})):t(new da(lo)))})}
            />
        `}}),y0=Nn()({tagName:"book-entry-description",styles:C`
        :host {
            color: ${le["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${le["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>w`
                <p>${t}</p>
            `)}}),w0=Nn()({tagName:"book-page-wrapper",styles:C`
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

        ${vn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?w`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:w`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Ln.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?cg(e.pageNode.entry.errors):void 0;return r&&console.error(r),w`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${vn.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${vn}>
                    ${r?w`
                              <${Gr.assign({message:r.message})}></${Gr}>
                          `:w`
                              <${y0.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${y0}>
                              <${Rs.assign({config:e.pageNode.entry.controls,currentValues:cf(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Rs}>
                          `}
                </div>
            </div>
        `}}),Tu=Nn()({tagName:"book-element-example-controls",styles:C`
        :host {
            display: flex;
            color: ${le["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[Ln.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return w`
            <${vn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${vn}>
        `}}),b0=Symbol("unset-internal-state"),$0=Nn()({tagName:"book-element-example-viewer",state(){return{isUnset:b0}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw cg(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===b0&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return w`
                ${Vt(!!t.elementExampleNode.entry.styles,w`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",Kt(r)),console.error(r),w`
                <${Gr.assign({message:`${t.elementExampleNode.entry.title} failed: ${Kt(r)}`})}></${Gr}>
            `}},options:{allowPolymorphicState:!0}}),D0=Nn()({tagName:"book-element-example-wrapper",styles:C`
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

        ${Tu} {
            color: ${le["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Tu} {
            color: ${le["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return w`
            <div class="individual-example-wrapper">
                <${Tu.assign(Q$(e,["currentPageControls"]))}></${Tu}>
                <${$0.assign(e)}></${$0}>
            </div>
        `}});function gw(e,t,n,r){const i=dc(n,r),o=[];if(i){const s=gw(e,t,i,r);s&&o.push(s)}if(eo(n,Dt.Page)&&!e.includes(n)){const s=cf(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:s,breadcrumbs:an(s,()=>n.fullUrlBreadcrumbs)})}return o.reduce((s,u)=>({config:{...s.config,...u.config},current:{...s.current,...u.current},breadcrumbs:{...s.breadcrumbs,...u.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function IS({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:o}){if(!e.length&&r)return[w`
                No results
            `];const s=F.isLengthAtLeast(e,1)?gw(e,i,e[0],o):void 0,u=s&&Object.values(s.config).length&&F.isLengthAtLeast(e,1)?w`
                  <${Rs.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Rs}>
              `:fe,a=G6(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(eo(l,Dt.Page))return w`
                    <${w0.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${w0}>
                `;if(eo(l,Dt.ElementExample)){const c=cf(i,l.fullUrlBreadcrumbs.slice(0,-1));return w`
                    <${D0.assign({elementExampleNode:l,currentPageControls:c,router:n})}
                        class="inline-entry"
                    ></${D0}>
                `}else return eo(l,Dt.Root)?fe:w`
                    <${Gr.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${Gr}>
                `});return[u,a]}const Ki=Nn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:C`
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

        ${Zl} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Dr["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:vt()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const o=mc(e.currentRoute.paths),s=IS({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return w`
            <${Zl.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${Zl}>

            ${Vt(e.showLoading,w`
                    <div
                        ${e0(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${V.assign({icon:Bs})}></${V}>
                    </div>
                    ${Vt(!!r.lastElement,w`
                            ${r.lastElement}
                            <slot name=${wr.Footer}></slot>
                        `)}
                `,w`
                    <div
                        ${e0(u=>{i({lastElement:u})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${wr.Footer}></slot>
                `)}
        `}});function TS(e,t,n){const r=v0(e,t);return r.length?r:(n(lo),v0(e,lo.paths))}function v0(e,t){return e.filter(n=>lD({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const Gl=wd()({tagName:"element-book-app",state(){return{currentRoute:lo,router:void 0,loading:!0,colors:{config:void 0,theme:t0(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:vt()},styles:C`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${le["element-book-page-background-color"].value};
            color: ${le["element-book-page-foreground-color"].value};
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

        ${Ki} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${fr} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await E0(e,mc(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:o})=>{t._debug&&console.info("rendering element-book app");function s(c){return{...e.currentRoute,...c}}function u(c){const f=s(c);return!F.jsonEquals(e.currentRoute,f)}function a(c){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(F.isTruthy).join(" - "))}function l(c){if(!u(c))return;const f=s(c);e.router?e.router.setRoute(f):r({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!F.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=P8(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,T=>{r({currentRoute:T})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!F.jsonEquals(c,e.colors.config)){const A=t0(c);r({colors:{config:c,theme:A}}),VD(n,A)}const f=t._debug??!1,p=hD({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Ag(p.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const g=mc(e.currentRoute.paths),D=(g?v8({flattenedNodes:p.flattenedNodes,searchQuery:g}):void 0)??TS(p.flattenedNodes,e.currentRoute.paths,l);a(D[0]?.entry.title);const S=e.treeBasedControls?.controls;return S?(t._debug&&console.info({currentControls:S}),w`
                <div
                    class="root"
                    ${Q(da,async A=>{const T=A.detail;if(!u(T))return;if(r({loading:!0}),l(T),!(n.shadowRoot.querySelector(fr.tagName)instanceof fr))throw new TypeError(`Failed to find child '${fr.tagName}'`);await E0(n,g,e.currentRoute)})}
                    ${Q(Rs.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const T=gD(S,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:T}})})}
                >
                    <${fr.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${wr.NavHeader}
                            slot=${wr.NavHeader}
                        ></slot>
                    </${fr}>
                    <${Ki.assign({controls:S,currentNodes:D,currentRoute:e.currentRoute,debug:f,originalTree:p.tree,router:e.router,showLoading:e.loading})}
                        ${Q(Ki.events.loadingRender,async A=>{await Uc();const T=n.shadowRoot.querySelector(Ki.tagName);T?T.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ki.tagName}' for scrolling.`),await Uc(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${wr.Footer}
                            slot=${wr.Footer}
                        ></slot>
                    </${Ki}>
                </div>
            `):w`
                    <${Gr.assign({message:"Failed to generate page controls."})}></${Gr}>
                `}catch(c){return console.error(c),w`
                <p class="error">${Kt(c)}</p>
            `}}});async function E0(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(fr.tagName);if(!(r instanceof fr))throw new TypeError(`Failed to find child '${fr.tagName}'`);await SS(r)}const xt=mt({title:"Elements",parent:void 0}),MS=mt({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:ue.Color,initValue:""},"Fill Color":{controlType:ue.Color,initValue:""},"Stroke Width":{controlType:ue.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(jc).forEach(t=>{e({title:t.name,styles:C`
                    :host(:hover) ${V} {
                        background-color: #f2f2f2;
                    }

                    ${V} {
                        padding: 8px;
                        border-radius: ${Qn["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=C`
                        ${k["vira-icon-fill-color"].name}: ${Ke(n["Fill Color"]||"inherit")};
                        ${k["vira-icon-stroke-color"].name}: ${Ke(n["Stroke Color"]||"inherit")};
                        ${k["vira-icon-stroke-width"].name}: ${Ke(n["Stroke Width"]?mg(n["Stroke Width"]):"inherit")};
                    `;return w`
                        <${V.assign({icon:t})} style=${r}></${V}>
                    `}})})}}),PS=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:w`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:C`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:C`
            ${nn} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],OS=mt({title:nn.tagName,parent:xt,controls:{Selected:{controlType:ue.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:ue.Text,initValue:""}},defineExamples({defineExample:e}){PS.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?w`
                            <${nn.assign(r)}>
                                ${t.customTemplate}
                            </${nn}>
                        `:w`
                            <${nn.assign(r)}></${nn}>
                        `}})})}}),Wc=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new Ed({sanitizeRoute(e){return e}})}}],BS=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:Ad.AllRounded}},{title:"disabled",inputs:{isDisabled:!0}},{title:"long item",inputs:{items:[...Wc,{id:"long",label:w`
                        <${nn.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${nn}>
                    `}]}},{title:"restricted long item",inputs:{horizontalAnchor:Vr.Both,items:[...Wc,{id:"long",label:w`
                        <${nn.assign({selected:!1})}>
                            <div
                                style=${C`
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                `}
                            >
                                This menu item is much longer than the others
                            </div>
                        </${nn}>
                    `}]}}],RS=mt({parent:xt,title:Ur.tagName,descriptionParagraphs:["No selection state logic is included in these examples."],defineExamples({defineExample:e}){BS.forEach(t=>{e({title:t.title,styles:C`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${Ur.assign({items:Wc,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${Ur}>
                    `}})})}}),yw=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],LS=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...yw,{id:4,label:"link here",route:{route:{paths:["test"]},router:new Ed({sanitizeRoute(e){return e}})}}]}}],US=mt({parent:xt,title:hs.tagName,defineExamples({defineExample:e}){LS.forEach(t=>{e({title:t.title,render(){return w`
                        <${hs.assign({isMultiSelect:!1,navController:void 0,items:yw,selected:[],...t.inputs})}></${hs}>
                    `}})})}}),ww=[];Rn(ma).forEach(e=>{Rn(Ad).forEach(t=>{ww.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const jS=mt({parent:xt,title:ps.tagName,defineExamples({defineExample:e}){ww.forEach(t=>{e({title:t.title,styles:C`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return w`
                        <${ps.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${ps}>
                    `}})})}}),_S=mt({parent:xt,title:de.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:C`
                ${de} {
                    ${Co["vira-focus-outline-border-radius"].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${de.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>Pop up!</div>
                    </${de}>
                `}}),e({title:"long clipped content",styles:C`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Clipped Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"long right anchored content",styles:C`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Vr.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Right Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"long left anchored content",styles:C`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Vr.Left})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>
                            really long content in here really long content in here really long
                            content in here really long content in here really long content in here
                        </div>
                    </${de}>
                `}}),e({title:"short right anchored content",styles:C`
                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .pop-up {
                    box-sizing: border-box;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    white-space: nowrap;
                    background-color: white;
                }
            `,render(){return w`
                    <${de.assign({keepOpenAfterInteraction:!0,horizontalAnchor:Vr.Right})}>
                        <div slot=${de.slotNames.trigger}>
                            Trigger Long Left Anchored Pop Up
                        </div>
                        <div class="pop-up" slot=${de.slotNames.popUp}>not long</div>
                    </${de}>
                `}})}}),VS=mt({parent:xt,title:Te.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:ue.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return w`
                    <${Te.assign({text:"Text here",bold:!1})}></${Te}>
                `}}),e({title:"Bold",render(){return w`
                    <${Te.assign({text:"Text here",bold:!0})}></${Te}>
                `}}),e({title:"Dynamic",render({controls:t}){return w`
                    <${Te.assign({text:"Text here",bold:t.bolded})}></${Te}>
                `}}),e({title:"Resized",styles:C`
                ${Te} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return w`
                    <${Te.assign({text:"Not Bolded",bold:!1})}></${Te}>
                    <${Te.assign({text:"Bolded",bold:!0})}></${Te}>
                `}}),e({title:"Alignment",styles:C`
                ${Te} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return w`
                    <${Te.assign({text:"Not Bolded",bold:!1})}></${Te}>
                    <${Te.assign({text:"Bolded",bold:!0})}></${Te}>
                `}}),e({title:"Stylized",styles:C`
                ${Te} {
                    text-decoration: underline;
                }
            `,render(){return w`
                    <${Te.assign({text:"Not Bolded",bold:!1})}></${Te}>
                    <${Te.assign({text:"Bolded",bold:!0})}></${Te}>
                `}})}}),qS=mt({parent:xt,title:He.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:ue.Color,initValue:He.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:ue.Color,initValue:He.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:ue.Color,initValue:He.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:ue.Color,initValue:He.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const o=r??C``;e({title:n,styles:o,render({controls:s}){const u=C`
                        ${He.cssVars["vira-button-primary-color"].name}: ${Ke(s["Primary color"]||"inherit")};
                        ${He.cssVars["vira-button-secondary-color"].name}: ${Ke(s["Secondary color"]||"inherit")};
                        ${He.cssVars["vira-button-primary-hover-color"].name}: ${Ke(s["Hover color"]||"inherit")};
                        ${He.cssVars["vira-button-primary-active-color"].name}: ${Ke(s["Active color"]||"inherit")};
                    `;return w`
                        <${He.assign({text:"hello",...i})}
                            style=${u}
                        ></${He}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:gs}}),t({title:"with expanding icon",inputs:{icon:gs,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:lw.Outline}}),t({title:"only icon",inputs:{icon:gs,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:C`
                ${He} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:C`
                ${He} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:C`
                :host {
                    ${He.cssVars["vira-button-primary-color"].name}: pink;
                    ${He.cssVars["vira-button-secondary-color"].name}: purple;
                    ${He.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${He.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return w`
                    <${He.assign({text:"hello"})}></${He}>
                `}})}}),WS=mt({parent:xt,title:Xe.tagName,controls:{Checked:{controlType:ue.Checkbox,initValue:!1},Disabled:{controlType:ue.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"checked",state(){return{checked:!0}},render({state:t,updateState:n}){return w`
                    <${Xe.assign({value:t.checked})}
                        ${Q(Xe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Xe}>
                `}}),e({title:"unchecked",state(){return{checked:!1}},render({state:t,updateState:n}){return w`
                    <${Xe.assign({value:t.checked})}
                        ${Q(Xe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Xe}>
                `}}),e({title:"disabled unchecked",render(){return w`
                    <${Xe.assign({value:!1,disabled:!0})}></${Xe}>
                `}}),e({title:"disabled checked",render(){return w`
                    <${Xe.assign({value:!0,disabled:!0})}></${Xe}>
                `}}),e({title:"dynamic",descriptionParagraphs:["Should only update when controls change."],render({controls:t}){return w`
                    <${Xe.assign({value:t.Checked,disabled:t.Disabled})}></${Xe}>
                `}}),e({title:"no listener",descriptionParagraphs:["Should not update on user clicks."],render(){return w`
                    <${Xe.assign({value:!0})}></${Xe}>
                `}}),e({title:"big",styles:C`
                ${Xe} {
                    height: 200px;
                    width: 200px;
                }
            `,state(){return{checked:!0}},render({state:t,updateState:n}){return w`
                    <${Xe.assign({value:t.checked})}
                        ${Q(Xe.events.valueChange,r=>{n({checked:r.detail})})}
                    ></${Xe}>
                `}})}}),zS=mt({title:ur.tagName,parent:xt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${ur.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(ur.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${ur.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Vt(!!n.showMoreStates[i],w`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${ur}>
                    `)}}),e({title:"wider examples",styles:C`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>w`
                        <${ur.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(ur.events.expandChange,o=>{const s=[...n.expandedStates];s[i]=o.detail,t({expandedStates:s})})}
                        >
                            <div
                                class="section-header"
                                slot=${ur.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Q("click",()=>{const o=[...n.showMoreStates];o[i]=!o[i],t({showMoreStates:o})})}
                            >
                                show more
                            </button>
                            ${Vt(!!n.showMoreStates[i],w`
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
                        </${ur}>
                    `)}})}}),ys=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],KS=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...ys,{id:42,label:w`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...ys,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:C`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:C`
            ${us} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:br}}],ZS=mt({title:us.tagName,parent:xt,controls:{Selected:{controlType:ue.Dropdown,initValue:"",options:["",...ys.map(e=>e.label)]},Prefix:{controlType:ue.Text,initValue:""},"Force State":{controlType:ue.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:ue.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:ue.Dropdown,initValue:"",options:["",...Object.keys(jc)]},Disabled:{controlType:ue.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:ue.Text,initValue:"Select something"}},defineExamples({defineExample:e}){KS.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const o={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||ys,selected:i.Selected?[ys.find(s=>s.label===i.Selected)?.id].filter(F.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?jc[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return w`
                        <${us.assign(o)}
                            ${Q(us.events.selectedChange,s=>{r({selected:s.detail})})}
                        ></${us}>
                    `}})})}}),GS=mt({title:V.tagName,parent:xt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return w`
                    <${V.assign({icon:br})}></${V}>
                `}}),e({title:"using createColoredIcon",render(){return w`
                    <${V.assign({icon:l0(br,{"vira-icon-stroke-color":"red"})})}></${V}>
                `}}),e({title:"fit container",styles:C`
                ${V} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return w`
                    <${V.assign({icon:l0(br,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${V}>
                `}})}}),YS=mt({title:Tr.tagName,parent:xt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:C`
                    border-radius: 32px;
                `,loadingSlot:w`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:Bs,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:C`
                    border-radius: 32px;
                `,errorSlot:w`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:ha,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:C`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:C`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:w`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${V.assign({icon:Bs,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `,errorSlot:w`
                    <div
                        style=${C`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${V.assign({icon:ha,fitContainer:!0})}
                            style=${C`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${V}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:C`
                    ${Tr} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||C``}
                    }

                    ${n.allowReload?C`
                              ${Tr} {
                                  cursor: pointer;
                              }

                              ${Tr}:hover {
                                  border-color: #0055ff;
                              }
                          `:C``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:n.inputs.imageUrl}},render({state:r,updateState:i}){return w`
                        <${Tr.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${Q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${lg()}`})})}
                        >
                            ${n.loadingSlot?w`
                                      <div class="slot-wrapper" slot=${Tr.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:fe}${n.errorSlot?w`
                                      <div class="slot-wrapper" slot=${Tr.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:fe}
                        </${Tr}>
                    `}})})}}),JS=mt({title:Be.tagName,parent:xt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:ue.Color,initValue:Be.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:ue.Color,initValue:Be.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:ue.Color,initValue:Be.cssVars["vira-input-border-color"].default},"Focus color":{controlType:ue.Color,initValue:Co["vira-focus-outline-color"].default},"Selection color":{controlType:ue.Color,initValue:Be.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:o}){e({title:i,styles:C`
                    ${r||C``}
                `,state(){return{value:o.value}},render({state:s,updateState:u,controls:a}){const l={[String(Be.cssVars["vira-input-text-color"].name)]:a["Text color"],[String(Be.cssVars["vira-input-placeholder-color"].name)]:a["Placeholder color"],[String(Be.cssVars["vira-input-border-color"].name)]:a["Border color"],[String(Co["vira-focus-outline-color"].name)]:a["Focus color"],[String(Be.cssVars["vira-input-text-selection-color"].name)]:a["Selection color"]},c=an(l,(p,g)=>g||"inherit"),f=Object.entries(c).map(([p,g])=>[p,g].join(": ")+";").join(`
`);return w`
                        <${Be.assign({...o,value:s.value})}
                            style=${f}
                            ${Q(Be.events.valueChange,p=>{u({value:p.detail}),console.info("changed:",p.detail)})}
                        ></${Be}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:br}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:C`
                    ${Be} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:br}},{title:"taller height",styles:C`
                    ${Be} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:br}},{title:"shorter height",styles:C`
                    ${Be} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:br}},{title:"max width",styles:C`
                    ${Be} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:C`
                    ${Be} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:qc.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:qc.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),HS=mt({title:Ji.tagName,parent:xt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:ue.Color,initValue:""},"Hover color":{controlType:ue.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const o=C`
                        ${Ji.cssVars["vira-link-hover-color"].name}: ${Ke(i["Hover color"]||"inherit")};
                        color: ${Ke(i["CSS Color"]||"inherit")};
                    `;return w`
                        <${Ji.assign(r)} style=${o}>My Link</${Ji}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),XS=[{title:"basic"},{title:"adjusted min",inputs:{min:-100,value:-50}},{title:"out of bounds",inputs:{value:200}},{title:"tiny progress",inputs:{value:.5}},{title:"tiny bit more progress",inputs:{value:2}},{title:"no progress",inputs:{value:0}},{title:"full progress",inputs:{value:100}},{title:"custom styles tiny progress",styles:C`
            :host {
                ${Ft.cssVars["vira-progress-background-color"].name}: red;
                ${Ft.cssVars["vira-progress-foreground-color"].name}: black;
                ${Ft.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ft} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:.5}},{title:"custom styles half",styles:C`
            :host {
                ${Ft.cssVars["vira-progress-background-color"].name}: red;
                ${Ft.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Ft.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ft} {
                height: 50px;
                width: 200px;
            }
        `},{title:"custom styles full",styles:C`
            :host {
                ${Ft.cssVars["vira-progress-background-color"].name}: red;
                ${Ft.cssVars["vira-progress-foreground-color"].name}: yellow;
                ${Ft.cssVars["vira-progress-border-radius"].name}: 5px;
            }

            ${Ft} {
                height: 50px;
                width: 200px;
            }
        `,inputs:{value:100}}],QS=mt({parent:xt,title:Ft.tagName,defineExamples({defineExample:e}){XS.forEach(t=>{e({title:t.title,styles:C`
                    ${t.styles||C``}
                `,render(){return w`
                        <${Ft.assign({value:50,...t.inputs})}></${Ft}>
                    `}})})}}),eN=[xt,MS],tN=[VS,qS,WS,zS,ZS,GS,YS,JS,HS,OS,US,RS,jS,_S,QS].sort((e,t)=>e.title.localeCompare(t.title)),nN=[...eN,...tN];wd()({tagName:"vira-book-app",styles:C`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Gl} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return w`
            <${Gl.assign({internalRouterConfig:{basePath:Dd("element-vir","vira"),useInternalRouter:!0},pages:nN,themeColor:"#33ccff"})}>
                <h1 slot=${wr.NavHeader}>Vira</h1>
            </${Gl}>
        `}});
